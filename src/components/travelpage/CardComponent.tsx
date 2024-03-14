import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Rating from "../commons/Rating";
import { useCartDispatch } from "@/context/CartContext";
import { Dustbin } from "../../../public/Icons";
import { AddIcon, SubtractIcon } from "../../../public/Icons/Add&Subtract";
import { PriceDisplay } from "../commons/Price";
import SkeletonLoader from "../commons/Skeleton";

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
    border-radius: 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgba(33, 81, 66, 0.5);
    background: #fff;
    box-shadow: none;
    border-radius: 0;
  }
`;

export const CardImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(
    135deg,
    rgba(255, 223, 0, 0.1) 0%,
    rgba(255, 193, 7, 0.3) 100%
  );
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  display: block;
  object-fit: contain;
  @media screen and (max-width: 768px) {
    width: 4.6875rem;
    height: 4.6875rem;
  }
`;

export const CardInfo = styled.div`
  padding: 16px;
  background: #f8f8f8;
  border-top: 1px solid #ddd;
  p {
    color: #545454;
    font-family: ${(props) => props.theme.fontFace.fonts.poppins};
  }
  @media screen and (max-width: 768px) {
    background: #fff;
    border-top: none;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
`;

export const CardPrice = styled.p`
  font-size: 1rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 1rem;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #333;
  font-weight: 400;
  margin-bottom: 1rem;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
`;

export const QuickViewButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px 16px;
  background: #fff;
  color: #333;
  border: none;
  border-radius: 20px;
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    cursor: pointer;
  }

  ${CardContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

export const AddButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: #1a3f34;
  color: #fff;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px, rgba(0, 0, 0, 0.04) 0px 4px 4px;
  @media screen and (max-width: 768px) {
    left: 90%;
  }
`;
export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: #1a3f34;
  color: #fff;
  border-radius: 20px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px, rgba(0, 0, 0, 0.04) 0px 4px 4px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.1s, opacity 0.1s ease;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
  &.show {
    visibility: visible;
    opacity: 1;
  }
  span {
    padding: 0 10px;
    font-size: 1rem;
    font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
  }
  @media screen and (max-width: 768px) {
    left: 80%;
  }
`;

export const QuantityButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  color: #fff;
`;
export const RatingIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  background: transparent;
  @media screen and (max-width: 768px) {
    position: relative;
  }
`;

interface CardProps {
  id: number;
  imageSrc: string;
  price: number;
  productName: string;
  description?: string;
  quantity: number;
  category: string;
  onAddToCart: () => void;
  isLoading: boolean;
  handleClick: () => void;
  loading: boolean;
}

const Card: React.FC<CardProps> = ({
  id,
  imageSrc,
  price,
  productName,
  quantity,
  category,
  description,
  handleClick,
  onAddToCart,
  loading,
}) => {
  const [showQuantityControls, setShowQuantityControls] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const dispatch = useCartDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleAddToCart = () => {
    dispatch({
      type: "ADD",
      product: {
        id,
        name: productName,
        price,
        image: imageSrc,
        category,
        quantity: itemQuantity,
      },
    });
  };

  const handleAddItem = () => {
    handleAddToCart();
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    handleUpdateItem(newQuantity);
  };

  const handleRemoveItem = () => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      handleUpdateItem(newQuantity);
    }
  };

  const handleDeleteItem = () => {
    dispatch({ type: "REMOVE", id });
    setItemQuantity(0);
  };

  const handleUpdateItem = (quantity: number) => {
    dispatch({
      type: "UPDATE",
      id,
      quantity,
    });
  };

  const toggleQuantityControls = () => {
    setShowQuantityControls(!showQuantityControls);
    handleAddItem();
  };

  const toggleDelete = () => {
    setShowQuantityControls(!showQuantityControls);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <CardContainer>
          <CardImageOverlay />
          <CardImage src={imageSrc} alt={productName} />
          <CardInfo>
            <CardTitle>{productName}</CardTitle>
            <CardDescription>{description}</CardDescription>

            <CardPrice>
              <PriceDisplay price={Number(price)} />
            </CardPrice>
            <RatingIcon style={{ width: "fit-content" }}>
              <Rating name="rating" value={4} />
            </RatingIcon>
          </CardInfo>
          <QuickViewButton onClick={handleClick}>Quick view</QuickViewButton>
          <AddButton onClick={toggleQuantityControls}>+</AddButton>
          <QuantityControls className={showQuantityControls ? "show" : ""}>
            <QuantityButton
              onClick={() => {
                handleDeleteItem();
                toggleDelete();
              }}
            >
              <Dustbin />
            </QuantityButton>
            <QuantityButton onClick={handleRemoveItem}>
              <SubtractIcon />
            </QuantityButton>
            <span>{itemQuantity}</span>
            <QuantityButton onClick={() => handleAddItem()}>
              <AddIcon />
            </QuantityButton>
          </QuantityControls>
        </CardContainer>
      )}
    </>
  );
};

export default Card;
