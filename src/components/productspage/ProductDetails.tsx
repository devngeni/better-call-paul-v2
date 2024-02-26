import React from "react";
import { ProductDetailsContainer } from "@/styles/commons";
import { Text, Title } from "../commons";
import { Montserrat } from "next/font/google";
interface DetailsProps {
  title: string;
  text: string;
}

const ProductDetails: React.FC<DetailsProps> = ({ title, text }) => {
  return (
    <ProductDetailsContainer>
      <Title size="1rem" $weight="700">
        {title}
      </Title>
      <Text size="0.75rem" $weight="400" color="#444">
        {text}
      </Text>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
