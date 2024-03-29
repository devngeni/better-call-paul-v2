import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import BottomNavigation from "@/components/Navbar/BottomNav";
import { NavigationBar } from "@/components/Navbar";
import DrinkSection from "@/components/drinks/DrinkSection";
import MoreSection from "@/components/travelpage/MoreSection";
import { Layout } from "@/layout";
import { CommonContainer, CommonWrapper } from "@/styles/commons";
import TasteOfKenyaAd from "@/components/TasteOfKenyaAd";
import { useServicesDataContext } from "@/context/GetServicesDataContext";
import { groupItemsBySubtitle } from "@/utils/groupSubTitles";
import { CATEGORIES } from "../../constants";

const Water = [
  {
    image: "/DrinkImages/WaterRefill.png",
    title: "10 Litres at $2",
    cost: "Looking for a hassle-free solution to staying hydrated? Better call Paul!",
    bgColor: "#cff4d2",
  },
  {
    image: "/DrinkImages/Waters.png",
    title: "2o Litres at $5",
    cost: "Need an effortless way to stay hydrated? Better call Paul!",
    bgColor: "rgb(255, 239, 237)",
  },
];

export default function TourAndCoincierge() {
  const { getServiceDataByCategory } = useServicesDataContext();

  const drinksData = getServiceDataByCategory(CATEGORIES.drinks);

  return (
    <Layout
      title="Drinks"
      description="Embark on an African adventure with the OUT OF AFRICA EXPERIENCE!"
      navbar={<Navbar />}
      navigationbar={<NavigationBar />}
      footer={<Footer />}
      bottomNav={<BottomNavigation />}
    >
      <DrinkSection drinksData={groupItemsBySubtitle(drinksData)} />
      <CommonContainer>
        <CommonWrapper>
          <MoreSection
            sections={Water.map((item, index) => ({
              imageSrc: item.image,
              text: item.title,
              description: item.cost,
              bgColor: item.bgColor,
            }))}
            title="Water Refill"
          />
        </CommonWrapper>
      </CommonContainer>
      <TasteOfKenyaAd />
    </Layout>
  );
}
