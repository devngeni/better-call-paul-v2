import { Footer } from "@/components/Footer";
import { Navbar, NavigationBar } from "@/components/Navbar";
import { vehiclesData } from "@/components/travelpage/CarData";
import TravelPage from "@/components/travelpage/MainSection";
import { Layout } from "@/layout";
import BottomNavigation from "@/components/Navbar/BottomNav";
import { useServicesDataContext } from "@/context/GetServicesDataContext";

export default function TravelAndPage() {
  const { getServiceDataByCategory } = useServicesDataContext();

  const TourData = getServiceDataByCategory("TRAVEL CONCIERGE");

  function groupItemsBySubtitle(items: any[]) {
    const groupedItems: any = {};
    // Group items by their subTitle
    items.forEach((item: { subTitle: string | number; content: any }) => {
      if (!groupedItems[item.subTitle]) {
        groupedItems[item.subTitle] = [];
      }
      groupedItems[item.subTitle].push(item.content);
    });

    // Transform grouped items into desired format
    const formattedItems = Object.keys(groupedItems).map((subTitle) => {
      return {
        subTitle: subTitle,
        content: groupedItems[subTitle].flat(),
      };
    });

    return formattedItems;
  }

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
      <TravelPage mappedData={groupItemsBySubtitle(TourData)} />
    </Layout>
  );
}
