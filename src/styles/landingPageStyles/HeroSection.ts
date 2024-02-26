import styled from "styled-components";

export const HeroContainer = styled.div`
  @media screen and (max-width: 599px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2% 0 5% 0;
    gap: 11.5px;
  }
`;
export const HeroBody = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 800px) {
    gap: 50px;
  }
`;
export const HeroWrapper = styled.div`
  @media screen and (max-width: 599px) {
    width: 95%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
  }
`;

export const TContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const HeroTitle = styled.div`
  color: #252c41;
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  font-size: 14px;
  font-style: normal;
  font-weight: ${(props) => props.theme.fontFace.fontWeight.bold};
  line-height: 44.8px;
  letter-spacing: 0.28px;
  @media screen and (min-width: 800px) {
    color: #ffffff;
    font-size: 7.5rem;
    font-family: ${(props) => props.theme.fontFace.fonts.primaryfont};
    line-height: 4.5rem;
    font-weight: 600;
  }
`;

export const HeroDescription = styled.div`
  color: #70778b;
  font-family: ${(props) => props.theme.fontFace.fonts.secondaryfont};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 15.48px;
  letter-spacing: 0.28px;
  padding: 2% 0;
  width: 90%;
  @media screen and (min-width: 800px) {
    color: #fff;
    font-size: 2.5rem;
    font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
    line-height: 2.5rem;
  }
`;

export const HeroImage = styled.div`
  width: 33px;
  height: 62px;
  flex-shrink: 0;
  background-image: url("/Paul.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const AdsContainer = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
`;

export const AdsImage = styled.div`
  display: flex;
  width: 324px;
  height: 114.8px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;
  background: url("/Ads.svg"), lightgray 50% / cover no-repeat;
  background-position: center;
  border-radius: 20px;
  overflow:hidden;
`;

export const STitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;
