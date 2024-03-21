import React from "react";
import {
  DealSectionContainer,
  DealsWrapper,
  ImageContainer,
  ImageContent,
  ImageCost,
  ImageTitle,
  DealsBox,
} from "@/styles/landingPageStyles";
import Image from "next/image";
import { CardTitle } from "@/styles/commons";
import { Fade } from "react-awesome-reveal";
import { PriceDisplay } from "../commons/Price";

interface Props {
  title: string;
  images: {
    image: string;
    title: string;
    cost?: string;
  }[];
}

const Commons: React.FC<Props> = ({ title, images }) => {

  const handleBookButtonClick = (item: any) => {
    const inquiryText = `I would like to inquire more about ${item.title}`;
    const url = `https://api.whatsapp.com/send?phone=+254794701568&text=${encodeURIComponent(inquiryText)} at $${item.cost}`;
    window.open(url);
  };

  return (
    <DealSectionContainer>
      <DealsWrapper>
        <CardTitle>{title}</CardTitle>
        <DealsBox>
          {images?.map((item, index) => (
            <ImageContainer key={index} onClick={() => handleBookButtonClick(item)}>
              <Image
                src={item.image}
                width={280}
                height={164}
                alt={item.title}
                priority
              />
              <ImageContent>
                <Fade direction="up">
                  <ImageTitle>{item.title} &#x2192;</ImageTitle>
                </Fade>
                <Fade direction="up">
                  <ImageCost>
                    Starts at: <PriceDisplay price={Number(item.cost)} />
                  </ImageCost>
                </Fade>
              </ImageContent>
            </ImageContainer>
          ))}
        </DealsBox>
      </DealsWrapper>
    </DealSectionContainer>
  );
};

export default Commons;
