import React from "react";
import styled from "styled-components";
import Chevron from "../../../public/Icons/Chevron";
import { LeftArrow } from "../../../public/Icons";

interface TopNavbarProps {
  currentSelection: string;
  onBack?: () => void;
}

const StyledTopNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 0.825rem;
  color: #1a3f34;
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.fontFace.fonts.poppins};
  font-weight: 400;
  svg {
    width: 24px;
    height: 24px;
    fill: #1a3f34;
  }
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const BackButton = styled.div`
  margin-right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const TopNavbar: React.FC<TopNavbarProps> = ({ currentSelection, onBack }) => (
  <StyledTopNavbar>
    <Title>
      <BackButton onClick={onBack}>
        <LeftArrow />
      </BackButton>
      Services
      <Chevron />
      &nbsp;{currentSelection}
    </Title>
  </StyledTopNavbar>
);

export default TopNavbar;
