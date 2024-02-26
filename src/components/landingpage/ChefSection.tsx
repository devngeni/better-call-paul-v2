import {
  ChefBox,
  ChefButton,
  ChefHeader,
  ChefSectionContainer,
  ChefSectionWrapper,
} from "@/styles/landingPageStyles";
import React from "react";
import Chef from "../../../public/DealsImages/chef-working.png";
import Background from "@/styles/commons/bgOptimized";
import link from "next/link";
import Link from "next/link";

const ChefSection = () => {
  const additionalStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  };
  return (
    <ChefSectionContainer>
      <Background
        src={Chef}
        alt="Delivery Image"
        additionalStyle={additionalStyles}
      >
        <ChefSectionWrapper>
          <ChefHeader>Private Chef Services</ChefHeader>
          <ChefBox>
            <Link href="/private-chef-meal-prep">
            <ChefButton>Get a Chef</ChefButton>
            </Link>
            <Link href="/private-chef-meal-prep">
            <ChefButton>Explore Cuisines</ChefButton>
            </Link>
          </ChefBox>
        </ChefSectionWrapper>
      </Background>
    </ChefSectionContainer>
  );
};

export default ChefSection;
