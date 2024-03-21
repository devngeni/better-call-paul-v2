import styled from "styled-components";

export const DealSectionContainer = styled.section`
  display: flex;
  width: max-content;
  padding: 3% 0;
  margin: 3% 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const DealsWrapper = styled.div`
  width: max-content;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const DealsHeader = styled.div`
  padding: 3% 0%;
  color: #000;
  text-align: center;
  font-family: ${(props) => props.theme.fontFace.fonts.primaryfont};
  font-weight: ${(props) => props.theme.fontFace.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontFace.fontSize.medium};
  font-style: normal;
  line-height: 1rem;
  padding-bottom: 2%;
`;

export const DealsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 80%;
  overflow-y: auto;
  padding: 0 1rem;
  border-radius: 15px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    overflow-x: scroll;
    gap: 1rem;
    padding: 1rem;
    padding-left: 0;
    width: 100vw;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      display: none;
    }

    & > :first-child {
      margin-left: 40rem;
    }
  }
`;

export const ImageContainer = styled.div`
  margin: 5% 0;
  border-radius: 0.6rem;
  border: 0.5px solid rgba(128, 128, 128, 0.35);
  box-shadow: rgba(6, 22, 33, 0.13) 0px 4px 7px,
    rgba(0, 30, 43, 0.12) 0px 13px 22px;
  transition: all 0.3s ease-in-out;
  max-width: 400px;
  img {
    border-radius: 0.5rem 0.5rem 0 0;
    object-fit: cover;
    width: 400px;
    height: 200px;
  }
  &:hover,
  focus {
    border-radius: 1rem;
    cursor: pointer;
    background: #c2e7ff;
    outline: 2px solid #1f1f1f;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  @media screen and (max-width: 768px) {
    min-width: 250px;
    scroll-snap-align: start;

    img {
      border-radius: 0.5rem;
      object-fit: cover;
      width: 100%;
      height: auto;
    }
  }
`;

export const ImageContent = styled.div`
  border: none;
  border-radius: none;
  align-items: flex-start;
  padding: 3% 2%;
`;

export const ImageTitle = styled(DealsHeader)`
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
  text-align: left;
  font-size: 1rem;
`;

export const ImageCost = styled(DealsHeader)`
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  font-style: italic;
  font-size: ${(props) => props.theme.fontFace.fontSize.small};
  font-weight: ${(props) => props.theme.fontFace.fontWeight.regular};
  text-align: left;
`;
