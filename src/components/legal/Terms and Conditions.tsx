import {
  Container,
  Paragraph,
  SectionTitle,
  TermsContainer,
} from "@/styles/legalstyles";
import { TermsData } from "@/types";
import React from "react";
import { MainTitle } from "./Faqs";

type TermsAndConditionsProps = {
  data: TermsData;
};

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ data }) => {
  return (
    <Container>
      <TermsContainer>
        <MainTitle style={{ paddingTop: "10%", width: "80%" }}>
          {data.title}
        </MainTitle>
        <Paragraph>{data.introduction}</Paragraph>
        {data.sections.map((section, index) => (
          <div key={index}>
            <SectionTitle>{section.title}</SectionTitle>
            <Paragraph>{section.content}</Paragraph>
          </div>
        ))}
      </TermsContainer>
    </Container>
  );
};

export default TermsAndConditions;
