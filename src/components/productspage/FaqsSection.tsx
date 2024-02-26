import React, { useState } from "react";
import styled from "styled-components";
import { Text, Title } from "../commons";
import DownChevron from "../../../public/Icons/DownChevron";
import {
  FaqAnswer,
  FaqContainer,
  FaqContent,
  FaqData,
  FaqHeader,
  FaqQuestion,
  FaqWrapper,
  Faqs
} from "@/styles/commons";

interface FAQItemContent {
  question?: string;
  answer?: string;
  answer1?: string;
  answer2?: string;
  answer3?: string;
  answer0?: string;
}

export interface FAQItem {
  text: string;
  content: (string | FAQItemContent)[];
}

interface FAQProps {
  title?: string;
  faqs?: FAQItem[];
  showFAQ?: boolean;
}

const Content = styled.div<{ $isOpen?: boolean }>`
  display: block;
  overflow: scroll;
  max-height: ${(props) => (props.$isOpen ? "max-content" : "0")};
  transition: max-height 0.8s ease-in-out;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
  }
`;

const FaqIcon = styled(DownChevron)<{ $isOpen?: boolean }>`
  transition: transform 0.4s ease-in-out;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const FaqsSection: React.FC<FAQProps> = ({
  title,
  faqs = [],
  showFAQ = true
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  if (!showFAQ) {
    return null;
  }

  const toggleContent = (index: number) => {
    const updatedIndexes = openIndexes.includes(index)
      ? openIndexes.filter((i) => i !== index)
      : [...openIndexes, index];
    setOpenIndexes(updatedIndexes);
  };

  return (
    <FaqContainer>
      <Title
        size="calc(1.375rem + ((1vw - 3.6px) * 1.4103))"
        $weight="700"
        color="#1A3F34"
      >
        {title}
      </Title>
      {faqs.map((faq, index) => (
        <FaqWrapper key={index}>
          <FaqHeader onClick={() => toggleContent(index)}>
            <Faqs>{faq.text.charAt(0).toUpperCase() + faq.text.slice(1)}</Faqs>
            <FaqIcon $isOpen={openIndexes.includes(index)} />
          </FaqHeader>
          <Content $isOpen={openIndexes.includes(index)}>
            <FaqContent>
              {faq.content.map((item, itemIndex) => (
                <FaqData key={itemIndex}>
                  {typeof item === "string" ? (
                    <ul key={itemIndex}>
                      <li>
                        <Text
                          size="calc(0.75rem + ((1vw - 0.225rem) * 0.7692))"
                          $weight="400"
                        >
                          {item}
                        </Text>
                      </li>
                    </ul>
                  ) : (
                    <div
                      key={itemIndex}
                      style={{
                        borderBottom: "1px solid #e0e0e0",
                        padding: "2% 0"
                      }}
                    >
                      <ul>
                        <li>
                          <FaqQuestion>
                            {(item as FAQItemContent).question}
                          </FaqQuestion>
                        </li>
                      </ul>
                      <FaqAnswer>
                        <p>{(item as FAQItemContent).answer}</p>
                      </FaqAnswer>
                      <FaqAnswer>
                        <p>{(item as FAQItemContent).answer1}</p>
                      </FaqAnswer>{" "}
                      <FaqAnswer>
                        <p>{(item as FAQItemContent).answer0}</p>
                      </FaqAnswer>
                      {(item as FAQItemContent).answer2 && (
                        <FaqAnswer>
                          {(item as FAQItemContent).answer2}
                        </FaqAnswer>
                      )}
                      {(item as FAQItemContent).answer3 && (
                        <FaqAnswer>
                          {(item as FAQItemContent).answer3}
                        </FaqAnswer>
                      )}
                    </div>
                  )}
                </FaqData>
              ))}
            </FaqContent>
          </Content>
          <hr
            style={{
              backgroundColor: "#215142",
              height: "1px",
              border: "none",
              opacity: "0.2",
              transition: "opacity 0.3s ease-in-out"
            }}
          />
        </FaqWrapper>
      ))}
    </FaqContainer>
  );
};

export default FaqsSection;
