import React, { useState } from "react";
import TopNavbar from "../travelpage/TopNavbar";
import HeroSection from "../travelpage/HeroSection";
import BottomNavbar from "../travelpage/BottomNavbar";
import { CardContainer } from "@/styles/travelpagestyles";
import { useRouter } from "next/router";
import { Card } from "../commons";
import { ShoppingData } from "./ShoppingData";
import { AirTrIcon, ChaufferIcon, HireCarIcon } from "../../../public/Icons";
import { TourData } from "../tourpage/TourData";

const menuItems = [
  { name: "Airport Transfer", icon: <AirTrIcon /> },
  { name: "Car Hire", icon: <HireCarIcon /> },
  { name: "Chauffeur", icon: <ChaufferIcon /> },
];

const ShoppingSection = () => {
  const [currentSelection, setCurrentSelection] = useState("Services");
  const router = useRouter();
  const handleBack = () => {
    router.push("/home");
  };

  const handleSelectionChange = (selection: string) => {
    setCurrentSelection(selection);
  };
  return (
    <>
      <TopNavbar currentSelection={currentSelection} onBack={handleBack} />
      <HeroSection
        backgroundImage="/DealsImages/grocery.webp"
        title="Shopping & Grocery runs"
        text="Guiding guests through Nairobi's vibrant attractions is an excellent way to help them explore the local culture and make the most of their visit. Recommending restaurants, museums, tours, and activities can enhance their overall experience."
      />

      <BottomNavbar
        activeTab={currentSelection}
        updateActiveTab={handleSelectionChange}
        tabs={menuItems}
        tourData={TourData}
      />
      {ShoppingData.map((item, index) => (
        <CardContainer key={index}>
          <Card
            src={item.imagePath}
            alt={item.name}
            title={item.name}
            content={item.description}
            price={item.price}
          />
        </CardContainer>
      ))}
    </>
  );
};

export default ShoppingSection;
