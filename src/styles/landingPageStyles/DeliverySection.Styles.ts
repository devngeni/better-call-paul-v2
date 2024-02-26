import styled from "styled-components";

export const DeliverySectionContainer = styled.div`
  position: relative;
  height: 70vh;
  @media screen and (max-width: 768px) {
    height: 15.5625rem;
    background-size: 100% auto;
  }
`;

export const DeliveryBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: flex-end;
  width: 90%;
  padding-bottom: 2%;
  position: relative;
  z-index: 1;
`;

