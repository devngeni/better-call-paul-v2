import React from "react";
import {
  AdsContainer,
  HeroBody,
  HeroContainer,
} from "@/styles/landingPageStyles";
import { CardTitle } from "@/styles/commons";
import { Carousel } from ".";
import CarouselSlider from "./HeroCarousel";
import { useServicesDataContext } from "@/context/GetServicesDataContext";

const HeroSection = () => {
  const { getServiceDataByCategory } = useServicesDataContext();

  const adsData = getServiceDataByCategory("BANNER AD")?.map((item: any) => {
    return {
      id: item._id,
      imageUrl: item.content[0].imagePath,
    };
  });

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
