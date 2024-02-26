import { NavProps } from "@/types";
import React from "react";
import styled from "styled-components";
import { Cart, Home, List, Profile } from "../../../public/Icons";
import { css } from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import CartComponent from "../commons/cart-button";


const navItems: NavProps[] = [
  {
    id: "home",
    icon: (
      <Link href="/home">
        <Home />
      </Link>
    ),
    label: "Home",
    path: "/home",
  },
  { id: "cart", icon: <div />, label: "Cart", path: "/cart" },
  {
    id: "profile",
    icon: (
      <Link
        href="https://api.whatsapp.com/send?phone=254794701568"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Profile />
      </Link>
    ),
    label: "Whatsapp",
    path: "https://api.whatsapp.com/send?phone=254794701568",
  },
];

const BottomNavigationContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavIcon = styled.div<{ $active: boolean }>`
  width: 24px;
  height: 24px;
  ${({ $active }) =>
    $active &&
    css`
      svg {
        path {
          fill: #143f34;
        }
      }
    `}
`;

const NavItem = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  ${({ $active }) =>
    $active &&
    css`
      background-color: rgba(239, 187, 126, 0.2);
      border-radius: 10px;
      padding: 5px;
    `}
`;

const NavLabel = styled.span`
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  font-size: 12px;
  color: #333;
`;

const BottomNavigation: React.FC = () => {
  const router = useRouter();

  return (
    <BottomNavigationContainer>
      {navItems.map((item) => {
        const active = router.pathname === item.path;

        if (item.id === "cart") {
          return (
            <NavItem key={item.id} $active={active}>
              <NavIcon $active={active}>{item.icon}</NavIcon>
              <CartComponent />
              <NavLabel>{item.label}</NavLabel>
            </NavItem>
          );
        }
        return (
          <NavItem key={item.id} $active={active}>
            <NavIcon $active={active}>{item.icon}</NavIcon>
            <NavLabel>{item.label}</NavLabel>
          </NavItem>
        );
      })}
    </BottomNavigationContainer>
  );
};

export default BottomNavigation;
