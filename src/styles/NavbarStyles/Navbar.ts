import styled from "styled-components";

export const NavContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  @media screen and (max-width: 599px) {
    position: relative;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a3f34;
    z-index: 2;
  }
`;

export const NavWrapper = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 800px){
    display: none;
  }
`;

export const NavDrawer = styled.div`
  width: 18px;
  height: 12px;
  fill: #fff;
  background-image: url("/drawer.svg");
  background-size: center;
  background-repeat: no-repeat;
  background-position: center;
`;

export const NavLogo = styled.div`
  width: 27.097px;
  height: 24px;
  flex-shrink: 0;
  background: url("/logo2.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: soft-light;
`;

export const NavLinks = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const Search = styled.div`
  width: 13.5px;
  height: 13.5px;
  flex-shrink: 0;
  stroke-width: 1px;
  stroke: #fff;
  background-image: url("/search.svg");
  background-size: center;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Cart = styled.div`
  width: 18px;
  height: 18px;
  background-image: url("/cart.svg");
  background-size: center;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Message = styled.div`
  width: 18px;
  height: 18px;
  background-image: url("/mail.svg");
  background-size: center;
  background-repeat: no-repeat;
  background-position: center;
`;
