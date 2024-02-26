import { ShoppingAdContainer } from "@/styles/ShoppingAd.styles";
import Image from "next/image";
import React, { useState } from "react";
import FloweryFact from "../../../public/flowery-facts.jpg";
import { RenderDescription } from "./hotel";
import { CommonContainer, CommonWrapper } from "@/styles/commons";
import MoreSection from "../travelpage/MoreSection";

const dataArray = [
  {
    title: "Top expat tips for living in Kenya",
    description:
      "<li>Ensure you have all essential documents and visas in place before departure</li> <li>If you move with your kids, early application for school places is advisable </li> <li>Have up to three months' rent available upfront to secure a rental property</li>  <li>Stay healthy and immerse yourself in the culture</li>",
  },
  {
    title: "Jobs, visas, and working in Kenya",
    description:
      "To work in Kenya, you'll need to apply for an appropriate visa. The process can take up to 3 months so bear that in mind in your plans. Once expats have created an eCitizen account they typically apply for one of the following permits: <li>Class C – only available to expats working in 'prescribed professions' e.g. medicine, engineering, accounting</li> <li>Class D – covers expats moving to Kenya for a specific job with a single employer</li> <li>Class G – is meant for expats looking to set up a business in Kenya or invest in a trade</li>",
  },
  {
    title:
      "Where will you find expats living in Kenya and how can I find accommodation?",
    description:
      "Most expats moving to Kenya look for accommodation in Nairobi or Mombasa. In Nairobi, they tend to settle down on the outskirts of the city, in places including Kileleshwa, Lavington, Kilimani, Karen, and Runda. Expats in Mombasa put down roots on Mombasa Island's north and south coast, the latter usually attracting residents living on a tighter budget.",
  },
  {
    title: "Banking and finance in Kenya",
    description:
      "Expats should find it straightforward to open a bank account in Kenya, especially in Nairobi, the largest financial centre in East Africa. However, you might have to wait until you've packed your things and flown over, as you will need to provide proof of a Kenyan address. You'll also need a proof of ID and a reference from an employer.",
  },
];

const ExpactQuideAd = () => {
  const [showMore, setShowMore] = useState(false);
  const initialItemsToShow = 1;

  return (
    <CommonContainer>
      <CommonWrapper>
        <MoreSection
          sections={MoreGrocery.map((item, index) => ({
            imageSrc: item.image,
            text: item.title,
            description: item.cost,
            bgColor: item.bgColor,
          }))}
          title="Investing in Properties in
          Nairobi:"
        />
      </CommonWrapper>
    </CommonContainer>
  );
};

export default ExpactQuideAd;

const MoreGrocery = [
  {
    image: "/DealsImages/Property.webp",
    title: "Local Insights:",
    cost: "Our deep understanding of Nairobi’s neighbourhoods and market trends guarantees that we show you properties poised for growth.",
    bgColor: "#cff4d229",
  },
  {
    image: "/DealsImages/prop.jpg",
    title: "Hassle-Free Transactions:",
    cost: "We handle all aspects of the property deal, from finding the right property to managing the intricate details of the transaction",
    bgColor: "#cff4d229",
  },
  {
    image: "/DealsImages/realEstate.webp",
    title: "Maximum ROI:",
    cost: " Our commitment is to secure properties that promise the best returns on investment, turning every property into a valuable asset.",
    bgColor: "#cff4d2292",
  },
  {
    image: "/ad1.png",
    title: "Tailored Solutions:",
    cost: "Whether you’re an expat seeking a home or a local looking to invest, our approach is personalised to your unique needs.",
    bgColor: "#cff4d229",
  },
];
