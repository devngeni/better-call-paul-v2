import styled, { keyframes } from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const slideUp = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;
export const CartModal = styled.div`
  background: #eff6f7;
  padding: 2%;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  height: auto;
  z-index: 9999;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 80%;
    border-radius: 20px 20px 0 0;
    animation: ${slideUp} 0.5s ease-out forwards;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #d4d4d6;
`;

export const CartTitle = styled.h2`
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  font-weight: 600;
  font-size: 1.5rem;
  color: #0c3608;
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    font-size: clamp(1rem, 1.5vw, 1.5rem);
    background-color: #0c3608;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.7rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 5px;
  transition: all 0.2s ease;

  &:hover {
    color: red;
    background-color: rgba(255, 0, 0, 0.1);
  }
`;

export const CartContent = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 25px;
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`;

export const CardScroll = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: thin;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  @media screen and (max-width: 768px) {
    height: 455px;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  border: 1px solid #e0e0e0;
  padding: 15px 20px;
  border-radius: 7px;
  width: 100%;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`;

export const ProductImage = styled.div`
  width: 130px;
  height: 130px;
  /* margin-right: 15px; */
  border-radius: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 7vw;
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
  }
`;

export const ProductName = styled.h3`
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  font-weight: 700;
  font-size: 1rem;
  color: #1a3f34;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.span`
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  font-weight: 500;

  font-size: 1rem;
  color: #1a3f34;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;

export const CartBody = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    height: 90%;
  }
`;

export const Button = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #1a3f34;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }
`;

export const Quantity = styled.span`
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  font-weight: 500;
  font-size: 1.2rem;
  color: gray;
`;

export const CartFooter = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.02);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;
export const ButtonCart = styled.button`
background-color: #1a3f34;
color: white;
padding: 10px 20px;
border-radius: 100em;
border: none;
cursor: pointer;
font-family: ${(props) => props.theme.fontFace.fonts.poppins};
transition: all 0.3s ease;
&:hover {
  background-color: #000;
}
`

export const CartButton = styled.div`
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-out;
  svg {
    path {
      fill: #1a3f34;
    }
  }
  &:hover {
    border-radius: 50%;
    background: #1a3f34;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

export const EmptyCartIcon = styled.div`
  font-size: 50px;
  margin-bottom: 20px;
`;
export const OrdersCartIcon = styled.div`
  width: 95px;
  height: 100px;
  margin-bottom: 10px;
`;

export const EmptyCartMessage = styled.div`
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
`;

export const EmptyCartSubMessage = styled.div`
  font-family: ${(props) => props.theme.fontFace.fonts.tertiaryfont};
  font-weight: 400;
  font-size: 18px;
  color: #555;
  text-align: center;
  margin-bottom: 30px;
`;
