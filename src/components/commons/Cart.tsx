import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import Title from "./Title";
import { Button, Text } from ".";
import {
  CardContent,
  CardImage,
  CartContainer,
  CartContent,
  CartLine,
  CartWrapper,
} from "@/styles/commons";
import { PriceDisplay } from "./Price";

interface CartProps {
  title: string;
  quantity: string;
  price: number;
}

interface ImageProps extends CartProps {
  src: StaticImageData;
  alt: string;
  children?: ReactNode;
  additionalStyle?: React.CSSProperties;
}

const Cart: React.FC<ImageProps> = ({
  title,
  quantity,
  price,
  src,
  alt,
  children,
  additionalStyle,
}) => {
  return (
    <CartContainer>
      <CartWrapper>
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
        </CardContent>
        <CartContent>
          <Button
            width="50px"
            height="40px"
            borderRadius="40px"
            borderColor="none"
            background="#1A3F34"
            color="#fff"
          >
            Add
          </Button>
          <Title color="#444" size="14px" $weight="600">
            <PriceDisplay price={price} />
          </Title>
        </CartContent>
      </CartWrapper>
      <CartLine>
        <hr />
      </CartLine>
    </CartContainer>
  );
};

export default Cart;
