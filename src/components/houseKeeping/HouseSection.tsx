import React, { useState } from "react";
import { HouseData } from "./HouseData";
import { useRouter } from "next/router";
import { AirTrIcon, ChaufferIcon, HireCarIcon } from "../../../public/Icons";
import TopNavbar from "../travelpage/TopNavbar";
import HeroSection from "../travelpage/HeroSection";
import BottomNavbar from "../travelpage/BottomNavbar";
import { CardContainer } from "@/styles/travelpagestyles";
import { Card } from "../commons";
import { TourData } from "../tourpage/TourData";

const menuItems = [
  { name: "Airport Transfer", icon: <AirTrIcon /> },
  { name: "Car Hire", icon: <HireCarIcon /> },
  { name: "Chauffeur", icon: <ChaufferIcon /> },
];

const HouseSection = () => {
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
        backgroundImage="/DealsImages/detergent.webp"
        title="House Keeping"
        text="Guiding guests through Nairobi's vibrant attractions is an excellent way to help them explore the local culture and make the most of their visit. Recommending restaurants, museums, tours, and activities can enhance their overall experience."
      />

      <BottomNavbar
        activeTab={currentSelection}
        updateActiveTab={handleSelectionChange}
        tabs={menuItems}
        tourData={TourData}
      />
    </>
  );
};

export default HouseSection;
