import React, { useEffect, useState } from "react";
import { carouselData } from "./HeroData";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";

interface CarouselItem {
  imageUrl: string;
  title: string;
  description: string;
}

export const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const Slider = styled.ul`
  display: flex;
  width: 100%;
  height: 70vh;
  transition: transform 0.5s ease-in-out;
`;

export const Item = styled.li<{ $bgImage: string; $isActive: boolean }>`
  width: ${({ $isActive }) => ($isActive ? "100%" : "200px")};
  height: ${({ $isActive }) => ($isActive ? "100%" : "300px")};
  list-style-type: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background-color: #fff;
  background-image: ${({ $isActive, $bgImage }) =>
    $isActive
      ? `linear-gradient(
           to bottom,
           rgba(0, 0, 0, 0.3),
           rgba(0, 0, 0, 0.7)
         ),
         url(${$bgImage})`
      : `url(${$bgImage})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  box-shadow: 0 20px 30px rgba(255, 255, 255, 0.3) inset;
  transition: all 0.5s ease-in-out;

  &:nth-child(1),
  &:nth-child(2) {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: none;
    border-radius: 0;
    box-shadow: none;
    opacity: 1;
    z-index: 1;
  }

  &:nth-child(3) {
    left: 50%;
  }
  &:nth-child(4) {
    left: calc(50% + 220px);
  }
  &:nth-child(5) {
    left: calc(50% + 440px);
  }
  &:nth-child(6) {
    left: calc(50% + 660px);
  }
  @media screen and (max-width: 1024px) {
    &:nth-child(3) {
      left: calc(40% + 180px);
    }
    &:nth-child(4) {
      left: calc(43% + 360px);
    }
    &:nth-child(5) {
      left: calc(50% + 540px);
    }
    &:nth-child(6) {
      left: calc(50% + 720px);
    }
  }
`;

const showAnimation = keyframes`
  0% {
    filter: blur(5px);
    transform: translateY(calc(-50% + 75px));
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
`;

export const Content = styled.div`
  width: min(40vw, 600px);
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
  font: 400 0.85rem ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  color: white;
  text-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
  opacity: 0;
  display: none;

  .item:nth-of-type(2) & {
    display: block;
    z-index: 1;
    opacity: 1;
    animation: ${showAnimation} 0.75s ease-in-out 0.3s forwards;
  }

  @media (max-width: 650px) {
    & .title {
      font-size: 0.9rem;
    }
    & .description {
      font-size: 0.65rem;
    }
    & button {
      font-size: 0.7rem;
    }
  }

  @media (min-width: 651px) and (max-width: 1030px) {
    width: min(30vw, 400px);
    & .title {
      font-size: 2rem;
    }
    & .description {
      font-size: 1rem;
    }
    & button {
      font-size: 0.7rem;
    }
  }
`;

export const Title = styled.h2`
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
  text-transform: uppercase;
  font-size: 3.5rem;
  text-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
`;

export const Description = styled.p`
  line-height: 1.7;
  margin: 1rem 0 1.5rem;
  font-size: 1.8rem;
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
`;

export const Button = styled.button`
  width: fit-content;
  background-color: #00453a;
  color: white;
  border-radius: 0.25rem;
  border: none;
  padding: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  font-size: 1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border: 2px solid white;
    color: #fff;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.5);
  }

  &:active {
    transform: scale(0.95);
  }
`;


export const NavButton = styled.button`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgb(255, 251, 251);
  color: rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(0, 0, 0, 0.6);
  margin: 0 0.75rem;
  padding: 1rem 1.25rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  font-size: 1.2rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: -10px;
  }
`;

// Media Queries
const sizes = {
  small: "650px",
  medium: "900px",
};

export const media = {
  small: `(max-width: ${sizes.small})`,
  medium: `(min-width: ${sizes.small}) and (max-width: ${sizes.medium})`,
};

const CarouselSlider: React.FC<{ autoplaySpeed?: number }> = ({
  autoplaySpeed = 3500,
}) => {
  const [items, setItems] = useState(carouselData);
  const route = useRouter();
  const handleNext = () => {
    setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  };

  const handlePrev = () => {
    setItems((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, -1),
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [items, autoplaySpeed]);
  const handleRoute = (url: string) => {
    route.push(url);
  };
  return (
    <Main>
      <Slider>
        {items.map((item, index) => (
          <Item
            key={index}
            $bgImage={item.imageUrl}
            $isActive={index === 1}
            className="item"
          >
            <Content className="content">
              <Fade
                key={`${item.imageUrl}-${index}`}
                direction="up"
                damping={1000}
              >
                <Title className="title">{item.title}</Title>
              </Fade>
              <Fade
                key={`${item.description}-${index}`}
                direction="up"
                damping={1000}
              >
                <Description className="description">
                  {item.description}
                </Description>
              </Fade>
              <Fade
                key={`${item.title}-${index}`}
                direction="up"
                damping={1000}
              >
                <Button onClick={() => handleRoute(String(item.url))}>
                  Explore More
                </Button>
              </Fade>
            </Content>
          </Item>
        ))}
      </Slider>
      <NavButton className="prev" onClick={handlePrev}>
        &lt;
      </NavButton>
      <NavButton className="next" onClick={handleNext}>
        &gt;
      </NavButton>
    </Main>
  );
};

export default CarouselSlider;
