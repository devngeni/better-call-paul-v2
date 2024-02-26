import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { HotelSection } from "@/components/commons";
import { Layout } from "@/layout";
import React, { useState } from "react";
import Hotel from "../../public/DealsImages/hotel.png";
import { useRouter } from "next/router";
import BottomNavbar from "@/components/travelpage/BottomNavbar";
import { FullDayIcon, Night, Noon } from "../../public/Icons";
import { ChefData } from "@/components/privateChef/ChefData";
import BottomNavigation from "@/components/Navbar/BottomNav";


const menuItems = [
  { name: "Restaurants", icon: <FullDayIcon /> },
  { name: "Meal Prep", icon: <Noon /> },
  { name: "Private chef", icon: <Night /> },
];

const Page = () => {
  const [currentSelection, setCurrentSelection] = useState("Private Chef");
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const handleSelectionChange = (selection: string) => {
    setCurrentSelection(selection);
  };
  return (
    <Layout
      title="Private Chef"
      description="Embark on an African adventure with the OUT OF AFRICA EXPERIENCE!"
      navbar={<Navbar />}
      footer={<Footer />}
      bottomNav={<BottomNavigation />}

    >
      <BottomNavbar
        activeTab={currentSelection}
        updateActiveTab={handleSelectionChange}
        tabs={menuItems}
        tourData={ChefData}
      />
      <HotelSection
        src={Hotel}
        content="Mamy Mbuta"
        description="Your home of West-African Cuisines"
      />
    </Layout>
  );
};

export default Page;
