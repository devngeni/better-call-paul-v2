import { Footer } from "@/components/Footer";
import { Navbar, NavigationBar } from "@/components/Navbar";
import { vehiclesData } from "@/components/travelpage/CarData";
import TravelPage from "@/components/travelpage/MainSection";
import { Layout } from "@/layout";
import BottomNavigation from "@/components/Navbar/BottomNav";


export default function TravelAndPage() {
  return (
    <Layout
      title="Travel Concierge & Services"
      description="Embark on an African adventure with the OUT OF AFRICA EXPERIENCE!"
      navbar={<Navbar />}
      navigationbar={<NavigationBar />}
      footer={<Footer />}
      bottomNav={<BottomNavigation />}

    >
      <TravelPage mappedData={vehiclesData} />
    </Layout>
  );
}
