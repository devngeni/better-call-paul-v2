import { Footer } from "@/components/Footer";
import { Navbar, NavigationBar } from "@/components/Navbar";
import BottomNavigation from "@/components/Navbar/BottomNav";
import Hotel from "@/components/commons/hotel";
import { FaqsSection } from "@/components/productspage";
import { FAQItem } from "@/components/productspage/FaqsSection";
import {
  StyledBottomNavbar,
  TabItem,
} from "@/components/travelpage/BottomNavbar";
import HeroSection from "@/components/travelpage/HeroSection";
import MoreSection from "@/components/travelpage/MoreSection";
import TopNavbar from "@/components/travelpage/TopNavbar";
import { Layout } from "@/layout";
import {
  CommonContainer,
  CommonWrapper,
  HotelContainer,
  HotelWrapper,
} from "@/styles/commons";
import AdsSection from "@/styles/landingPageStyles/Ads";
import { generateSlug } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { groupItemsBySubtitle } from "@/utils/groupSubTitles";
import { CATEGORIES } from "../../../constants";
import { useServicesDataContext } from "@/context/GetServicesDataContext";
import { useRestaurantData } from "@/context/RestaurantContext";

interface CommonContentProps {
  Data: {
    imagePath: string;
    name: string;
    description: string;
    whatsAppDraftMsg: string;
    seeMenuBtn?: boolean;
    seeWhatsappBtn?: string;
    WhatsAppBtnText?: string;
    showImage?: boolean;
    adImage?: string;
  }[];
  activeTab: string | null;
}

interface RestaurantDataItem {
  Data: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[];
  activeTab: string | null;
}

const RestaurantCommonContent = ({ Data, activeTab }: RestaurantDataItem) => {
  const router = useRouter();
  const handleRoute = (slug: string) => {
    router.push(`/private-chef-meal-prep/${generateSlug(slug)}`);
  };

  return (
    <HotelContainer className="image-resize">
      {Data?.map((item: any, index: any) => (
        <HotelWrapper itemCount={Data.length} key={item._id}>
          <Hotel
            id={item._id}
            src={item.image}
            content={item.title}
            description={item.description}
            handleSeeMenuButtonClick={() => handleRoute(item._id)}
            seeMenuBtn={true}
            seeWhatsappBtn={true}
          />

          {item.showImage && (
            <div
              className="image-at-private-chef"
              style={{
                margin: "0 2% 10px 2%",
                width: "calc(100% - 4%)",
                height: "220px",
                position: "relative",
                borderRadius: "4px",
              }}
            >
              <Image
                src={item.adImage}
                alt="adImage"
                placeholder="blur"
                blurDataURL={item.adImage}
                layout="fill"
              />
            </div>
          )}
        </HotelWrapper>
      ))}
    </HotelContainer>
  );
};

const CommonContent = ({ Data, activeTab }: CommonContentProps) => {
  return (
    <HotelContainer className="image-resize">
      {Data?.map((item: any, index: any) => (
        <HotelWrapper itemCount={Data.length} key={item._id}>
          <Hotel
            src={item.image || item.imagePath}
            content={item.name || item.title}
            description={item.description}
            info={item.whatsAppDraftMsg}
            seeWhatsappBtn={false}
            WhatsAppBtnText={item.WhatsAppBtnText}
          />

          {item.showImage && (
            <div
              className="image-at-private-chef"
              style={{
                margin: "0 2% 10px 2%",
                width: "calc(100% - 4%)",
                height: "220px",
                position: "relative",
                borderRadius: "4px",
              }}
            >
              <Image
                src={item.adImage}
                alt="adImage"
                placeholder="blur"
                blurDataURL={item.adImage}
                layout="fill"
              />
            </div>
          )}
        </HotelWrapper>
      ))}
    </HotelContainer>
  );
};

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

const PrivateChefMealPrep = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("private-chef & meal-prep");
  const [tabs, setTabs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [serviceProviders, setServiceProviders] = useState<string[]>([]);
  const [groupedData, setGroupedData] = useState<any[]>([]);

  const { getServiceDataByCategory } = useServicesDataContext();
  const { privateChefData } = useRestaurantData(); // Fetching data from context
  
  useEffect(() => {
    const fetchData = async () => {
      const restaurantData = getServiceDataByCategory(
        CATEGORIES.restaurantAndChef
      );

      const groupedData: any = groupItemsBySubtitle(restaurantData);
      setGroupedData(groupedData);

      const tabKeys = Object.keys(groupedData).map(
        (key) => groupedData[key].subTitle
      );
      setTabs(tabKeys);

      if (activeTab === null && tabKeys.length > 0) {
        setActiveTab(tabKeys[0]);
      }
    };
    fetchData();
  }, [getServiceDataByCategory, activeTab]);

  const getActiveTabAndPath = (tab: string) => {
    setCurrentPath(tab);
    setActiveTab(tab);
  };

  const handleBack = () => router.back();

  return (
    <Layout
      title="Private Chef & Meal Prep"
      description="Private Chef & Meal Prep"
      navigationbar={<NavigationBar />}
      navbar={<Navbar />}
      footer={<Footer />}
      bottomNav={<BottomNavigation />}
    >
      <TopNavbar currentSelection={currentPath} onBack={handleBack} />
      <HeroSection
        backgroundImage={
          "/privateChefImages/well-done-steak-homemade-potatoes.jpg"
        }
        title={`Food, Private Chef & Meal Prep Dineout`}
        text={`Nairobi’s culinary scene is a dynamic and evolving landscape that reflects the city’s rich
        cultural diversity and international influences. The city is a melting pot of flavors, offering
        an exciting array of dining experiences that range from traditional Kenyan dishes to global
        cuisine.`}
      />
      <StyledBottomNavbar>
        {tabs?.map((tab) => (
          <TabItem
            key={tab}
            $isActive={tab === activeTab}
            onClick={() => getActiveTabAndPath(tab)}
          >
            {tab}
          </TabItem>
        ))}
      </StyledBottomNavbar>
      <AdsSection />

      {activeTab === "Restaurant" && serviceProviders ? (
        <RestaurantCommonContent Data={privateChefData} activeTab={activeTab} />
      ) : (
        <CommonContent
          Data={
            groupedData.find((obj: any) => obj.subTitle === activeTab)
              ?.content || []
          }
          activeTab={activeTab}
        />
      )}

      <CommonContainer>
        <CommonWrapper>
          <MoreSection
            sections={Ads_PrivatechefData.map((item, index) => ({
              imageSrc: item.image,
              text: item.title,
              description: item.description,
              bgColor: item.bgColor,
            }))}
            title="Top 10 Restaurants in Nairobi"
          />
        </CommonWrapper>
      </CommonContainer>

      <div style={{ margin: "20px auto" }}>
        <FaqsSection title="More details" faqs={FaqsData} />
      </div>
    </Layout>
  );
};

export default PrivateChefMealPrep;

let whatsAppDraftMsg =
  "Hello Paul, I’m craving a special dining experience. Can I hire a private chef or explore meal prep options?";

const Ads_PrivatechefData = [
  {
    image: `/privateChefImages/Jiko_at_tribe.jpg`,
    title: "Jiko at The Tribe Hotel",
    description:
      "Hotel: Whimsical grill-inspired dining with locally sourced organic ingredients.",
    bgColor: "#cff4d2",
  },
  {
    image: "/privateChefImages/mawimbi.jpg",
    title: "Mawimbi",
    description:
      "Nairobi's seafood hotspot for fine dining on Harry Thuku Road.",
    bgColor: "rgb(255, 239, 237)",
  },
  {
    image: "/privateChefImages/Ankole.jpeg",
    title: "Ankole Grill",
    description: "Serene vibes and unique African Steak-House Experience.",
    bgColor: "#cff4d2",
  },
  {
    image:
      "https://res.cloudinary.com/gonation/gonation.data.prod/apqiiykrsssg5rtjff9p",
    title: "Mercado",
    description: "Vibrant Mexican culinary adventure in Westlands.",
    bgColor: "rgb(255, 239, 237)",
  },
  {
    image: "/privateChefImages/botanica.webp",
    title: "Botanica",
    description: "Multisensory farm-to-table dining in Westlands.",
    bgColor: "#cff4d2",
  },
  {
    image: "/privateChefImages/hero-nairobi-restaurant.webp",
    title: "Hero",
    description:
      "Japanese speakeasy tribute to local champions and comic heroes.",
    bgColor: "rgb(255, 239, 237)",
  },
  {
    image: "/privateChefImages/ate.jpg",
    title: `Atë`,
    description:
      "Electric eatery in Kyuna, blending Mexican-Mediterranean flavors with art, mischief-inspired.",
    bgColor: "#cff4d2",
  },
  {
    image: "/privateChefImages/slate.webp",
    title: `Slate`,
    description: "French-Afro-Asian fusion gem with handcrafted cocktails.",
    bgColor: "rgb(255, 239, 237)",
  },
  {
    image: "/privateChefImages/matteo.jpg",
    title: `Matteo’s Italian Restaurant`,
    description: "Delta Towers' vibrant twist on Kenyan cuisine.",
    bgColor: "#cff4d2",
  },
  {
    image: "/privateChefImages/inti-a-nikkei.jpg",
    title: `Inti`,
    description: "Nairobi's dome-shaped haven for Nikkei cuisine with a view",
    bgColor: "rgb(255, 239, 237)",
  },
];

const FaqsData: FAQItem[] | undefined = [
  {
    text: "User Guidelines:",
    content: [
      {
        question: "Booking Process:",
        answer:
          "For an affordable and luxurious culinary experience, contact us in advance to discuss your preferences, dietary restrictions, and occasion details. Provide information about the number of guests, preferred cuisine, and any allergies or dietary restrictions. Make your Airbnb stay memorable by requesting a private chef for occasions like romantic dinners, family celebrations, or to cater to special dietary needs.",
      },
      {
        question: "Menu Planning:",
        answer:
          "Our chef will work with you to create a custom menu tailored to your preferences. Enjoy the simplicity of the process, and feel free to request occasional cakes for birthdays, graduations, showers, and more.",
      },
      {
        question: "Affordable and Weekly Plans:",
        answer:
          "Experience gourmet meals at an affordable price, enhancing your stay without breaking the bank. Explore our weekly meal plans for a convenient, on-the-go dining experience.",
      },
      {
        question: "Arrival and Setup:",
        answer:
          "The chef will arrive at the agreed-upon time with all necessary ingredients, making the process simple and stress-free. Ensure the kitchen is accessible and tidy for the chef's use, allowing them to create delicious meals seamlessly.",
      },
      {
        question: "During the Culinary Experience:",
        answer:
          "Embrace the simplicity of enjoying gourmet meals without leaving your Airbnb. Engage with the chef during the cooking process if you're interested in the art of culinary creation.",
      },
      {
        question: "Dining Experience:",
        answer:
          "Let the chef take care of the details, presenting and serving each course to perfection. Relax and enjoy the on-the-go luxury of a private chef experience.",
      },
    ],
  },
  {
    text: "FAQs:",
    content: [
      {
        question: "Affordability and Luxurious Experience:",
        answer:
          "How can I enjoy a private chef experience at an affordable price? What occasions can the private chef cater to, including occasional cakes? Is the service suitable for on-the-go travelers staying in Airbnb rentals?",
      },
      {
        question: "Customization and Dietary Needs:",
        answer:
          "Can the chef accommodate specific dietary preferences or restrictions? How does the menu planning process work, especially for special occasions? Are there weekly meal plans available for an extended stay?",
      },
      {
        question: "Simplicity and Convenience:",
        answer:
          "How simple is the booking process for a private chef? Can I request a private chef for simple occasions like a romantic dinner? Is the private chef experience suitable for families?",
      },
      {
        question: "On-The-Go Dining:",
        answer:
          "How does the private chef service cater to on-the-go travelers? Can the chef create meals suitable for busy schedules and travel itineraries?",
      },
      {
        question: "Setup and Access:",
        answer:
          "How do I prepare the kitchen for the private chef's arrival? Is the setup process simple and convenient for Airbnb guests?",
      },
    ],
  },
];
