import { useState } from "react";
import { useRouter } from "next/router";
import TopNavbar from "../travelpage/TopNavbar";
import BottomNavbar from "../travelpage/BottomNavbar";
import HeroSection from "../travelpage/HeroSection";
import { FullDayIcon, Night, Noon } from "../../../public/Icons";
import { StaticImageData } from "next/image";

interface TourDataType {
  subTitle: string;
  content: {
    name: string;
    description?: string;
    imagePath: StaticImageData;
    price?: number | string;
  }[];
}

const menuItems = [
  { name: "Full Day Trip", icon: <FullDayIcon /> },
  { name: "Half Day Trip", icon: <Noon /> },
  { name: "Out of Town", icon: <Night /> },
];

const TourPage = ({ mappedData }: { mappedData: TourDataType[] }) => {
  const [currentSelection, setCurrentSelection] = useState(
    "Tours and Experiences"
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
        backgroundImage="/DealsImages/bgTour.jpg"
        title="Tours and Experiences"
        text="Kenya makes a perfect holiday destination. Whether you’re looking to relax in an unspoiled, picture book location by the sea or discover jaw-dropping scenery and incredible wildlife, in the savannah, you can do it in this magnificent country."
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

export default TourPage;
