import React from "react";
import styled from "styled-components";

interface ButtonProps {
  background?: string;
  $hoverColor?: string;
  $hoverBackground?: string;
  children: React.ReactNode;
  borderColor?: string;
  color?: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  borderRadius?: string;
  padding?: string;
}

const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius || "5px"};
  background: ${(props) => props.background || "#1A3F34"};
  color: ${(props) => props.color || "#fff"};
  padding: ${(props) => props.padding || "0.5rem"};
  font-family: ${(props) => props.theme.fontFace.fonts.primaryfont};
  border: none;
  outline: none;
  font-size: 1.0625rem;
  font-weight: 600;
`;

const Button: React.FC<ButtonProps> = ({
  children,
  width,
  height,
  borderRadius,
  background,
  color,
  onClick,
  padding,
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      borderRadius={borderRadius}
      background={background}
      color={color}
      onClick={onClick}
      padding={padding}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
