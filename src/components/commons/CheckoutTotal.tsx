import {
  CTContent,
  CheckoutTotalContainer,
  CheckoutTotalDetails,
} from "@/styles/commons";
import React from "react";
import { Button } from ".";
import { usePriceContext } from "@/context";

interface CheckoutTotalProps {
  price: number;
  btnLabel: string;
}

const CheckoutTotal: React.FC<CheckoutTotalProps> = ({ price, btnLabel }) => {
  const { convertPrice, currency } = usePriceContext();

  return (
    <CheckoutTotalContainer>
      <CheckoutTotalDetails>
        <CTContent>Sub-Total</CTContent>
        <CTContent>{`${currency === "USD" ? "$" : "KSh"} ${convertPrice(
          price
        ).toFixed(2)}`}</CTContent>
      </CheckoutTotalDetails>
      <Button
        width="250px"
        height="40px"
        borderRadius="0.3125rem"
        borderColor="none"
        background="#1A3F34"
        color="#fff"
      >
        {btnLabel}
      </Button>
    </CheckoutTotalContainer>
  );
};

export default CheckoutTotal;
