import styled from "styled-components";

export const SpaContainer = styled.div`
  position: relative;
  width: 100%;
  height: 67vh;
  border-radius: 5px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/spa_image.svg"), lightgray 50% / cover no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  opacity: 1;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 1;
    z-index: -1;
  }

  @media screen and (max-width: 768px) {
    height: 60vh;
    border-radius: 0;
    justify-content: center;
    gap: 10px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    align-items: center;
    &::before {
      opacity: 0.5;
      background-color: #1a3f34;
    }
  }
`;
export const SpaWrapper = styled.div`
width:80%;
height:auto;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content: center;
gap: 2.5rem;
`;
export const EnjoyContainer = styled.div`
  width: 80%;
  color: #fff;
font-family: ${(props) => props.theme.fontFace.fonts.secondaryfont};
  font-size: clamp(1.9rem, calc(1.9rem + ((1vw - 0.1375rem) * 1.0476)), 3rem);
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.28px;
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const GuestsContainer = styled.div`
  width: 44%;
  color: #fff;
font-family: ${(props) => props.theme.fontFace.fonts.secondaryfont};
  font-size: clamp(1rem, calc(1rem + ((1vw - 0.1375rem) * 0.4762)), 1.5rem);
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0.28px;
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;
