import { Footer } from "@/components/Footer";
import { Navbar, NavigationBar } from "@/components/Navbar";
import GroomSection from "@/components/wellness/GroomSection";
import { Layout } from "@/layout";
import BottomNavigation from "@/components/Navbar/BottomNav";

export default function FitnessPage() {
  return (
    <Layout
      title="Fitness and Wellness Services"
      description="Embark on an African adventure with the OUT OF AFRICA EXPERIENCE!"
      navbar={<Navbar />}
      footer={<Footer />}
      bottomNav={<BottomNavigation />}
      navigationbar={<NavigationBar />}
    >
      <GroomSection />
    </Layout>
  );
}
