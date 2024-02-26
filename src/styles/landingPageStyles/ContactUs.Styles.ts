import styled from "styled-components";

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
export const ImgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99%;
  @media (max-width: 370px) {
    height: 98%;
  }

  @media (min-width: 820px) {
    height: 100%;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const SectionWrapper = styled(FlexWrapper)`
  width: 100vw;
  align-items: stretch;

  @media (max-width: 768px) {
    width:100vw;
    flex-direction: row;
  }
`;
export const Title = styled.h1`
  color: ${(props: any) => props.theme.colors.$secondary};
  font-size: clamp(1.4rem, calc(1.4rem + ((1vw - 0.1375rem) * 0.5714)), 2rem);
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.0175rem;
`;
export const SubTitle = styled.h2``;
export const Paragraph = styled.p`
  color: #70778b;
  font-family: ${(props) => props.theme.fontFace.fonts.secondaryfont};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.78rem;
  letter-spacing: 0.0175rem;
`;
export const Span = styled.span``;
export const Anchor = styled.a``;

export const TextBreak = styled.br`
  display: block;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Heading = styled.h1`
  color: #fff;
  text-align: center;
  font-size: clamp(
    1.125rem,
    calc(1.125rem + ((1vw - 0.175rem) * 3.6207)),
    3.75rem
  );
  font-weight: 700;
  font-family: ${(props) => props.theme.fontFace.fonts.secondaryfont};
  line-height: normal;
`;

export const CParagraph = styled(Paragraph)`
  color: #fff;
  font-family: ${(props) => props.theme.fontFace.fonts.secondaryfont};
  text-align: center;
  font-size: clamp(1rem, calc(1rem + ((1vw - 0.175rem) * 0.6897)), 1.5rem);
  line-height: normal;
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

export const WButton = styled(Button)`
  color: #bc9364;
  background-color: #fff;
  font-family: ${(props) => props.theme.fontFace.fonts.secondaryfont};
  margin-top: 1rem;
`;

export const ContactContent = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem 0 10rem;
  background-color: #bc9364;


  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 1.5rem;
  }
`;

