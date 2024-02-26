import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import React, { ReactNode } from "react";

interface BackgroundProps {
  src: StaticImageData;
  alt: string;
  children?: ReactNode;
  additionalStyle?: React.CSSProperties;
}

const BackgroundWrapper = styled.div<{ additionalStyle?: React.CSSProperties }>`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  z-index: 2;
  ${(props) => props.additionalStyle && { ...props.additionalStyle }};
`;

const Background: React.FC<BackgroundProps> = ({
  src,
  alt,
  children,
  additionalStyle,
}) => {
  return (
    <BackgroundWrapper style={additionalStyle}>
      <Image
        alt={alt}
        src={src}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />
      {children}
    </BackgroundWrapper>
  );
};

export default Background;
