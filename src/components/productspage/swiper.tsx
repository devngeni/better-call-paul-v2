import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const SwiperWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3% 0;
`;

const SwiperContainer = styled.div`
  width: 100%;
  display: flex;
justify-content: center;
  align-items: center;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SwiperItem = styled.div`
  flex: none;
   display: flex; 
  align-items: center; 
  scroll-snap-align: center;
  margin: 0;
  padding: 0 2%;
  transition: transform 0.3s ease-in-out;
  &:first-child {
    margin-left: 3%;
  }
`;

const ITemImage = styled.div`
  img {
    object-fit: cover;
  }
`;
interface SwiperProps {
  items: { id: number; imageUrl: string; width?: number; height?: number }[];
  imagePath: any
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
  outline: ${({ $active }) => ($active ? "none" : "1px solid #FFF")};
  display: inline-block;
  transition: background-color 0.6s ease;
`;

const Swiper: React.FC<SwiperProps> = ({ items, imagePath }) => {
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
        const nextIndex = (prevIndex + 1) % items?.length;
        scrollToItem(nextIndex);
        return nextIndex;
      });
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [items?.length]);

  useEffect(() => {
    scrollToItem(activeIndex);
  }, [activeIndex]);

  return (
    <SwiperWrapper>
      <SwiperContainer ref={carouselRef}>
        {/* {items?.map((item, index) => ( */}
          <SwiperItem  >
            <ITemImage>
              <Image
                src={imagePath || ''}
                alt="Swiper item"
                objectFit="contain"
                width={ 360}
                height={ 196}
              />
            </ITemImage>
          </SwiperItem>
        
      </SwiperContainer>
      <DotsContainer>
        {items?.map((item, index) => (
          <Dot
            key={item.id}
            $active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </DotsContainer>
    </SwiperWrapper>
  );
};

export default Swiper;
