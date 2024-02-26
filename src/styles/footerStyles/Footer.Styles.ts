import styled from "styled-components";
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  min-width: 6rem;
  padding: 1rem;
  background-color: #bc9364;
  border-radius: 50px;
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  border: none;
`;
export const FWrapper = styled(Wrapper)`
  background-color: #1a3f34;
`;

export const FooterContainer = styled.div`
  width: 100vw;
  width: 80%;
  padding-top: clamp(2.5rem, calc(2.5rem + ((1vw - 0.175rem) * 3.4483)), 5rem);
`;

export const FooterTopContainer = styled(FlexWrapper)`
  justify-content: space-between;
  padding-bottom: clamp(5rem, calc(5rem + ((1vw - 0.175rem) * 6.8966)), 10rem);
  align-items: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const FJoinContainer = styled.form`
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

export const FooterLinksContainer = styled(FlexWrapper)`
  gap: clamp(1rem, calc(1rem + ((1vw - 0.175rem) * 8.2759)), 7rem);
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: row;
    /* flex-wrap: wrap; 
   justify-content: space-between; */
    gap:50px;
    align-items: flex-start;
    width: 100%;
  }
`;

export const FooterLinksHeading = styled.h3`
  color: #e7e7ed;
  font-size: clamp(1rem, calc(1rem + ((1vw - 0.1375rem) * 0.1905)), 1.2rem);
  font-weight: 500;
  line-height: 1.225rem;
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  @media (max-width: 539px) {
    text-align: left;
  }
`;

export const FooterLinks = styled.ul`
  margin-top: clamp(1rem, calc(1rem + ((1vw - 0.175rem) * 0.6897)), 1.5rem);
  list-style: none;
  color: #9ea6ba;
  font-size: 0.9rem;
  font-weight: 400;

  a {
    font-family: ${(props) => props.theme.fontFace.fonts.secondaryfont};
    text-decoration: none;
    position: relative;
    overflow: hidden;
    margin-top: 10px;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 1px;
      background-color: #bc9364;
      transition: width 0.3s ease-in-out;
    }

    &:hover {
      &::before {
        width: 100%;
      }
    }
  }

  @media (max-width: 539px) {
    text-align: start;
    margin-top: clamp(1rem, calc(1rem + ((1vw - 0.175rem) * 0.6897)), 1.5rem);
  }
`;

export const FooterLink = styled.li`
  a {
    color: #9ea6ba;
    text-decoration: none;
    font-size: 16px;
  }
`;

export const JoinParagraph = styled(FooterLinksHeading)`
  color: #9ea6ba;
  font-family: ${(props) => props.theme.fontFace.fonts.secondaryfont};

  font-weight: 400;
  margin-top: 1rem;
`;

export const SubscribeContainer = styled(FlexWrapper)`
  background-color: #fff;
  padding: 0.3rem;
  justify-content: space-between;
  gap: 0.5rem;
  border-radius: 0.1875rem;
  border: 1px solid #e7e7ed;
  margin-top: 1rem;
`;

export const CheckboxLabel = styled.label`
  color: #9ea6ba;
  font-family: ${(props) => props.theme.fontFace.fonts.secondaryfont};

  font-size: 0.8125rem;
  font-weight: 400;
  user-select: none;

  span {
    color: #bc9364;
  }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  cursor: pointer;
  width: 1.375rem;
  height: 1.375rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.1875rem;
  background-color: transparent;

  &:hover {
    border-color: #bc9364;
  }

  &:checked {
    background-color: #bc9364;
    border-color: transparent;
  }
`;

export const SubmitButton = styled(Button)`
  border-radius: 0.1875rem;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 0.75rem 0.5rem;
  width: 100%;
  border: none;
  font-size: 0.875rem;
  font-weight: 400;

  &:focus {
    outline: none;
  }
`;
export const FooterBottomContainer = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding: 2% 0;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`;
export const CopyrightContainer = styled.div`
  min-width: 40%;
  color: #9ea6ba;
  font-family: ${(props) => props.theme.fontFace.fonts.secondaryfont};

  font-size: 0.8125rem;
  font-weight: 400;
  width: max-content;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const FooterIcon = styled.div`
  svg {
    fill: #bc9364;
    width: 30px;
    height: 30px;
  }
  &:hover svg {
    fill: #000;
    cursor: pointer;
  }
`;

export const ImgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99%;
  background: #ab8253;
  opacity: 0.7;
  mix-blend-mode: multiply;

  @media (max-width: 370px) {
    height: 98%;
  }

  @media (min-width: 820px) {
    height: 100%;
  }
`;

export const ContactContent = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem 0 10rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 1.5rem;
  }
`;
export const SectionWrapper = styled(FlexWrapper)`
  width: 100vw;
  background-color: #bc9364;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactImg = styled.div`
  position: relative;
  width: 65%;
  height: calc(100%-5px);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: sepia(0.4) grayscale(0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
