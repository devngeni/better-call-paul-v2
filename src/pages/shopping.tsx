import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import ShoppingSection from '@/components/shopping/ShoppingSection';
import MoreSection from '@/components/travelpage/MoreSection';
import { Layout } from '@/layout';
import { CommonContainer, CommonWrapper } from '@/styles/commons';
import React from 'react'
import BottomNavigation from "@/components/Navbar/BottomNav";


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

const Shopping = () => {
  return (
    <Layout
    title="Shopping"
    description="Embark on an African adventure with the OUT OF AFRICA EXPERIENCE!"
    navbar={<Navbar />}
    footer={<Footer />}
    bottomNav={<BottomNavigation />}

  >
    <ShoppingSection />
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
  )
}

export default Shopping;