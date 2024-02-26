import { ShoppingAdContainer } from "@/styles/ShoppingAd.styles";
import Image from "next/image";
import React, { useState } from "react";
import FloweryFact from "../../../public/flowery-facts.jpg";
import { RenderDescription } from "./hotel";

const dataArray = [
  {
    title: "Top expat tips for living in Kenya",
    description:
      "<li>Ensure you have all essential documents and visas in place before departure</li> <li>If you move with your kids, early application for school places is advisable </li> <li>Have up to three months’ rent available upfront to secure a rental property</li>  <li>Stay healthy and immerse yourself in the culture</li>",
  },
  {
    title: "Jobs, visas, and working in Kenya",
    description:
      "To work in Kenya, you’ll need to apply for an appropriate visa. The process can take up to 3 months so bear that in mind in your plans. Once expats have created an eCitizen account they typically apply for one of the following permits: <li>Class C – only available to expats working in ‘prescribed professions’ e.g. medicine, engineering, accounting</li> <li>Class D – covers expats moving to Kenya for a specific job with a single employer</li> <li>Class G – is meant for expats looking to set up a business in Kenya or invest in a trade</li>",
  },
  {
    title:
      "Where will you find expats living in Kenya and how can I find accommodation?",
    description:
      "Most expats moving to Kenya look for accommodation in Nairobi or Mombasa. In Nairobi, they tend to settle down on the outskirts of the city, in places including Kileleshwa, Lavington, Kilimani, Karen, and Runda. Expats in Mombasa put down roots on Mombasa Island’s north and south coast, the latter usually attracting residents living on a tighter budget.",
  },
  {
    title: "Banking and finance in Kenya",
    description:
      "Expats should find it straightforward to open a bank account in Kenya, especially in Nairobi, the largest financial centre in East Africa. However, you might have to wait until you’ve packed your things and flown over, as you will need to provide proof of a Kenyan address. You’ll also need a proof of ID and a reference from an employer.",
  },
];

const ShoppingAd = () => {
  const [showMore, setShowMore] = useState(false);
  const initialItemsToShow = 1;

  return (
    <ShoppingAdContainer>
      <div className="Adtitle">Expat Guide to Moving to Kenya</div>
      <Image src={FloweryFact} alt="Flowers" />
      {dataArray.slice(0, initialItemsToShow).map((data, index) => (
        <div key={index}>
          <div className="AdSub_title">{data.title}</div>
          <div className="AdDescription">
            {RenderDescription(data.description)}
          </div>
        </div>
      ))}
      {showMore &&
        dataArray.slice(initialItemsToShow).map((data, index) => (
          <div key={index + initialItemsToShow}>
            <div className="AdSub_title">{data.title}</div>
            <div className="AdDescription">
              {RenderDescription(data.description)}
            </div>
          </div>
        ))}
      {dataArray.length > initialItemsToShow && (
        <div className="ReadMoreLink" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Read less.." : "Read more..."}
        </div>
      )}
    </ShoppingAdContainer>
  );
};

export default ShoppingAd;
