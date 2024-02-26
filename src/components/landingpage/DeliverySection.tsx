import React from "react";
import {
  ChefButton,
  DeliveryBox,
  DeliverySectionContainer,
} from "@/styles/landingPageStyles";
import Background from "@/styles/commons/bgOptimized";
import BgDelivery from "../../../public/DealsImages/bg.jpeg";
import Link from "next/link";

const DeliverySection = () => {
  const additionalStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  };
  return (
    <DeliverySectionContainer>
      <Background
        src={BgDelivery}
        alt="Delivery Image"
        additionalStyle={additionalStyles}
      >
        <DeliveryBox>
          <Link href="/services/shopping">
            <ChefButton>Running errands</ChefButton>
          </Link>
          <Link href="/services/shopping">
            <ChefButton>Hire a shopper</ChefButton>
          </Link>
        </DeliveryBox>
      </Background>
    </DeliverySectionContainer>
  );
};

export default DeliverySection;
