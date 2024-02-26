import React from "react";
import Commons from "./Common";

const Images = [
  {
    image: "/DealsImages/flight.jpeg",
    title: "Airport Transfers",
    cost: "45",
  },
  {
    image: "/DealsImages/car.jpeg",
    title: "Full Day Disposal",
    cost: "110",
  },
  {
    image: "/DealsImages/airportservice.webp",
    title: "Chauffer Services",
    cost: "45",
  },
];

const CarHireSection = () => {
  return <Commons title="Transport Services" images={Images} />;
};

export default CarHireSection;
