import React from "react";
import styled from "styled-components";
import { ShopIcon, TagIcon } from "../../../public/Icons";

const AdsSectionContainer = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 30px 10px;
  background: #f4f4f4;
  min-height: 96px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }
`;

const OfferCard = styled.div<{ $background: string }>`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 15px;
  border-radius: 10px;
  background: ${(props) => props.$background || "#fff"};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-basis: 45%;
  color: #333;
  max-width: 400px;
`;

const OfferContent = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`;

const OfferTitle = styled.h3`
  margin: 0;
  color: #333;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
`;

const OfferDetails = styled.p`
  margin: 5px 0;
  color: #666;
  font-family: ${(props) => props.theme.fontFace.fonts.poppins};
  font-size: 0.9rem;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #333;
`;

const AdsSection = () => {
  return (
    <AdsSectionContainer>
      <OfferCard $background="#cff4d2">
        <IconWrapper>
          <ShopIcon />
        </IconWrapper>
        <OfferContent>
          <OfferTitle>KES 0 Delivery Fee</OfferTitle>
          <OfferDetails>
            Valid for current order while supplies last
          </OfferDetails>
        </OfferContent>
      </OfferCard>
      <OfferCard $background="#d2f4cb">
        <IconWrapper>
          <TagIcon />
        </IconWrapper>
        <OfferContent>
          <OfferTitle>15% off (up to KES 5,600)</OfferTitle>
          <OfferDetails>
            KES 1,000 minimum order - Delivery orders only
          </OfferDetails>
        </OfferContent>
      </OfferCard>
    </AdsSectionContainer>
  );
};

export default AdsSection;
