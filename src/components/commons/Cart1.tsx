import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PriceDisplay, currencySymbolMap } from "./Price";
import { useCartDispatch, useCartState } from "@/context/CartContext";
import { usePriceContext } from "@/context";
import Image from "next/image";

const CartOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  background: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  z-index: 100;
  color: #000;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  height: 100%;
  border-radius: 15px;
  @media (max-width: 768px) {
    top: 25%;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.3s ease-in-out;
    transform: translateY(${(props) => (props.$isOpen ? "0" : "100%")});
  }
  @media (min-width: 769px) {
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 400px;
    transition: all 0.3s ease-in-out;
    height: 100%;
    transform: translateX(${(props) => (props.$isOpen ? "0" : "100%")});
  }
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

const CartTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #ff8c00;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4500;
  }

  &:active {
    color: #ff0000;
  }

  &:before {
    content: "\2715";
    display: inline-block;
    font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
    font-weight: 900;
  }
`;

const CartItemList = styled.ul`
  list-style: none;
  padding: 0;
  max-height: 40vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #00453a;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #006652;
  }
`;


const CartItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
`;

const ItemName = styled.p`
  margin: 0;
  font-family: ${(props) => props.theme.fontFace.fonts.poppins};
  color: #333;
`;

const ItemPrice = styled.span`
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
`;

const QuantitySelector = styled.select`
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
`;

const CheckoutButton = styled.button`
  background: #00453a;
  color: #fff;
  padding: 1rem;
  width: 90%;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  justify-self: center;
  &:hover,
  &:focus {
    background: #ff8c00;
    outline: none;
    transform: scale(1.02);
  }

  &:active {
    background: #e68a00;
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const RemoveButton = styled.button`
  background-color: #ff8c00;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 0.875rem;
  margin: 5px 8px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 100em;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
  &:hover {
    background-color: white;
    color: #ff6347;
    border: 1px solid #ff6347;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }
`;

const SubtotalContainer = styled.div`
  display: grid;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid #ccc;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
  align-items: baseline;

  p {
    color: #333;
  }
  h1,
  span {
    font-size: 1.5rem;
    margin: 0;
    font-weight: 700;
    color: #000;
    font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
  }
`;

const EmptyCartContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const EmptyCartMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin: 1rem 0;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
`;

const CartIcon = styled(Image)`
  max-width: 100px;
  margin: 0 auto;
`;

interface MyCartProps {
  closeCart: () => void;
}
const MyCart: React.FC<MyCartProps> = ({ closeCart }) => {
  const cartItems = useCartState();
  const dispatch = useCartDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { convertPrice, currency } = usePriceContext();

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item: any) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 0;
      return acc + price * quantity;
    }, 0);
  };
  const handleRemoveFromCart = (id: number) => {
    dispatch({ type: "REMOVE", id });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE", id, quantity });
  };

  const subtotal = calculateSubtotal();
  const formatMessageForWhatsApp = (items: any) => {
    let message =
      encodeURIComponent("Hello👋🏽") +
      " I want to order the following items from my cart:%0a";

    items.forEach((item: any, index: any) => {
      const convertedPrice = convertPrice(item.price);
      const currencySymbol = currencySymbolMap[currency] || "KSh";
      message += `%0a${index + 1}. ${item.name} - Quantity: ${
        item.quantity
      }, Price: ${currencySymbol} ${convertedPrice.toFixed(2)}%0a`;
    });

    const subtotalConverted = convertPrice(subtotal);
    const currencySymbol = currencySymbolMap[currency] || "KSh";
    message += `%0aSubtotal: ${currencySymbol} ${subtotalConverted.toFixed(2)}`;

    return message;
  };

  const handleCheckout = () => {
    const message = formatMessageForWhatsApp(cartItems);
    const whatsappURL = `https://api.whatsapp.com/send/?phone=+254794701568&text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  const isEmptyCart = cartItems.length === 0;

  return (
    <CartOverlay $isOpen={!isOpen}>
      <CartHeader>
        <CartTitle>Better Call Paul</CartTitle>
        <CloseButton
          onClick={() => {
            closeCart();
          }}
        />
      </CartHeader>
      {isEmptyCart ? (
        <EmptyCartContainer>
          <CartIcon
            src="/cartIcon.jpg"
            alt="Empty Cart"
            width={70}
            height={70}
          />
          <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
        </EmptyCartContainer>
      ) : (
        <CartItemList>
          {cartItems.map((item: any, index) => (
            <CartItem key={index}>
              <ItemDetails>
                <ItemImage src={item.image} alt={item.name} />
                <div>
                  <ItemName>{item.name}</ItemName>
                  <QuantitySelector
                    defaultValue={item.quantity}
                    onChange={(e) =>
                      handleUpdateQuantity(item.id, Number(e.target.value))
                    }
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </QuantitySelector>
                  <RemoveButton onClick={() => handleRemoveFromCart(item.id)}>
                    Remove
                  </RemoveButton>
                </div>
              </ItemDetails>
              <ItemPrice>
                <PriceDisplay price={item.price} />
              </ItemPrice>
            </CartItem>
          ))}
        </CartItemList>
      )}
      <SubtotalContainer>
        <p>Subtotal:</p>{" "}
        <h1>
          <PriceDisplay price={subtotal} />
        </h1>
      </SubtotalContainer>
      <CheckoutButton
        onClick={
          isEmptyCart
            ? () => {
                closeCart();
              }
            : handleCheckout
        }
      >
        {isEmptyCart ? "Add Items" : "Go to Checkout"}
      </CheckoutButton>
    </CartOverlay>
  );
};

export default MyCart;
