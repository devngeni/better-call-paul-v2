import React, { useState } from "react";
import { useRouter } from "next/router";
import TopNavbar from "../travelpage/TopNavbar";
import HeroSection from "../travelpage/HeroSection";
import BottomNavbar from "../travelpage/BottomNavbar";
import { ChefData } from "./ChefData";
import { FullDayIcon, Night, Noon } from "../../../public/Icons";

const menuItems = [
  { name: "Restaurants", icon: <FullDayIcon /> },
  { name: "Meal Prep", icon: <Noon /> },
  { name: "Private chef", icon: <Night /> },
];

const ChefSection = () => {
  const [currentSelection, setCurrentSelection] = useState("Private Chef");
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const handleSelectionChange = (selection: string) => {
    setCurrentSelection(selection);
  };

  return (
    <>
      <TopNavbar currentSelection={currentSelection} onBack={handleBack} />
      <HeroSection
        backgroundImage="/DealsImages/food.png"
        title="Food & Meal Prep"
        text="Nairobi’s culinary scene is a dynamic and evolving landscape that reflects the city’s rich cultural diversity and international influences. The city offers an exciting array of dining experiences that range from traditional Kenyan dishes to global cuisine."
      />
      <BottomNavbar
        activeTab={currentSelection}
        updateActiveTab={handleSelectionChange}
        tabs={menuItems}
        tourData={ChefData}
      />
    </>
  );  
};

export default ChefSection;
