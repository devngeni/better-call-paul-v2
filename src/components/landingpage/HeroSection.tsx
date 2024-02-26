import React, { useRef } from "react";
import {
  AdsContainer,
  HeroBody,
  HeroContainer,
  HeroDescription,
  HeroSectionDiv,
  HeroTitle,
  HeroWrapper,
  TContainer,
} from "@/styles/landingPageStyles";
import Image from "next/image";
import { CardTitle } from "@/styles/commons";
import { Carousel } from ".";
import { carouselData } from "./HeroData";
import Slider from "./HeroCarousel";
import { Fade } from "react-awesome-reveal";
import CarouselSlider from "./HeroCarousel";

interface AdsImageProps {
  imageUrl: string;
}

const AdsImage: React.FC<AdsImageProps> = ({ imageUrl }) => {
  return <Image src={imageUrl} alt="Ad" width={324} height={114} />;
};

const adsData = [
  { id: 1, imageUrl: "/me.png" },
  { id: 2, imageUrl: "/ad1.png" },
  { id: 3, imageUrl: "/ad2.png" },
];
const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
};

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBody>
        <CarouselSlider />
        <AdsContainer>
          <Carousel items={adsData} />
        </AdsContainer>
        <CardTitle>Our Services</CardTitle>
      </HeroBody>
    </HeroContainer>
  );
};

export default HeroSection;
