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
import React, { useState } from "react";

interface commonContentProps {
  Data: {
    cardImage: any;
    cardTitle: string;
    description: string;
    whatsAppDraftMsg: string;
    showImage?: boolean;
  }[];
}

const CommonContent = ({ Data }: commonContentProps) => {
  const router = useRouter();
  const handleRoute = (slug: string) => {
    router.push(`/private-chef-meal-prep/${generateSlug(slug)}`);
  };

  return (
    <HotelContainer className="image-resize">
      {Data?.map((item: any, index: any) => (
        <HotelWrapper itemCount={Data.length} key={index}>
          <Hotel
            src={item.cardImage}
            content={item.cardTitle}
            description={item.description}
            info={item.whatsAppDraftMsg}
            handleSeeMenuButtonClick={() => handleRoute(item.cardTitle)}
            seeMenuBtn={item.seeMenuBtn}
            seeWhatsappBtn={item.seeWhatsappBtn}
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

const PrivateChefMealPrep = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("private-chef & meal-prep");
  const [tabs] = useState(["Restaurant", "Private Chef & Meal Prep"]);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const getActiveTabAndPath = (tab: any) => {
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

      {activeTab === tabs[0] && <CommonContent Data={RestaurandData} />}
      {activeTab === tabs[1] && <CommonContent Data={PrivateChefData} />}

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

const RestaurandData = [
  {
    cardImage: "/privateChefImages/kosewe.jpg",
    cardTitle: "K'Osewe Ranalo Foods",
    description: `Something fishy is always cooking! from Tilapia, Nile perch, Cat fish to sardins (omena)
      Variety of organic traditional vegetables
      Acompany it with Ugali, Chapati, Rice or chips.`,
    whatsAppDraftMsg,
    seeMenuBtn: true,
    seeWhatsappBtn: true,
  },
  {
    cardImage: "/privateChefImages/mamymbuta.png",
    cardTitle: "Mammy Mbuta",
    description: `Savour the essence of West Africa at Mammy Mbuta, where "Taste De Kinshasa" invites you to indulge in an authentic culinary experience, celebrating the rich and diverse flavours of the region.`,
    whatsAppDraftMsg,
    seeMenuBtn: true,
    seeWhatsappBtn: true,
  },
  {
    cardImage: "/privateChefImages/maritas.jpg",
    cardTitle: "Maritas",
    description: `“The only way to eat wings: with messy hands and a satisfied smile.” -Paul.<br>   
    Kenyas famous Bahjia Potatoes now served with a varrity of finger licking wings in 10 different flavours.`,
    whatsAppDraftMsg,
    seeMenuBtn: true,
    seeWhatsappBtn: true,
  },
  {
    cardImage: "/privateChefImages/jajemelo.jpg",
    cardTitle: "Jajemelo",
    description: `Indulge in the Jajemel Hot Feast Pizza for a delightful pizza experience`,
    whatsAppDraftMsg,
    seeMenuBtn: true,
    seeWhatsappBtn: true,
  },
  {
    cardImage: "/privateChefImages/CHINESE TAKEOUT.webp",
    cardTitle: "Chinese & Indian",
    description: `Discover an exquisite blend of Chinese and Indian cuisines that Nairobi has to offer.
    <br>Call us on 0794 701 568 for a culinary journey like no other.`,
    whatsAppDraftMsg,
    seeMenuBtn: false,
    seeWhatsappBtn: false,
    WhatsAppBtnText: "request menu",
  },
];

const PrivateChefData = [
  {
    cardImage: "/privateChefImages/bcp-personal-chef.png",
    cardTitle: "Private Chef",
    description: `Providing access to a private chef is a
      luxurious offering that allows guests to
      enjoy gourmet meals without leaving the
      comfort of their Airbnb rental. The chef
      can prepare custom menus tailored to the
      guest’s preferences, creating a memorable
      dining experience. Whether it’s a romantic
      dinner, a family celebration, or special
      dietary needs, the chef can accommodate
      various culinary desires as well as
      occassional cakes such as birthdays,
      graduations, showers and more.
      Weekly meal plans also available.
      <li>Afordable</li>
      <li>Simple</li>
      <li>On The Go</li>
      `,
    whatsAppDraftMsg,
    showImage: true,
    adImage: "/privateChefImages/ad-Image-private-chef.jpg",
  },
];

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
