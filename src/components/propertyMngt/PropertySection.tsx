import React, { useState } from "react";
import { useRouter } from "next/router";
import { AirTrIcon, ChaufferIcon, HireCarIcon } from "../../../public/Icons";
import TopNavbar from "../travelpage/TopNavbar";
import HeroSection from "../travelpage/HeroSection";
import BottomNavbar from "../travelpage/BottomNavbar";

const menuItems = [
  { name: "Airport Transfer", icon: <AirTrIcon /> },
  { name: "Car Hire", icon: <HireCarIcon /> },
  { name: "Chauffeur", icon: <ChaufferIcon /> },
];

const PropertySection = ({ propertyData }: any) => {
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
        backgroundImage="/DealsImages/Property.webp"
        title="Property Management"
        text="We manage all facets of property rental, from seamless reservations to meticulous maintenance, ensuring every guest experiences the comfort and charm synonymous with our name. Each 
        interaction is infused with dedication, expertise, and a touch of Kenyan hospitality that sets us apart.
        By entrusting us with your investments, you are not only guaranteeing a smooth and professional management experience but also becoming part of a larger narrative - one that speaks of Nairobi’s warmth, authenticity, and resilience.
        "
      />

      <BottomNavbar
        activeTab={currentSelection}
        updateActiveTab={handleSelectionChange}
        tabs={menuItems}
        tourData={propertyData}
      />
    </>
  );
};

export default PropertySection;
