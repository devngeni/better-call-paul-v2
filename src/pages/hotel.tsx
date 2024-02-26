import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import BottomNavbar from "@/components/travelpage/BottomNavbar";
import TopNavbar from "@/components/travelpage/TopNavbar";
import { Layout } from "@/layout";
import { useRouter } from "next/router";
import { useState } from "react";
import { AirTrIcon, ChaufferIcon, HireCarIcon } from "../../public/Icons";
import { TourData } from "@/components/tourpage/TourData";
import BottomNavigation from "@/components/Navbar/BottomNav";



const menuItems = [
  { name: "Airport Transfer", icon: <AirTrIcon /> },
  { name: "Car Hire", icon: <HireCarIcon /> },
  { name: "Chauffeur", icon: <ChaufferIcon /> },
];

export default function Hotel() {
  const [currentSelection, setCurrentSelection] = useState("Services");

  const router = useRouter();
  const handleBack = () => {
    router.push("/home");
  };

  const handleSelectionChange = (selection: string) => {
    setCurrentSelection(selection);
  };
  return (
    <Layout
      title="Hotel Services"
      description="Embark on an African adventure with the OUT OF AFRICA EXPERIENCE!"
      navbar={<Navbar />}
      footer={<Footer />}
      bottomNav={<BottomNavigation />}

    >
      <TopNavbar currentSelection={currentSelection} onBack={handleBack} />
      {/* <HeroSection
        backgroundImage="/DealsImages/Property.webp"
        title="Property Management"
        text="We manage all facets of property rental, from seamless reservations to meticulous maintenance, ensuring every guest experiences the comfort and charm synonymous with our name. Each interaction is infused with dedication, expertise, and a touch of Kenyan hospitality that sets us apart. By entrusting us with your investments, you are not only guaranteeing a smooth and professional management experience but also becoming part of a larger narrative - one that speaks of Nairobi’s warmth, authenticity, and resilience."
      /> */}

      {/* Pass BottomNavbar as a child */}
      <BottomNavbar
        activeTab={currentSelection}
        updateActiveTab={handleSelectionChange}
        tabs={menuItems}
        tourData={TourData}
      />
    </Layout>
  );
}
