import { type } from "os";
import React from "react";
import { HostData } from "@/types";
import { Container, Paragraph, SectionTitle, TermsContainer } from "@/styles/legalstyles";
import { MainTitle } from "./Faqs";

type HostsProps = {
  data: HostData;
};

const Hosts: React.FC<HostsProps> = ({data}) => {
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

export default Hosts;
