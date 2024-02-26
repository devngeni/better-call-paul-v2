import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import QuickActions from "./QuickActions";

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CarouselItem = styled.div`
  display: flex;
  scroll-snap-align: center;
  margin: 0 2%;
  transition: transform 0.3s ease-in-out;
  &:first-child {
    margin-left: 3%;
  }
  &:last-child {
    margin-right: 3%;
  }
  @media screen and (min-width: 768px) {
    margin: 0 1%;
    &:first-child {
      margin-left: 20%;
    }
    &:last-child {
      margin-right: 2%;
    }
  }
`;
const ITemImage = styled.div`
  border-radius: 20px;
  img {
    border-radius: inherit;
    width: auto;
  }
  @media screen and (min-width: 768px) {
    img {
      width: 20rem;
      height: 9rem;
    }
  }
  @media screen and (max-width: 599px) {
    img {
      height: 150px;
    }
  }
  @media screen and (max-width: 350px) {
    img {
      width: auto;
    }
  }
`;
interface CarouselProps {
  items: { id: number; imageUrl: string }[];
}
const DotsContainer = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Dot = styled.span<{ $active: boolean }>`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${({ $active }) => ($active ? "#000" : "#bbb")};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
`;

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToItem = (index: number) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const width = carousel.offsetWidth;
      const itemOffset = width * (index + 0.1);
      carousel.scrollLeft = itemOffset;
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % items.length;
        scrollToItem(nextIndex);
        return nextIndex;
      });
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [items.length]);

  useEffect(() => {
    scrollToItem(activeIndex);
  }, [activeIndex]);

  return (
    <CarouselWrapper>
      <QuickActions />
      <CarouselContainer ref={carouselRef}>
        {items.map((item, index) => (
          <CarouselItem key={item.id} onClick={() => setActiveIndex(index)}>
            <ITemImage>
              <Image
                src={item.imageUrl}
                alt="Carousel item"
                width={324}
                height={114}
                priority
              />
            </ITemImage>
          </CarouselItem>
        ))}
      </CarouselContainer>
      <DotsContainer>
        {items.map((item, index) => (
          <Dot
            key={item.id}
            $active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </DotsContainer>
    </CarouselWrapper>
  );
};

export default Carousel;
