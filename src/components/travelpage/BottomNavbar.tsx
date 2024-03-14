import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { CardContainer, CardWrapper } from "@/styles/commons";
import { useRouter } from "next/router";
import { generateSlug } from "@/utils";
import Card from "./CardComponent";
import { useCartDispatch } from "@/context/CartContext";
import AdsSection from "@/styles/landingPageStyles/Ads";
import { useServicesDataContext } from "@/context/GetServicesDataContext";


interface BottomNavbarProps {
  activeTab: string;
  updateActiveTab: (tab: string) => void;
  tabs: { name: string; icon: JSX.Element }[];
  tourData: any[];
}

export const StyledBottomNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  height: 3rem;
`;

export const TabItem = styled.div<{ $isActive: boolean }>`
  color: #1a3f34;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  padding: 0.5rem 0.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  border-bottom: 2px solid transparent;
  background: transparent;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
  cursor: pointer;
  ${({ $isActive }) =>
    $isActive &&
    `
    border-bottom: 2px solid #1a3f34;
    background: rgba(33, 81, 66, 0.12);
  `}
  @media screen and (min-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

export const StyledContent = styled.div`
  width: 100vw;
  padding: 0 2%;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-basis: 100%;
    flex-wrap: wrap;
  }
`;

export const Icon = styled.div`
  @media screen and (min-width: 768px) {
    transform: scale(1.4);
  }
`;

const BottomNavbar: React.FC<BottomNavbarProps> = ({
  activeTab,
  updateActiveTab,
  tabs,
  tourData,
}) => {
  const [defaultTabClicked, setDefaultTabClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleRoute = (name: string) => {
    router.push(`/our-services/${name}`);
  };

  const activeSubTitle = tourData?.find(
    (data) => data.subTitle.toLowerCase() === activeTab.toLowerCase()
  );

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
  const handleTabClick = useCallback(
    (name: string) => {
      updateActiveTab(name);
    },
    [updateActiveTab]
  );

  useEffect(() => {
    if (!defaultTabClicked && tabs.length > 0) {
      handleTabClick(tabs[0].name);
      setDefaultTabClicked(true);
    }
  }, [defaultTabClicked, tabs, handleTabClick]);

  const { isLoading } = useServicesDataContext();

  useEffect(() => {
    (() => {
      setLoading(isLoading);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    })();
  }, [isLoading]);

  return (
    <>
      <StyledBottomNavbar>
        {tabs.map(({ name, icon }) => (
          <TabItem
            key={name}
            $isActive={activeTab === name}
            onClick={() => handleTabClick(name)}
          >
            <Icon>{icon}</Icon>&nbsp;
            {name}
          </TabItem>
        ))}
      </StyledBottomNavbar>
      <AdsSection />

      <StyledContent>
        {activeSubTitle &&
          activeSubTitle.content.map(
            ({ name, description, imagePath, price }: any) =>
              activeTab === activeSubTitle.subTitle ? (
                <CardContainer key={name}>
                  <Card
                    loading={loading}
                    productName={name}
                    description={description}
                    imageSrc={imagePath}
                    price={Number(price)}
                    quantity={0}
                    category={activeSubTitle.subTitle}
                    id={Math.random()}
                    isLoading={isLoading}
                    handleClick={() => {
                      handleTabClick(activeTab);
                      handleRoute(generateSlug(name));
                    }}
                    onAddToCart={prepareAddToCart({
                      id: Math.random(),
                      name,
                      price: Number(price),
                      image: imagePath,
                      category: activeSubTitle.subTitle,
                      quantity: 1,
                    })}
                  />
                </CardContainer>
              ) : null
          )}
      </StyledContent>
    </>
  );
};

export default BottomNavbar;
