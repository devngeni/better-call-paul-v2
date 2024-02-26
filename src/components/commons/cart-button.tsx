import React, { useState } from "react";
import styled from "styled-components";
import { useCartState } from "@/context/CartContext";
import CartIcon from "../../../public/Icons/CartIcon";
import MyCart from "./Cart1";

const CartContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  background-color: black;
  border-radius: 20px;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  gap: 10px;
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
    gap: 0;
  }
`;

const CartIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const ItemCount = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-right: 10px;
  font-family: ${(props) => props.theme.fontFace.fonts.primaryfont};
  font-weight: 400;
  @media screen and (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

const CartDropdown = styled.div<{ $isVisble: boolean }>`
  position: absolute;
  right: 0;
  top: 50px;
  width: 300px;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: ${(props) => (props.$isVisble ? "block" : "none")};
  transition: all 0.3s ease-in-out;
`;

const CartComponent = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const cartItems = useCartState();

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleCartClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    toggleDropdown();
  };
  const itemCount =
    cartItems?.reduce((total, item) => total + (item.quantity || 0), 0) || 0;

  return (
    <CartContainer onClick={handleCartClick}>
      <CartIconWrapper>
        <CartIcon />
      </CartIconWrapper>
      <ItemCount>
        {itemCount} <span>items</span>
      </ItemCount>
      <CartDropdown
        $isVisble={isDropdownVisible}
        onClick={(e) => e.stopPropagation()}
      >
        <MyCart closeCart={() => setIsDropdownVisible(false)} />
      </CartDropdown>
    </CartContainer>
  );
};

export default CartComponent;
