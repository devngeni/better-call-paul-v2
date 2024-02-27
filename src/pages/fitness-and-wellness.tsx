import { Footer } from "@/components/Footer";
import { Navbar, NavigationBar } from "@/components/Navbar";
import GroomSection from "@/components/wellness/GroomSection";
import { Layout } from "@/layout";
import BottomNavigation from "@/components/Navbar/BottomNav";
import { useServicesDataContext } from "@/context/GetServicesDataContext";
import { groupItemsBySubtitle } from "@/utils/groupSubTitles";

export default function FitnessPage() {
  const { getServiceDataByCategory } = useServicesDataContext();

  const wellnessData = getServiceDataByCategory("WELLNESS AND GROOMING");

  return (
    <Layout
      title="Fitness and Wellness Services"
      description="Embark on an African adventure with the OUT OF AFRICA EXPERIENCE!"
      navbar={<Navbar />}
      footer={<Footer />}
      bottomNav={<BottomNavigation />}
      navigationbar={<NavigationBar />}
    >
      <GroomSection wellnessData={groupItemsBySubtitle(wellnessData)} />
    </Layout>
  );
}
