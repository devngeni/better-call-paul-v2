import styled from "styled-components";
import {
  DealSectionContainer,
  DealsHeader,
  DealsWrapper,
} from "./DealSection.Styles";

export const ChefSectionContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    background-size: 100%;
    height: 15.5625rem;
  }
`;

export const ChefSectionWrapper = styled(DealsWrapper)`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
    padding: 1rem 0;
  }
`;

export const ChefHeader = styled(DealsHeader)`
  padding: 3% 0%;
  color: #fff;
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  font-size: clamp(1rem, calc(1rem + ((1vw - 0.48rem) * 1.3889)), 2rem);
  font-weight: ${(props) => props.theme.fontFace.fontWeight.bold};
`;

export const ChefBox = styled(DealSectionContainer)`
  flex-direction: row;
  border: none;
  gap: 0.75rem;
`;

export const ChefButton = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  justify-content: center;
  align-items: center;
  color: #1a3f26;
  text-align: center;
  font-family: ${(props) => props.theme.fontFace.fonts.poppins};
  font-weight: ${(props) => props.theme.fontFace.fontWeight.bold};
  font-size: ${(props) => props.theme.fontFace.fontSize.medium};
  font-style: normal;
  line-height: 1rem;
  background: #fff;
  border-radius: 0.3875rem;
  transition: all 0.3s ease;

  &:hover {
    background: #1a3f26;
    color: #fff;
    transform: scale(1.05);
    border-radius: 100em;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
    font-size: ${(props) => props.theme.fontFace.fontSize.medium};
    font-weight: ${(props) => props.theme.fontFace.fontWeight.bold};
  }
`;
