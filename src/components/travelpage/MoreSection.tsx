import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { CommonWrapper } from "@/styles/commons";
import { Arrow } from "../../../public/Icons";

const SectionContainer = styled.section`
  overflow-x: auto;
  padding: 20px 10px;
  margin-top: 2rem;
  background-color: #f4f4f4;
  border-radius: 10px;
  border: 1px dashed #333;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    padding: 20px;
    width: 100%;
    justify-content: flex-start;
  }
`;

const SectionTitle = styled.h2`
  // font-size: 42px;
  font-size: calc(1.5rem + ((1vw - 3.6px) * 0.5128));
  font-weight: 700;
  margin-left: 20px;
  color: #333;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
`;

const Card = styled.div<{ $backgroundColor: string }>`
  flex: none;
  width: 100%;
  max-width: 60vw;
  height: auto;
  max-height: 500px;
  margin: 0 20px 20px 0;
  background: ${(props) => props.$backgroundColor};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 30px;
  gap: 20px;
  > * {
    max-height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    width: 430px;
  }

  @media screen and (max-width: 768px) {
    min-width: calc(50% - 20px);
    min-height: 250px;
    padding: 10px;
  }

  @media screen and (max-width: 480px) {
    min-width: calc(25% - 20px);
    min-height: 200px;
    padding: 10px;
  }
`;

const StoreName = styled.h3`
  color: #333;
  font-family: ${(props) => props.theme.fontFace.fonts.poppins};
  font-size: 16px;
  font-weight: 800;
`;
const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;
  img {
    object-fit: contain;
  }
`;
const ArrowIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #1a3f34;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  &:hover {
    color: #000;
  }
`;
interface SectionProps {
  imageSrc: string;
  text: string;
  description?: string;
  bgColor: string;
  cost?: string;
  price?: string;
}

interface MoreSectionProps {
  title: string;
  sections: SectionProps[];
  key?: number;
  width?: number;
  height?: number;
}

const DescriptionContainer = styled.div<{ $expanded: boolean }>`
  max-height: ${({ $expanded }) => ($expanded ? "100%" : "150px")};
  overflow: hidden;
  text-overflow: ellipsis;
  transition: max-height 0.3s ease;
  font-size: 16px;
  color: #666;
  width: 100%;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};

  > .readMore {
    cursor: pointer;
    text-decoration: underline;
    color: blue;
  }
`;

const MoreSection: React.FC<MoreSectionProps> = ({
  title,
  sections,
  width = 180,
  height = 180,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <CommonWrapper>
      <SectionTitle>{title}</SectionTitle>
      <SectionContainer>
        {sections.map((section, index) => (
          <Card key={index} $backgroundColor={section.bgColor}>
            <CardImage>
              <Image
                src={section.imageSrc}
                alt={section.text}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </CardImage>
            <StoreName>
              {section.text}
              <br /> {section.price}
            </StoreName>
            <DescriptionContainer $expanded={expandedIndex === index}>
              {section.description && (
                <>
                  {section.description.length > 200 ? (
                    <>
                      {expandedIndex === index ? (
                        <>
                          {section.description}
                          <div
                            className="readMore"
                            onClick={() => toggleExpanded(index)}
                          >
                            Show less
                          </div>
                        </>
                      ) : (
                        <>
                          {`${section.description.slice(0, 150)}... `}
                          <div
                            className="readMore"
                            onClick={() => toggleExpanded(index)}
                          >
                            Read more
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    section.description
                  )}
                </>
              )}
            </DescriptionContainer>
            <ArrowIcon>
              <Arrow />
            </ArrowIcon>
          </Card>
        ))}
      </SectionContainer>
    </CommonWrapper>
  );
};

export default MoreSection;
