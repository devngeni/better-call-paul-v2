import React, { useState } from "react";
import { useRouter } from "next/router";
import TopNavbar from "../travelpage/TopNavbar";
import HeroSection from "../travelpage/HeroSection";
import BottomNavbar from "../travelpage/BottomNavbar";
import { AirTrIcon, ChaufferIcon, HireCarIcon } from "../../../public/Icons";

const menuItems = [
  { name: "Airport Transfer", icon: <AirTrIcon /> },
  { name: "Car Hire", icon: <HireCarIcon /> },
  { name: "Chauffeur", icon: <ChaufferIcon /> },
];

const GiftSection = () => {
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
        backgroundImage="/DealsImages/GiftShop.webp"
        title="Gift Shop"
        text="Guiding guests through Nairobi's vibrant attractions is an excellent way to help them explore the local culture and make the most of their visit. Recommending restaurants, museums, tours, and activities can enhance their overall experience."
      />
    </>
  );
};

export default GiftSection;
