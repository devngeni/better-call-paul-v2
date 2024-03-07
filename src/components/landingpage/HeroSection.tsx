import React from "react";
import {
  AdsContainer,
  HeroBody,
  HeroContainer,
} from "@/styles/landingPageStyles";
import { CardTitle } from "@/styles/commons";
import { Carousel } from ".";
import CarouselSlider from "./HeroCarousel";


const adsData = [
  { id: 1, imageUrl: "/me.png" },
  { id: 2, imageUrl: "/ad1.png" },
  { id: 3, imageUrl: "/ad2.png" },
];

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
