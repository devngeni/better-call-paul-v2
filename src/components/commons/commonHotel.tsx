import { StyledBottomNavbar, TabItem } from "../travelpage/BottomNavbar";
import TopNavbar from "../travelpage/TopNavbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeroSection from "../travelpage/HeroSection";
import { StaticImageData } from "next/image";
import Hotel from "./hotel";
import { faqs } from "@/utils";
import { Layout } from "@/layout";
import { Navbar, NavigationBar } from "../Navbar";
import { Footer } from "../Footer";
import { getIconComponent } from "@/pages/services/[slug]";
import FaqsSection, { FAQItem } from "../productspage/FaqsSection";
import ExpactQuideAd from "./ExpactQuideAd";
import {
  HotelContainer,
  HotelWrapper,
  ShopCartContainer,
  ShopCartContent,
} from "@/styles/commons";

interface HotelsData {
  subTitle: string;
  content: {
    hotelDescription?: string;
    image: StaticImageData;
    content: string;
    info?: string;
    imageWidth?: number;
    imageHeight?: number;
    price?: number;
  }[];
}
interface commonHotelProps {
  tabs: { name: string; icon: JSX.Element }[];
  title: string;
  activeTab: string;
  updateActiveTabs: (tab: string) => void;
  image: StaticImageData;
  onClick?: () => void;
  backgroundImage: string;
  text: string;
  hotelsData: HotelsData[];
  showAd?: boolean;
  showFAQ?: boolean;
  faqsTitle?: string;
  faqsData?: FAQItem[];
}

const CommonHotel: React.FC<commonHotelProps> = ({
  tabs,
  title,
  backgroundImage,
  text,
  hotelsData,
  updateActiveTabs,
  showAd,
  showFAQ,
  faqsTitle,
  faqsData,
}) => {
  const route = useRouter();
  const defaultTab = tabs?.length > 0 ? tabs[0].name : "";
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [currentSelection, setCurrentSelection] = useState("Services");
  const [filteredHotelsData, setFilteredHotelsData] = useState<{
    subTitle: string;
    content: {
      hotelDescription?: string;
      image: StaticImageData;
      content: string;
      info?: string;
      price?: number;
      imageHeight?: number;
      imageWidth?: number;
    }[];
  } | null>(null);

  useEffect(() => {
    if (hotelsData) {
      const filteredData = hotelsData.find(
        (hotel) => hotel.subTitle === activeTab
      );
      if (filteredData) {
        setFilteredHotelsData({
          subTitle: filteredData.subTitle,
          content: filteredData.content.map((item) => ({
            hotelDescription: item.hotelDescription || undefined,
            image: item.image,
            content: item.content,
            info: item.info || undefined,
            price: item.price || undefined,
            imageHeight: item.imageHeight,
            imageWidth: item.imageWidth,
          })),
        });
      } else {
        setFilteredHotelsData(null);
      }
    } else {
      setFilteredHotelsData(null);
    }
  }, [activeTab, hotelsData]);

  const handleTabsClick = (name: string) => {
    setActiveTab(name);
    setCurrentSelection(name);
  };

  const handleBack = () => {
    route.back();
  };
  const currentPath = route.asPath;
  const pathParts = currentPath.split("/");

  return (
    <>
      <Layout
        title={currentSelection}
        description="Better Call Paul"
        navbar={<Navbar />}
        navigationbar={<NavigationBar />}
        footer={<Footer />}
      >
        <TopNavbar currentSelection={currentSelection} onBack={handleBack} />
        <HeroSection
          backgroundImage={backgroundImage}
          title={title}
          text={text}
        />
        <StyledBottomNavbar>
          {tabs?.map(({ name, icon }) => (
            <TabItem
              key={name}
              $isActive={activeTab === name}
              onClick={() => handleTabsClick(name)}
            >
              {getIconComponent(icon)}&nbsp;
              {name}
            </TabItem>
          ))}
        </StyledBottomNavbar>
        <HotelContainer>
          {filteredHotelsData && (
            <>
              {filteredHotelsData.content.map((item, index) => (
                <HotelWrapper
                  key={index}
                  itemCount={filteredHotelsData.content.length}
                >
                  <Hotel
                    src={item.image}
                    content={item.content}
                    description={item.hotelDescription}
                    info={item.info}
                    price={item.price}
                    imageHeight={item.imageHeight}
                    imageWidth={item.imageWidth}
                  />
                </HotelWrapper>
              ))}
            </>
          )}
        </HotelContainer>
        
        {showAd && (
          <div style={{ marginBottom: "20px" }}>
            <ExpactQuideAd />
          </div>
        )}

        <ShopCartContainer>
          <ShopCartContent>
            {showFAQ && (
              <FaqsSection
                title={faqsTitle}
                faqs={faqsData}
                showFAQ={showFAQ}
              />
            )}
          </ShopCartContent>
        </ShopCartContainer>

      
      </Layout>
    </>
  );
};

export default CommonHotel;



