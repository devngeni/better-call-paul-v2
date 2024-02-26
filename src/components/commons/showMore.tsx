import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const ToggleButton = styled.button`
  width: 100%;
  padding: 15px;
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  background-color: #bc9364;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-align: center;
  font-weight: 400;
  &:hover {
    background-color: #1a3f34;
  }
`;

const ContentArea = styled.div<{ $isOpen: boolean }>`
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  max-height: ${({ $isOpen }) => ($isOpen ? "1000px" : "0")};
  padding: ${({ $isOpen }) => ($isOpen ? "15px" : "0 15px")};
  background-color: #f8f9fa;
`;

type ShowMoreDetailsProps = {
  children: React.ReactNode;
};

const ShowMoreDetails: React.FC<ShowMoreDetailsProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <ToggleButton onClick={toggleOpen} aria-expanded={isOpen}>
        {isOpen ? "Hide Details" : "Show Car Hire Requirements"}
        {isOpen ? "-" : "+"}
      </ToggleButton>
      <ContentArea $isOpen={isOpen}>{isOpen && children}</ContentArea>
    </Container>
  );
};

export default ShowMoreDetails;
