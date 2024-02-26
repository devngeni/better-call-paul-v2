import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import NannySection from "@/components/nannypage/NannySection";
import { Layout } from "@/layout";
import BottomNavigation from "@/components/Navbar/BottomNav";


export default function NannyService() {
  return (
    <Layout
      title="Fitness and Wellness Services"
      description="Embark on an African adventure with the OUT OF AFRICA EXPERIENCE!"
      navbar={<Navbar />}
      footer={<Footer />}
      bottomNav={<BottomNavigation />}

    >
      <NannySection />
    </Layout>
  );
}
