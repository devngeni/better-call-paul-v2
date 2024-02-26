import React, { useState } from "react";
import styled from "styled-components";

interface InputProps {
  placeholder: string;
  type: string;
  value: string;
  width: string;
  height: string;
  borderRadius?: string;
  fontFamily?: string;
  fontSize?: string;
}

const StyledInput = styled.input<InputProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0.625rem 1.5rem;
  border-radius: ${(props) => props.borderRadius || "5px"};
  font-family: ${(props) => props.fontFamily || "inherit"};
  font-size: ${(props) => props.fontSize || "inherit"};
  border: 1px solid #1a3f26;
`;

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  width,
  height,
  borderRadius,
  fontFamily,
  fontSize,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      value={value}
      width={width}
      height={height}
      onChange={handleChange}
      borderRadius={borderRadius}
      fontFamily={fontFamily}
      fontSize={fontSize}
    />
  );
};

export default Input;
