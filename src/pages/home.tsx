import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import BottomNavigation from "@/components/Navbar/BottomNav";
import {
  CarSection,
  ChefSection,
  DealSection,
  DeliverySection,
  HeroContainer,
  ServicesSection,
  SpaSection,
} from "@/components/landingpage";
import AboutSection from "@/components/landingpage/AboutSection";
import ContactUs from "@/components/landingpage/ContactUs";
import { Layout } from "@/layout";

export default function Home() {
  return (
    <Layout
      navbar={<Navbar />}
      title="Welcome to BCP"
      description="One Touch All Service"
      footer={<Footer />}
      bottomNav={<BottomNavigation />}
    >
      <HeroContainer />
      <ServicesSection />
      <DealSection />
      <ChefSection />
      <AboutSection />
      <DeliverySection />
      <SpaSection />
      <CarSection />
      <ContactUs />
    </Layout>
  );
}
