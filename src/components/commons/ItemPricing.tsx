import { usePriceContext } from "@/context";
import React from "react";
import styled from "styled-components";

const StyledPrice = styled.span`
  color: #000;
  font-family: ${(props) => props.theme.fontFace.fonts.primaryfont};
  font-size: 0.75rem;
  font-style: italic;
  font-weight: 400;
`;

type PriceDisplayProps = {
  price?: number;
  priceDetails?: string;
};

const PriceDisplay: React.FC<PriceDisplayProps> = ({ price }) => {
  const { convertPrice, currency } = usePriceContext();

  if (price === undefined) {
    return null;
  }

  return (
    <StyledPrice>{`${currency === "USD" ? "$" : "KSh"} ${convertPrice(
      price
    ).toFixed(2)}`}</StyledPrice>
  );
};

export default PriceDisplay;