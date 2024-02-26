import React from "react";
import Commons from "./Common";

const Images = [
  {
    image: "/DealsImages/Zoo.jpg",
    title: "Giraffe Mannor Center",
    cost: "35",
  },
  {
    image: "/DealsImages/Nature.jpg",
    title: "Funzi Island Coast",
    cost: "250",
  },
  {
    image: "/DealsImages/Museum.webp",
    title: "Nairobi National Museum",
    cost: "35",
  },
];

const DealSection = () => {
  return <Commons title="Deals of the Month" images={Images} />;
};

export default DealSection;
