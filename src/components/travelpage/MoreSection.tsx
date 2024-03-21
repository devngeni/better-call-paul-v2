import React, { useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { CommonWrapper } from "@/styles/commons";
import { Arrow } from "../../../public/Icons";
import Link from "next/link";

const SectionContainer = styled.section`
  overflow-x: auto;
  padding: 20px 10px;
  margin-top: 2rem;
  background-color: #f4f4f4;
  border-radius: 10px;
  border: 1px dashed #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  scroll-snap-type: x mandatory;
  position: relative;
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
  cursor: pointer;
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
  margin-bottom: 5px;
  min-height: 60px;
  @media screen and (max-width: 768px) {
    min-height: 80px;
  }
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
  cursor: pointer;
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
  min-height: ${({ $expanded }) => ($expanded ? "100%" : "80px")};
  max-height: auto;
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
  @media screen and (max-width: 768px) {
    min-height: ${({ $expanded }) => ($expanded ? "100%" : "150px")};
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.span<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "#333" : "#ccc")};
  margin: 0 5px;
  cursor: pointer;
`;

const MoreSection: React.FC<MoreSectionProps> = ({
  title,
  sections,
  width = 180,
  height = 180
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    if (containerRef.current) {
      const cardWidth =
        containerRef.current.querySelector("div")?.offsetWidth || 0;
      containerRef.current.scrollLeft = index * cardWidth;
    }
  };
  const handleWhatsappClick = (index: number) => {
    const section = sections[index];
    const message = `Hello, I am interested in the following: ${section.text}`;
    const url = `https://api.whatsapp.com/send?phone=+254794701568&text=${encodeURIComponent(
      message
    )}`;
    window.open(url);
  };

  return (
    <CommonWrapper>
      <SectionTitle>{title}</SectionTitle>
      <SectionContainer ref={containerRef}>
        {sections.map((section, index) => (
          <Card
            key={index}
            $backgroundColor={section.bgColor}
            onClick={() => {
              handleWhatsappClick(index);
            }}
          >
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

            {/* <ArrowIcon>
                <Arrow />
              </ArrowIcon> */}
          </Card>
        ))}
      </SectionContainer>
      <Dots>
        {sections.map((_, index) => (
          <Dot
            key={index}
            isActive={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </Dots>
    </CommonWrapper>
  );
};

export default MoreSection;
