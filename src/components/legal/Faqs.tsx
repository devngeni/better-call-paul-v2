import React, { useState } from "react";
import {
  Answer,
  CategoryTitle,
  FAQSection,
  FaqsContainer,
  Question,
} from "@/styles/legalstyles";
import { FAQProps } from "@/types";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: #fff;
`;

const MainTitle = styled.h1`
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
  width: 70%;
  display: flex;
  align-items: center;
  color: #000;
  font-size: clamp(1.5rem, calc(1.5vw + 1rem), 3rem);
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;
  flex-wrap: wrap;
  gap: 0.5rem;
  hyphens: auto;
  overflow-wrap: break-word;
  & > span {
    color: #175ce1;
    font-weight: 700;
  }

  & > .dollar-circle {
    width: 50px;
    height: 50px;
    padding: 0.31em;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: 50%;
    font-size: 0.75em;
  }
`;

const FAQComponent: React.FC<FAQProps> = ({ data }) => {
  const [openQuestions, setOpenQuestions] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleQuestion = (index: string) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Wrapper style={{ height: "auto", padding: "130px 0" }}>
      <FaqsContainer>
        <MainTitle>Frequently Asked Questions</MainTitle>
      </FaqsContainer>
      <FaqsContainer>
        {data.categories.map((category, categoryIndex) => (
          <FAQSection key={categoryIndex}>
            <CategoryTitle>{category.category}</CategoryTitle>
            {category.faqs.map((faq, faqIndex) => {
              const questionKey = `category-${categoryIndex}-faq-${faqIndex}`;
              return (
                <div key={faqIndex}>
                  <Question onClick={() => toggleQuestion(questionKey)}>
                    {faq.question}
                  </Question>
                  <Answer className={openQuestions[questionKey] ? "open" : ""}>
                    {faq.answer}
                  </Answer>
                </div>
              );
            })}
          </FAQSection>
        ))}
      </FaqsContainer>
    </Wrapper>
  );
};

export { FAQComponent, MainTitle, Wrapper };
