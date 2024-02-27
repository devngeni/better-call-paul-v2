import { Footer } from "@/components/Footer";
import { Navbar, NavigationBar } from "@/components/Navbar";
import TravelPage from "@/components/travelpage/MainSection";
import { Layout } from "@/layout";
import BottomNavigation from "@/components/Navbar/BottomNav";
import { useServicesDataContext } from "@/context/GetServicesDataContext";
import { groupItemsBySubtitle } from "@/utils/groupSubTitles";
import { CATEGORIES } from "../../constants";

export default function TravelAndPage() {
  const { getServiceDataByCategory } = useServicesDataContext();

  const TravelData = getServiceDataByCategory(CATEGORIES.travelAndConceige);

  return (
    <Layout
      title="Travel Concierge & Services"
      description="Embark on an African adventure with the OUT OF AFRICA EXPERIENCE!"
      navbar={<Navbar />}
      navigationbar={<NavigationBar />}
      footer={<Footer />}
      bottomNav={<BottomNavigation />}
    >
      {/* <TravelPage mappedData={vehiclesData} /> */}
      <TravelPage mappedData={groupItemsBySubtitle(TravelData)} />
    </Layout>
  );
}
