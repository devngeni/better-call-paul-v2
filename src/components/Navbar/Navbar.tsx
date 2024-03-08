import {
  NavContainer,
  NavLinks,
  NavWrapper,
} from "@/styles/NavbarStyles/Navbar";
import React from "react";
import CurrencySelector from "../commons/DropDown";
import NavbarDesktop from "./NavbarDesktop";
import CartComponent from "../commons/cart-button";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Title = styled.h1`
  color: #ffa500;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
  display: inline-block;
  animation: ${fadeIn} 1s ease-out forwards;

  span {
    color: #fff;
    display: inline-block;
  }
`;
const Navbar = () => {
  return (
    <NavContainer>
      <NavbarDesktop />
      <NavWrapper>
        <Link href="/home" rel="noopener noreferrer">
          <Title>
            B<span>etter</span> C<span>all</span> P<span>aul</span>
          </Title>
        </Link>
        <NavLinks>
          <CartComponent />
          <CurrencySelector />
        </NavLinks>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
