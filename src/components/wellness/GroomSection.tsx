import React, { useState } from "react";
import { useRouter } from "next/router";
import BottomNavbar from "../travelpage/BottomNavbar";
import HeroSection from "../travelpage/HeroSection";
import TopNavbar from "../travelpage/TopNavbar";
import { FullDayIcon, Night, Noon } from "../../../public/Icons";
import { GroomData } from "./GroomData";

const menuItems = [
  { name: "Massage", icon: <FullDayIcon /> },
  { name: "Grooming", icon: <Noon /> },
  { name: "Facial", icon: <Night /> },
  { name: "Waxing", icon: <Night /> },
];

const GroomSection = () => {
  const [currentSelection, setCurrentSelection] = useState("Services");
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
        backgroundImage="/wellness1.png"
        title="Wellness & Grooming"
        text="Guests looking for relaxation and pampering can benefit from on-site and off-site spa and massage services."
      />

      <BottomNavbar
        activeTab={currentSelection}
        updateActiveTab={handleSelectionChange}
        tabs={menuItems}
        tourData={GroomData}
      />
    </>
  );
};
export default GroomSection;
