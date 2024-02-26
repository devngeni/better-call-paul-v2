import {
  CardContent,
  CardImage,
  CartCheckoutContent,
  CartCheckoutWrapper,
  CartContainer,
  CartLine,
  CartQuantity,
  DeleteContainer,
} from "@/styles/commons";
import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import Title from "./Title";
import { Text } from ".";
import DeleteIcon from "../../../public/Icons/Delete";
import { PriceDisplay } from "./Price";

interface CartCheckoutProps {
  title: string;
  quantity: string;
  price: number;
  amount: number;
  onDelete: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

interface ImageCheckoutProps extends CartCheckoutProps {
  src: StaticImageData;
  alt: string;
  children?: ReactNode;
  additionalStyle?: React.CSSProperties;
}

const CartCheckout: React.FC<ImageCheckoutProps> = ({
  title,
  quantity,
  price,
  src,
  alt,
  children,
  additionalStyle,
  amount,
  onDelete,
  onIncrease,
  onDecrease,
}) => {
  return (
    <CartContainer>
      <CartCheckoutWrapper>
        <CardImage style={additionalStyle}>
          <Image
            src={src}
            alt={alt}
            height={100}
            width={100}
            priority
            placeholder="blur"
            sizes="100vw"
            style={{
              objectFit: "cover",

              zIndex: 1,
            }}
          />
          {children}
        </CardImage>
        <CardContent>
          <Title color="#444" size="14px" $weight="600">
            {title}
          </Title>
          <Text color="#444" size="0.625rem" $weight="400">
            {quantity}
          </Text>
          <Text color="#444" size="14px" $weight="400">
            <PriceDisplay price={price} />
          </Text>
        </CardContent>
        <CartCheckoutContent>
          <DeleteContainer>
            <DeleteIcon onClick={onDelete} />
          </DeleteContainer>
          <CartQuantity>
            <Text color="#1A3F34" size="1.5rem" onClick={onDecrease}>
              &#x208B;
            </Text>
            <CartQuantity>
              <Text color="#1A3F34" size="1.5rem">
                {amount}
              </Text>
            </CartQuantity>
            <Text color="#1A3F34" size="1.5rem" onClick={onIncrease}>
              &#x208A;
            </Text>
          </CartQuantity>
        </CartCheckoutContent>
      </CartCheckoutWrapper>
      <CartLine>
        <hr />
      </CartLine>
    </CartContainer>
  );
};

export default CartCheckout;
