import styled from "styled-components";

export const SContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 599px) {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fafafa;
    padding: 3% 0;
  }
`;

export const SWrapper = styled.div`
  width: 90%;
  height: 492px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6px;
  @media screen and (min-width: 800px) {
    width: 80%;
  }
`;

export const CardBody = styled.div`
  width: calc(33.333% - 12px);
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  @media screen and (min-width: 800px) {
    width: calc(18.333% - 72px);
  }
`;

export const CardCircle = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #fafafa;
  box-shadow: rgba(6, 22, 33, 0.13) 0px 4px 7px,
    rgba(0, 30, 43, 0.12) 0px 13px 22px;
  cursor: pointer;
  @media screen and (min-width: 800px) {
    max-width: 7.8125rem;
    max-height: 7.8125rem;
    width: 7.8125rem;
    height: 7.8125rem;
    background: #f1bc7e;
    img {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;

export const SCard = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  background-image: url("/icon.svg");
  background-size: center;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CardText = styled.div`
  color: #000;
  text-align: center;
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  width: 70%;
  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;
