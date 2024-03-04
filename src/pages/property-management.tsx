import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import PropertySection from "@/components/propertyMngt/PropertySection";
import { Layout } from "@/layout";
import React from "react";
import BottomNavigation from "@/components/Navbar/BottomNav";
import { CommonContainer, CommonWrapper } from "@/styles/commons";
import MoreSection from "@/components/travelpage/MoreSection";
import { useServicesDataContext } from "@/context/GetServicesDataContext";
import { CATEGORIES } from "../../constants";

const MoreGrocery = [
  {
    image: "/DrinkImages/Tastes.png",
    title: "Sauvignon Blanc",
    cost: "Starts at Ksh. 2,500",
    bgColor: "#cff4d2",
  },
  {
    image: "/DrinkImages/Bottle2.png",
    title: "Merlot Shiraz",
    cost: "Starts at Ksh. 2,500",
    bgColor: "#cff4d2",
  },
];

const Property = () => {
  const { getServiceDataByCategory, isLoading } = useServicesDataContext();

  const propertyMgtDAta = getServiceDataByCategory(CATEGORIES.propertyMgt);

  console.log(propertyMgtDAta, "data property");

  return (
    <Layout
      title="Drinks"
      description="Embark on an African adventure with the OUT OF AFRICA EXPERIENCE!"
      navbar={<Navbar />}
      footer={<Footer />}
      bottomNav={<BottomNavigation />}
    >
      <PropertySection
        propertyData={getServiceDataByCategory(propertyMgtDAta)}
      />
      <CommonContainer>
        <CommonWrapper>
          <MoreSection
            sections={MoreGrocery.map((item, index) => ({
              imageSrc: item.image,
              text: item.title,
              description: item.cost,
              bgColor: item.bgColor,
            }))}
            title="Expat Guide to Moving to Kenya"
          />
        </CommonWrapper>
      </CommonContainer>
    </Layout>
  );
};

export default Property;
