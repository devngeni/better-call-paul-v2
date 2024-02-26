import styled, { css, keyframes } from "styled-components";
import callerIconSrc from "../../../public/Phone.svg";
import Image from "next/image";

const dotKeyframes = keyframes`
  0%, 100% { opacity: 0; transform: scale(0); }
  25% { opacity: 1; transform: scale(1); }
  75% { opacity: 1; transform: scale(1); }
  90% { opacity: 0; transform: scale(0); }
`;

const vibrate = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;
const pulse = keyframes`
  0% { box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2); }
  100% { box-shadow: 0 0 0 15px rgba(0, 0, 0, 0); }
`;

const SplashBody = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SplashWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Logo = styled(Image)`
  width: 287px;
  height: auto;
`;

const fadeAndSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #143f34;
`;

const SplashTitle = styled.h1`
  font-family: ${(props) => props.theme.fontFace.fonts.primaryfont};
  font-weight: ${(props) => props.theme.fontFace.fontWeight.semiBold};
  font-size: 36px;
  color: #fff;
`;

const SubTitle = styled.h2`
  font-family: ${(props) => props.theme.fontFace.fonts.primaryfont};
  font-weight: ${(props) => props.theme.fontFace.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontFace.fontSize.large};
  color: #fff;
`;

const Dot = styled.span`
  display: inline-block;
  animation: ${dotKeyframes} 3s infinite;
`;

const SwipableContainer = styled.div`
  position: relative;
  width: 269px;
  height: 50px;
  background-color: #fff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 30px;
  padding: 7px 42px 7px 11px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: ${fadeAndSlideIn} 0.5s ease-out, ${pulse} 1.5s infinite;
`;

const CallIcon = styled.div<{ $isDragging: boolean }>`
  width: 36px;
  height: 36px;
  background-image: url(${callerIconSrc.src});
  background-size: 24px 24px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: grab;
  transition: transform 0.2s ease-out;
  background-color: #143f34;
  border-radius: 50%;
  padding: 10px;
  animation: ${({ $isDragging }) =>
    $isDragging
      ? "none"
      : css`
          ${vibrate} 0.8s infinite
        `};
`;

const SwipeInstruction = styled.p`
  font-family: ${(props) => props.theme.fontFace.fonts.primaryfont};
  font-weight: ${(props) => props.theme.fontFace.fontWeight.semiBold};
  animation: ${fadeAndSlideIn} 1s ease-out;
`;

export {
  SplashContainer,
  SwipableContainer,
  CallIcon,
  SwipeInstruction,
  SplashTitle,
  Logo,
  SubTitle,
  SplashWrapper,
  SplashBody,
  Dot,
};
