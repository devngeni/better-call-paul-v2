import { Wrapper } from "@/components/legal/Faqs";
import styled from "styled-components";

const Container = styled(Wrapper)`
  background-color: #fff;
  color: #fff;
  padding: 20px;
  width: 100%;
  height: 100%;
`;
const TermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 20px;
  min-height: 100vh;
  padding: 100px 0;
  @media screen and (max-width: 1300px) {
    padding: 30px 0;
    width: 70%;
  }
  @media screen and (max-width: 1000px) {
    width: 95%;
    padding: 70px 0;
  }
`;
const Title = styled.h1`
  font-size: 24px;
  color: #000;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-top: 20px;
  font-weight: 600;
  color: #000;
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
`;

const Paragraph = styled.p`
  line-height: 1.5;
  color: #333;
  font-family: ${(props) => props.theme.fontFace.fonts.poppins};
`;

const ContactInfo = styled.div`
  margin: 20px 0;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const ContactLink = styled.a`
  color: #4caf50;
  display: flex;
  gap: 20px;
  text-decoration: none;
`;

export {
  Container,
  TermsContainer,
  Title,
  SectionTitle,
  Paragraph,
  ContactInfo,
  ContactLink,
};
