import React from "react";
import Image from "next/image";
import styled from "styled-components";
interface HeroSectionProps {
  backgroundImage: string;
  title?: string;
  text?: string;
}

const StyledHeroSection = styled.section`
  position: relative;
  color: #fff;
  padding: 2rem 2rem 1rem 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 12.25rem;
  overflow: hidden;
  background: linear-gradient( 180deg, rgba(0, 0, 0, 0.0001) 0%, #000000 100% );
  @media screen and (min-width: 768px) {
    min-height: 40vh;
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
    351.01% 139.27% at 0% 96.94%,
    rgba(26, 63, 38, 0.69) 10%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
  font-weight: ${(props) => props.theme.fontFace.fontWeight.bold};
  color: #fff;
  @media screen and (min-width: 768px) {
    font-size: 54px;
    font-weight: bold;
  }
`;

const Text = styled.p`
  width: 80%;
  font-size: 10px;
  font-family: ${(props) => props.theme.fontFace.fonts.poppins};
  font-weight: ${(props) => props.theme.fontFace.fontWeight.regular};
  color: #fff;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    width: 50%;
    font-weight: 400;
  }
`;

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  text,
}) => (
  <StyledHeroSection>
    <Image
      src={backgroundImage}
      placeholder="blur"
      blurDataURL={backgroundImage}
      style={{
        objectFit: "cover",
        objectPosition: "center center",
        width: "100%",
        height: "100%",
      }}
      alt="Background Image"
      priority
      fill
    />
    <GradientOverlay />
    <ContentWrapper>
      {title && <Title>{title}</Title>}
      {text && <Text>{text}</Text>}
    </ContentWrapper>
  </StyledHeroSection>
);

export default HeroSection;
