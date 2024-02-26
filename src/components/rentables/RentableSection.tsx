import React, { useState } from "react";
import { useRouter } from "next/router";
import { AirTrIcon, ChaufferIcon, HireCarIcon } from "../../../public/Icons";
import TopNavbar from "../travelpage/TopNavbar";
import HeroSection from "../travelpage/HeroSection";
import BottomNavbar from "../travelpage/BottomNavbar";
import { RentableData } from "./RentableData";
import { TourData } from "../tourpage/TourData";

const menuItems = [
  { name: "Airport Transfer", icon: <AirTrIcon /> },
  { name: "Car Hire", icon: <HireCarIcon /> },
  { name: "Chauffeur", icon: <ChaufferIcon /> }
];

const RentableSection = () => {
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
        backgroundImage="/DealsImages/rentable.webp"
        title="Rentables"
        text=" The well-being and happiness of your children are our top priorities. We understand the importance of finding a trustworthy and caring partner to assist with the unique needs of your family especially when you are on holiday. "
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

export default RentableSection;
