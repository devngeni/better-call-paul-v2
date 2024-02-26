import React, {
  useState,
  useRef,
  useEffect,
  TouchEvent,
  DragEvent,
} from "react";
import { useRouter } from "next/router";
import {
  CallIcon,
  Dot,
  Logo,
  SplashBody,
  SplashContainer,
  SplashTitle,
  SplashWrapper,
  SubTitle,
  SwipableContainer,
  SwipeInstruction,
} from "@/styles/landingPageStyles";
import logo from "../../../public/logo.svg";
const SplashScreen = () => {
  const router = useRouter();
  const [startX, setStartX] = useState<number | null>(null);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const swipableContainerRef = useRef<HTMLDivElement>(null);
  const callIconRef = useRef<HTMLDivElement>(null);

  const handleStart = (clientX: number): void => {
    setStartX(clientX);
    setIsDragging(true);
  };

  const handleMove = (clientX: number): void => {
    if (
      startX !== null &&
      isDragging &&
      swipableContainerRef.current &&
      callIconRef.current
    ) {
      const deltaX = clientX - startX;
      const newOffsetX = Math.max(
        0,
        Math.min(
          deltaX,
          swipableContainerRef.current.offsetWidth -
            callIconRef.current.offsetWidth
        )
      );
      setOffsetX(newOffsetX);
    }
  };

  const handleEnd = (): void => {
    if (swipableContainerRef.current) {
      const threshold = swipableContainerRef.current.offsetWidth / 2;
      setIsDragging(false);
      if (offsetX >= threshold) {
        router.push("/home");
      } else {
        setOffsetX(0);
      }
    }
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>): void =>
    handleStart(e.touches[0].clientX);
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>): void =>
    handleMove(e.touches[0].clientX);
  const handleDragStart = (e: DragEvent<HTMLDivElement>): void =>
    handleStart(e.clientX);
  const handleDragMove = (e: DragEvent<HTMLDivElement>): void =>
    handleMove(e.clientX);

 

  return (
    <SplashContainer>
      <SplashBody>
        <SplashWrapper>
          <Logo src={logo} alt="logo icon" priority/>
          <SplashTitle>Better Call Paul</SplashTitle>
          <SubTitle>
            Ringing &nbsp;
            <Dot style={{ animationDelay: "0s" }}>.</Dot>
            <Dot style={{ animationDelay: "1s" }}>.</Dot>
            <Dot style={{ animationDelay: "2s" }}>.</Dot>
          </SubTitle>
        </SplashWrapper>
        <SwipableContainer
          ref={swipableContainerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleEnd}
          onDragStart={handleDragStart}
          onDrag={handleDragMove}
          onDragEnd={handleEnd}
          draggable
        >
          <CallIcon
            ref={callIconRef}
            style={{ transform: `translateX(${offsetX}px)` }}
            draggable
            $isDragging={isDragging}
          />
          {isDragging ? null : (
            <SwipeInstruction>Swipe to Continue</SwipeInstruction>
          )}
        </SwipableContainer>
      </SplashBody>
    </SplashContainer>
  );
};

export default SplashScreen;
