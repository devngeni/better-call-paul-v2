import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import HeroSection from "./HeroSection";
import BottomNavbar from "./BottomNavbar";
import { useRouter } from "next/router";
import { AirTrIcon, ChaufferIcon, HireCarIcon } from "../../../public/Icons";
import { vehiclesData } from "./CarData";
import { TourDataType } from "../tourpage/TourData";

const menuItems = [
  { name: "Airport Transfer", icon: <AirTrIcon /> },
  { name: "Car Hire", icon: <HireCarIcon /> },
  { name: "Chauffeur", icon: <ChaufferIcon /> },
];

const TravelPage = ({ mappedData }: { mappedData: TourDataType[] }) => {
  const [currentSelection, setCurrentSelection] = useState(
    "Travel Concierge & Services"
  );
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const handleSelectionChange = (selection: string) => {
    setCurrentSelection(selection);
  };
  if (!mappedData) return null;
  return (
    <>
      <TopNavbar currentSelection={currentSelection} onBack={handleBack} />
      <HeroSection
        backgroundImage="/DealsImages/flight.jpeg"
        title="Travel Concierge & Services"
        text="BCP offers a seamless and reliable transportation solution for both locals and tourists alike. With a diverse fleet of well-maintained vehicles, ranging from compact cars to spacious SUVs, the service ensures customers experience comfort and convenience throughout their journey."
      />
      <BottomNavbar
        activeTab={currentSelection}
        updateActiveTab={handleSelectionChange}
        tabs={menuItems}
        tourData={mappedData}
      />
    </>
  );
};

export default TravelPage;
