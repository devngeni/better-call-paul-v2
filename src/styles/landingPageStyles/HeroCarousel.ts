import styled, { keyframes } from "styled-components";
const expand = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(2.5); // Scale as needed to fill the container
  }
`;

const shrink = keyframes`
  from {
    transform: scale(2.5);
  }
  to {
    transform: scale(1);
  }
`;
export const HeroCardContainer = styled.div`
  position: relative;
  margin-top: 88px;
  display: flex;
  width: 100%;
  min-height: calc(100vh - 88px);
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/diani.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  gap: 1rem;
  @media (max-width: 899px) {
    align-items: center;
  }
`;

export const Headertext = styled.div<{
  theme: { fontFace: { fonts: { tertiaryfont: string } } };
}>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  span {
    display: flex;
    color: #fff;
    font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
    font-style: normal;
    font-size: clamp(
      3.5rem,
      calc(3.5rem + ((1vw - 0.1375rem) * 6.1905)),
      10rem
    );
    letter-spacing: 0.28px;
    line-height: normal;
    font-weight: 700;
    height: auto;
  }
  @media (max-width: 599px) {
    text-align: center;
  }
`;

export const HeroCardWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  @media (max-width: 1535px) {
    width: 95%;
  }
  @media (max-width: 599px) {
    margin: 1% 0;
  }
`;

export const ConciergeServicesText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: auto;
  span {
    display: flex;
    color: #fff;
    font-style: normal;
    font-size: clamp(
      1.25rem,
      calc(1.25rem + ((1vw - 0.374375rem) * 1.2112)),
      2.25rem
    );
    letter-spacing: 0.28px;
    line-height: normal;
    font-weight: 500;
  }
  @media (max-width: 899px) {
    line-height: normal;
    justify-content: center;
  }
  @media (max-width: 599px) {
    text-align: center;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1535px) {
    overflow-y: hidden;
    overflow-x: auto;
    gap: 20px;
  }
  @media (max-width: 599px) {
    padding: 0 5px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  min-width: 309px;

  .cardText {
    display: flex;
    align-items: center;
    padding-left: 20px;
    width: 100%;
    height: auto;
    min-height: 52.34px;
    background: #fff;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    color: #252c41;
    font-family: ${(props) => props.theme.fontFace.fonts.secondaryfont};
    font-style: normal;
    font-size: clamp(
      0.875rem,
      calc(0.875rem + ((1vw - 0.374375rem) * 0.1514)),
      1rem
    );
    letter-spacing: 0.28px;
    line-height: normal;
    font-weight: 600;
  }
  @media (max-width: 310px) {
    min-width: 100%;
  }
`;

export const CardImage = styled.div`
  position: relative;
  display: flex;
  max-width: 300px;
  height: 173.81px;
  border-top-left-radius: 2px;
  border-top-right-radius: img {
    width: "100%";
    height: "100%";
  }
`;
interface ImageContainerProps {
  $imageUrl: string;
}
export const HeroSectionDiv = styled.div<ImageContainerProps>`
  position: relative;
  height: 60vh;
  width: 96.5vw;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  padding: 2%;
  margin: 20px;
  border-radius: 20px;
  ${(props) =>
    props.$imageUrl
      ? `
    background: radial-gradient(359.46% 141.42% at 0% 100%, rgba(33, 81, 66, 0.81) 0%, rgba(33, 81, 66, 0.02) 100%), url(${props.$imageUrl});
  `
      : ""}
  background-repeat: no-repeat;
  background-size: 100%;
  object-fit: cover;
  background-position: center;
  position: relative;
  @media screen and (max-width: 768px) {
    height: 300px;
    margin: 10px;
    width: 96vw;
  }
`;
