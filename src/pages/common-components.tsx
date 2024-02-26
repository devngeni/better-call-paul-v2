import React, { useState } from "react";
import { Navbar, NavigationBar } from "@/components/Navbar";
import {
  BookSection,
  Button,
  Cart,
  CartCheckout,
  CommonHotel,
  Input,
  Text,
  Title,
} from "@/components/commons";
import { Layout } from "@/layout";
import {
  FaqsSection,
  ProductDetails,
  TimeSection,
  Swiper,
  IntroSection,
} from "@/components/productspage";
import BottomNavigation from "@/components/Navbar/BottomNav";
import Card from "@/components/commons/Card";
import Car from "../../public/DealsImages/TX.png";
import Food from "../../public/DealsImages/Order.png";
import ChefMain from "../../public/DealsImages/1.png";
import Chef from "../../public/DealsImages/chef.png";
import { CommonContainerDiv } from "@/styles/commons";
import { IntroData, Timelines, faqs } from "@/utils";
import CheckoutTotal from "@/components/commons/CheckoutTotal";
import ItemPricing from "@/components/commons/ItemPricing";
import { useRouter } from "next/router";
import { AirTrIcon, ChaufferIcon, HireCarIcon } from "../../public/Icons";

const dataHotel = [
  {
    subTitle: "Restaurant",
    content: [
      {
        name: "Title 1",
        hotelDescription: "Title 1",
        image: Chef,
        content: "Content 1",
        info: "Info 1",
      },
    ],
  },
  {
    subTitle: "Meal Prep",
    content: [
      {
        name: "Title 2",
        hotelDescription: "Title 2",
        image: Chef,
        content: "Content 2",
        info: "Info 1",
      },
    ],
  },
  {
    subTitle: "Private Chef",
    content: [
      {
        name: "Title 3",
        hotelDescription: "Title 2",
        image: Chef,
        content: "Content 3",
        info: "Info 1",
      },
    ],
  },
];

const menuItems = [
  { name: "Restaurant", icon: <AirTrIcon /> },
  { name: "Meal Prep", icon: <HireCarIcon /> },
  { name: "Private Chef", icon: <ChaufferIcon /> },
];

function CommonComponents() {
  const [quantityValue, setQuantityValue] = useState(0);

  const increaseQuantity = () => {
    setQuantityValue((quantityValue) => quantityValue + 1);
  };

  const decreaseQuantity = () => {
    if (quantityValue > 1) {
      setQuantityValue((quantityValue) => quantityValue - 1);
    }
  };

  const deleteItem = () => {
    setQuantityValue(0);
  };

  const [currentSelection, setCurrentSelection] = useState("Services");
  const router = useRouter();

  const handleSelectionChange = (selection: string) => {
    setCurrentSelection(selection);
  };

  return (
    <Layout
      title="Common Components"
      description="reusble components"
      navbar={<Navbar />}
      navigationbar={<NavigationBar />}
      bottomNav={<BottomNavigation />}
    >
      <CommonContainerDiv>
        <Title text="This is a mockup title" color="#1A3F34" />
        <Text text="This is a mockup text" color="#1A3F34" size="14px" />
        <CheckoutTotal price={4} btnLabel="Checkout" />
        <ItemPricing price={30} priceDetails="Daily Rate" />
        <Card
          src={Car}
          alt="kanairo"
          title="Toyota Landruiser V8"
          content="Spend your morning with the beautiful Rothschild giraffes."
          price={300}
        />
        <Cart
          title="Fanta Pineapple"
          quantity="2 litres"
          price={2}
          src={Food}
          alt="fanta"
        />
        <CartCheckout
          title="Fanta Pineapple"
          quantity="2 litres"
          price={2}
          src={Food}
          alt="fanta"
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onDelete={deleteItem}
          amount={quantityValue}
        />
        <Button
          width="250px"
          height="40px"
          borderRadius="10px 10px"
          borderColor="none"
          background="#1A3F34"
          color="#fff"
        >
          Hire
        </Button>
        <Input
          placeholder="Phone no.*"
          type="text"
          value=""
          width="250px"
          height="40px"
          borderRadius="0.31rem"
          fontFamily="Arial, sans-serif"
          fontSize="16px"
        />

        <ProductDetails
          title="Trip Details"
          text="Embark on an African adventure with the OUT OF AFRICA 
EXPERIENCE! Dive into the charm of the historic Karen 
neighbourhood, where every step is a journey through time. 
Get up close and personal with the majestic Rothschild 
giraffes, and unravel the tales of Karen Blixen, the legendary I
figure from the iconic movie, Out of Africa. Don't just visit, live 
the story!"
        />
        <BookSection price={130} text="excluding entrance fees" book="Book" />

        <TimeSection timelines={Timelines} />

        <FaqsSection title="More Details" faqs={faqs} />
        <IntroSection
          alt={""}
          title={"Toyota Landcruiser V8"}
          content={"Spend your morning with the beautiful Rothschild giraffes."}
          introData={IntroData}
        />

        <Swiper
          items={[
            { id: 1, imageUrl: "/LR.png" },
            { id: 2, imageUrl: "/LR.png" },
            { id: 3, imageUrl: "/LR.png" },
          ]}
        />
        <CommonHotel
          activeTab={currentSelection}
          updateActiveTabs={handleSelectionChange}
          tabs={menuItems}
          image={ChefMain}
          title={"Hotel Title"}
          backgroundImage="/DealsImages/1.png"
          text={"Hotel Description"}
          hotelsData={dataHotel}
        />
      </CommonContainerDiv>
    </Layout>
  );
}

export default CommonComponents;
