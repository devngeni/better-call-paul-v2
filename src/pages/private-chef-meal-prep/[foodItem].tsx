import { Footer } from "@/components/Footer";
import { Navbar, NavigationBar } from "@/components/Navbar";
import { StyledContent } from "@/components/travelpage/BottomNavbar";
import Card from "@/components/travelpage/CardComponent";
import HeroSection from "@/components/travelpage/HeroSection";
import TopNavbar from "@/components/travelpage/TopNavbar";
import { useCartDispatch } from "@/context/CartContext";
import { Layout } from "@/layout";
import { CardContainer } from "@/styles/commons";
import AdsSection from "@/styles/landingPageStyles/Ads";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import BottomNavigation from "@/components/Navbar/BottomNav";

export default function SlugPage({ data }: any) {
  const router = useRouter();
  const { foodItem } = router.query;
  const [currentPath] = useState(foodItem as string);
  const handleBack = () => router.back();

  const handleClick = () => {
    return;
  };

  const dispatch = useCartDispatch();
  interface ProductType {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    quantity: number;
  }
  const handleAddToCart = ({
    id,
    name,
    price,
    image,
    category,
    quantity,
  }: ProductType) => {
    dispatch({
      type: "ADD",
      product: {
        id,
        name,
        price,
        image,
        category,
        quantity: quantity || 1,
      },
    });
  };

  const prepareAddToCart = (product: ProductType) => () => {
    handleAddToCart(product);
  };

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
      <AdsSection />

      <StyledContent>
        {data?.map((item: any, index: number) => (
          <React.Fragment key={index}>
            {item.content.map((contentItem: any, contentIndex: number) => (
              <CardContainer key={contentIndex}>
                <Card
                  id={contentIndex}
                  imageSrc={contentItem.imagePath}
                  price={contentItem.price}
                  productName={contentItem.name}
                  quantity={0}
                  category={currentPath}
                  onAddToCart={prepareAddToCart({
                    id: contentIndex,
                    name: contentItem.name,
                    price: Number(contentItem.price),
                    image: contentItem.imagePath,
                    category: currentPath,
                    quantity: 1,
                  })}
                  handleClick={handleClick}
                  isLoading={false}
                  loading={false}
                />
              </CardContainer>
            ))}
          </React.Fragment>
        ))}
      </StyledContent>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { foodItem } = context.query;

  // Fetch data directly and await the result
  const res = await fetch(`${process.env.BASE_URL}/api/provider/${foodItem}`);
  const fetchedDataById = await res.json();

  return {
    props: {
      data: fetchedDataById.data, 
    },
  };
};
