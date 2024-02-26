import styled from "styled-components";

const FaqsContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const CategoryTitle = styled.h2`
  font-size: 24px;
  color: #175ce1;
  margin-bottom: 15px;
  border-bottom: 1px solid #fff;
  padding-bottom: 10px;
`;

const Question = styled.div`
  background-color: #22273a;
  color: #f0f0f0;
  cursor: pointer;
  padding: 10px 15px;
  border: 1px solid #fff;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 18px;
  transition: background-color 0.3s ease, height 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Answer = styled.div`
  background-color: #1a1d2e;
  color: #f0f0f0;
  padding: 0 15px;
  margin-top: 5px;
  display: none;
  font-size: 16px;
  border-left: 3px solid #4caf50;

  &.open {
    display: block;
    padding: 10px 15px;
    transition: height 0.3s ease-in-out, padding 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const FAQSection = styled.section`
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  border-radius: 8px;
  background-color: #1c2632;
  box-shadow: 0 1px 8px 2px rgba(6, 6, 6, 0.41);
`;

export { FaqsContainer, CategoryTitle, Question, Answer, FAQSection };
