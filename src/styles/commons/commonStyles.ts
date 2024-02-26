import styled from "styled-components";

export const CommonContainerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 10%;
`;

export const ProductDetailsContainer = styled(CommonContainerDiv)`
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
  padding-bottom: 0;
  background: #fafafa;
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  padding: 3% 5%;
`;
export const CardTitle = styled.h3`
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
  color: #1a3f34;
  text-align: center;
  font-size: calc(1.2rem + ((1vw - 0.225rem) * 1.128));
  font-style: normal;
  font-weight: 500;
  line-height: 1rem;
  padding: 1rem 0;
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  padding: 5% 0%;
  width: 95vw;
  @media screen and (min-width: 768px) {
    width: calc(23% + -18px);
    display: flex;
    flex-direction: column;
    margin: 30px auto;
    padding: 2%;
    transition: all 0.3s ease;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 2% 0%;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`;

export const CardImage = styled.div`
  height: 100%;
  img {
    mix-blend-mode: multiply;
  }

  @media screen and (min-width: 768px) {
    height: 150px;
    background: rgb(246, 246, 246);
    width: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: 150px;
      border-radius: 12px;
      object-fit: fill;
      aspect-ratio: 3/2;
      object-position: center;
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 10px;
`;

export const CardNavigation = styled.div`
  background: #eeeeee;
  border-radius: 50%;
  width: 35px;
  height: 35px;
`;

export const CartContainer = styled.div`
  width: 100%;
`;

export const CartWrapper = styled(CardContainer)`
  padding: 5% 4% 2% 4%;
`;
export const CartContent = styled(CardContent)`
  gap: 25px;
`;

export const CardRating = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartCheckoutContent = styled(CartContent)`
  display: flex;
`;
export const CartLine = styled.div`
  padding: 0 2%;
`;

export const CartCheckoutWrapper = styled(CartWrapper)`
  grid-template-columns: 120px 2fr 1fr;
  cursor: pointer;
`;

export const DeleteContainer = styled(CartContent)`
  align-items: flex-end;
`;

export const CartQuantity = styled(CartCheckoutContent)`
  flex-direction: row;
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  padding: 10% 0%;
  gap: 20px;
`;

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  gap: 10px;
`;

export const DayContainer = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  width: 100%;
  background: #fafafa;
`;

export const DayContent = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;
export const FaqContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FaqWrapper = styled(FaqContainer)`
  width: 95%;
  padding: 3% 0;
  @media screen and (min-width: 768px) {
    width: 60%;
    padding: 1.4% 0;
  }
`;

export const FaqHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  padding: 1% 0%;
  align-items: center;
  text-transform: capitalize;
`;

export const FaqData = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const FaqContent = styled(FaqHeader)`
  justify-content: center;
  padding: 0 4% 4% 4%;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const QuizHeader = styled.div`
  padding: 1% 4%;
`;
export const FaqQuestion = styled.div`
  font-size: calc(0.75rem + ((1vw - 0.225rem) * 0.5641));
  padding-top: 2%;
  font-weight: 600;
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  text-transform: capitalize;
`;

export const Faqs = styled.div`
  text-transform: capitalize;
  font-size: calc(1rem + ((1vw - 0.225rem) * 1.0256));
  font-weight: 600;
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
`;

export const FaqAnswer = styled(FaqQuestion)`
  font-weight: 400;
  width: 100%;
  p {
    width: 80%;
    font-size: calc(0.75rem + ((1vw - 0.225rem) * 0.2564));
    font-weight: 400;
    font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  }
  @media screen and (max-width: 768px) {
    p {
      width: 100%;
    }
  }
`;

export const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DetailWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  padding: 4px 0;
  width: 90%;
`;

export const DetailImage = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding-top: 2%;
  gap: 0.375rem;
`;

export const DetailContent = styled(DetailWrapper)`
  gap: 6px;
  flex-direction: column;
`;

export const BookContainer = styled.div`
  display: flex;
  width: 100vw;
  padding: 7%;
`;

export const BookWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const BookBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: auto;
`;
export const BookPrice = styled.div`
  color: #000;
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
`;
export const BookContent = styled(BookPrice)`
  font-size: 0.75rem;
  font-weight: 400;
`;
export const BookInfo = styled.div`
  display: none;
`;
export const BookButton = styled(BookPrice)`
  border-radius: 100em;
  background: #1a3f34;
  display: flex;
  width: auto;
  padding: 1.5rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background: #fff;
    border: 1px solid #1a3f34;
    color: #1a3f34;
  }
  margin-left: 1.9rem;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    padding: 1rem 1.5rem;
    margin-left: 0;
  }
`;
export const CheckoutTotalContainer = styled(CommonContainerDiv)`
  position: relative;
  background: #fff;
  gap: 4rem;
  padding: 1rem;
`;

export const CheckoutTotalDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CTContent = styled.p`
  font-size: 1.0625rem;
  font-weight: 600;
  font-family: ${(props) => props.theme.fontFace.fonts.primaryfont};
`;

export const PricingContainer = styled(CheckoutTotalDetails)`
  padding: 1.5rem 1rem;
  align-items: center;
`;

export const PricingContentContainer = styled(CommonContainerDiv)`
  gap: 0.75rem;
  align-items: flex-start;
  padding: 0;
`;

export const Price = styled(CTContent)`
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
`;

export const PriceDesc = styled(Price)`
  font-weight: 400;
  font-size: 0.75rem;
`;

export const HotelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  // min-height: 100vh;
  padding: 1rem 0;
  @media screen and (min-width: 768px) {
    flex-direction: unset;
    align-items: baseline;
    flex-wrap: wrap;
    padding: 5% 0;
  }
`;

export const HotelWrapper = styled.div<{ itemCount: number }>`
  position: relative;
  display: flex;
  width: ${(props) => (props.itemCount === 1 ? "40%" : "calc(33% - 30px)")};
  height: 100%;
  flex-direction: column;
  gap: 2rem;
  border-radius: 0.625rem;
  padding: 5%;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    width: ${(props) => (props.itemCount === 1 ? "90%" : "calc(50% - 10px)")};
  }
`;

export const HotelContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  @media screen and (min-width: 768px) {
    gap: 0.5rem;
    padding: 1rem 2rem;
  }
`;

export const HotelTitle = styled.h3`
  margin: 0;
  color: #000;
  font-size: calc(1.2rem + ((1vw - 3.6px) * 0.4128));
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.28px;
  font-family: ${(props) => props.theme.fontFace.fonts.bcpFont};
`;

export const HotelDesc = styled(HotelTitle)`
  margin: 0;
  color: #333;
  font-size: calc(0.875rem + ((1vw - 3.6px) * 0.1564));
  font-weight: 400;
  font-style: normal;
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
`;
export const HotelBtn = styled.div`
  display: flex;
`;

export const HotelBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CommonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3% 0;
  margin: 3% 0;
`;

export const CommonWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ShopCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ShopCartContent = styled.div`
  width: 90%;
  display: flex;
`;