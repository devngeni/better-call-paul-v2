import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import LuggageSection from "@/components/luggage/LuggageSection";
import { Layout } from "@/layout";
import React from "react";
import BottomNavigation from "@/components/Navbar/BottomNav";


const Luggage = () => {
  return (
    <Layout
      title="Drinks"
      description="Embark on an African adventure with the OUT OF AFRICA EXPERIENCE!"
      navbar={<Navbar />}
      footer={<Footer />}
      bottomNav={<BottomNavigation />}

    >
      <LuggageSection />
    </Layout>
  );
};

export default Luggage;
