import { Footer } from "@/components/Footer";
import { Navbar, NavigationBar } from "@/components/Navbar";
import { TourData } from "@/components/tourpage/TourData";
import TourPage from "@/components/tourpage/TourSection";
import MoreSection from "@/components/travelpage/MoreSection";
import { Layout } from "@/layout";
import { CommonContainer, CommonWrapper } from "@/styles/commons";
import BottomNavigation from "@/components/Navbar/BottomNav";
import { useServicesDataContext } from "@/context/GetServicesDataContext";

const TourImages = [
  {
    image: "/Market.webp",
    title: "The Maasai Market is famous for traditional crafts.",
    cost: "Visitors can explore the vibrant Maasai Market, where they can buy traditional Maasai jewelry, textiles, and other unique crafts.",
    bgColor: "#cff4d2",
  },
  {
    image: "/Nairobi.webp",
    title: "Nairobi is the safari capital of Africa.",
    cost: "The city’s proximity to major national parks and reserves makes it a perfect base for exploring Kenya’s wildlife and going on thrilling safari adventures.",
    bgColor: "rgb(255, 239, 237)",
  },
  {
    image: "/Marathon.webp",
    title: "Nairobi hosts the Nairobi Marathon.",
    cost: "Every year, thousands of runners from around the world gather in Nairobi for the annual Nairobi Marathon, which promotes fitness and raises funds for various charitable causes.",
    bgColor: "#cff4d2",
  },
  {
    image: "/Coffee.webp",
    title: "Nairobi is renowned for its coffee.",
    cost: "Kenyan coffee is highly regarded worldwide, and Nairobi plays a significant role in the country’s coffee industry.",
    bgColor: "rgb(255, 239, 237)",
  },
  {
    image: "/Culture.webp",
    title: "Kenya’s cultural diversity.",
    cost: "In Kenya, more than 60 languages are spoken and there are more than 40 ethnic groups.",
    bgColor: "#cff4d2",
  },
  {
    image: "/Museum.webp",
    title:
      "The National Museum of Kenya showcases the country’s rich heritage.",
    cost: "Visitors can explore the National Museum of Kenya to learn about the country’s history, art, culture, and natural heritage.",
    bgColor: "rgb(255, 239, 237)",
  },
  {
    image: "/Tech.webp",
    title: "Nairobi has a thriving tech industry.",
    cost: "The city has experienced immense growth in the technology sector, earning it the nickname “Silicon Savannah.”",
    bgColor: "#cff4d2",
  },
  {
    image: "/Sheldrick.webp",
    title: "The David Sheldrick Wildlife Trust nurtures orphaned elephants.",
    cost: "Located on the outskirts of Nairobi, the David Sheldrick Wildlife Trust is dedicated to rescuing and rehabilitating orphaned elephants and other wildlife.",
    bgColor: "rgb(255, 239, 237)",
  },
];

export default function TourAndExperience() {
  const { getServiceDataByCategory } = useServicesDataContext();

  const tourdata = getServiceDataByCategory("TOURS AND EXPERIENCES");

  console.log("it works", tourdata);

  return (
    <Layout
      title="Tours & Experience services"
      description="Embark on an African adventure with the OUT OF AFRICA EXPERIENCE!"
      navbar={<Navbar />}
      navigationbar={<NavigationBar />}
      footer={<Footer />}
      bottomNav={<BottomNavigation />}
    >
      <TourPage mappedData={TourData} />
      <CommonContainer>
        <CommonWrapper>
          <MoreSection
            sections={TourImages.map((item, index) => ({
              imageSrc: item.image,
              text: item.title,
              description: item.cost,
              bgColor: item.bgColor,
            }))}
            title="Kenyan Facts"
          />
        </CommonWrapper>
      </CommonContainer>
    </Layout>
  );
}
