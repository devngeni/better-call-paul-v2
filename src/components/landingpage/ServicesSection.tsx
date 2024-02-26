import React from "react";
import {
  CardCircle,
  CardBody,
  CardText,
  SContainer,
  SWrapper,
} from "@/styles/landingPageStyles/ServiceSection";
import Image from "next/image";
import { useRouter } from "next/router";

const serviceItems = [
  {
    id: 1,
    text: "Tours & Experiences",
    url: "/tour-and-experience",
    imageUrl: "/icon.svg",
  },
  {
    id: 1,
    text: "Travel Concierge & Services",
    url: "/travel-and-coincierge",
    imageUrl: "/car.svg",
  },
  {
    id: 1,
    text: "Food, Private chef & Meal Prep",
    url: "/private-chef-meal-prep",
    imageUrl: "/chef.svg",
  },
  { id: 1, text: "Drinks", url: "/drinks", imageUrl: "/drinks.svg" },
  {
    id: 1,
    text: "Wellness & Grooming",
    url: "/fitness-and-wellness",
    imageUrl: "/massage.svg",
  },
  {
    id: 1,
    text: "Shopping & grocery runs",
    url: "/services/shopping",
    imageUrl: "/shopping.svg",
  },
  {
    id: 1,
    text: "Nanny Service",
    url: "/services/nanny-service",
    imageUrl: "/nanny.svg",
  },
  {
    id: 1,
    text: "Rentables",
    url: "/services/rentable",
    imageUrl: "/console.svg",
  },
  {
    id: 1,
    text: "Gift shop",
    url: "/services/gift-shop",
    imageUrl: "/gifts.svg",
  },
  {
    id: 1,
    text: "Luggage Shop",
    url: "/services/luggage",
    imageUrl: "/luggage.svg",
  },
  {
    id: 1,
    text: "Property Management",
    url: "/services/property-management",
    imageUrl: "/house.svg",
  },
  {
    id: 1,
    text: "Housekeeping",
    url: "/services/house-keeping",
    imageUrl: "/Hk.svg",
  },
];
const MyCardComponent: React.FC<{
  src: string;
  alt: string;
  width: number;
  height: number;
}> = ({ src, alt, width, height }) => (
  <Image src={src} alt={alt} width={width} height={height} priority />
);

const ServicesSection = () => {
  const router = useRouter();
  const handleServiceClick = (url: string) => {
    if (url === "/private-chef") {
      router.push(`/private-chef-meal-prep`);
    } else if (url === "/gift-shop") {
      router.push(`/services/${url}`);
    } else if (url === "/house-keeping") {
      router.push(`/services/${url}`);
    } else if (url === "/shopping") {
      router.push(`/services/${url}`);
    } else if (url === "/nanny-service") {
      router.push(`/services/${url}`);
    } else if (url === "/property-management") {
      router.push(`/services/${url}`);
    } else if (url === "/luggage") {
      router.push(`/services/${url}`);
    } else if (url === "/rentable") {
      router.push(`/services/${url}`);
    } else {
      router.push(url);
    }
  };
  return (
    <SContainer>
      <SWrapper>
        {serviceItems.map((service, index) => (
          <CardBody key={index} onClick={() => handleServiceClick(service.url)}>
            <CardCircle>
              <MyCardComponent
                src={service.imageUrl}
                alt={service.text}
                width={36}
                height={36}
              />
            </CardCircle>
            <CardText>{service.text}</CardText>
          </CardBody>
        ))}
      </SWrapper>
    </SContainer>
  );
};

export { ServicesSection, serviceItems };
