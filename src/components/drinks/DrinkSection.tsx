import React, { useState } from "react";
import { useRouter } from "next/router";
import TopNavbar from "../travelpage/TopNavbar";
import HeroSection from "../travelpage/HeroSection";
import BottomNavbar from "../travelpage/BottomNavbar";
import { AirTrIcon, ChaufferIcon, HireCarIcon } from "../../../public/Icons";
import { drinkdata } from "./drinksdata";

const menuItems = [
  { name: "Soft Drinks", icon: <AirTrIcon /> },
  { name: "Beers", icon: <HireCarIcon /> },
  { name: "Whiskey", icon: <ChaufferIcon /> },
  { name: "Vodka", icon: <ChaufferIcon /> },
];

const DrinkSection = ({ drinksData }: any) => {
  const [currentSelection, setCurrentSelection] = useState("Drinks");
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
        backgroundImage="/Drink.jpg"
        title="Drinks and Beverages"
        text="BCP offers  a curated selection of beverages adding  a luxurious touch to the stay. This service can include a well-stocked bar with a variety of alcoholic and non-alcoholic options, enhancing the overall guest experience."
      />
      <BottomNavbar
        activeTab={currentSelection}
        updateActiveTab={handleSelectionChange}
        tabs={menuItems}
        // tourData={drinkdata}
        tourData={drinksData}
      />
    </>
  );
};

export default DrinkSection;
