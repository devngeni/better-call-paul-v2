import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import HouseSection from "@/components/houseKeeping/HouseSection";
import { Layout } from "@/layout";
import React from "react";
import BottomNavigation from "@/components/Navbar/BottomNav";


const HousePage = () => {
  return (
    <Layout
      title="Drinks"
      description="Embark on an African adventure with the OUT OF AFRICA EXPERIENCE!"
      navbar={<Navbar />}
      footer={<Footer />}
      bottomNav={<BottomNavigation />}

    >
      <HouseSection />
    </Layout>
  );
};

export default HousePage;
