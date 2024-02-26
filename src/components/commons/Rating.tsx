import React, { useState } from "react";
import styled, { css } from "styled-components";
import { StarIcon } from "../../../public/Icons";

interface RatingProps {
  name: string;
  value: number | null;
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (event: React.MouseEvent, newValue: number | null) => void;
}

interface StarProps {
  $filled: boolean;
  readOnly?: boolean;
  disabled?: boolean;
}

const cursorStyle = css<RatingProps>`
  cursor: ${({ readOnly, disabled }) =>
    readOnly || disabled ? "not-allowed" : "pointer"};
`;

const colorStyle = css<StarProps>`
  color: ${({ $filled, readOnly, disabled }) =>
    readOnly || disabled ? "transparent" : $filled ? "#1A3F34" : "transparent"};
`;

const StyledRatingWrapper = styled.div<RatingProps>`
  display: inline-flex;
  align-items: center;
  ${cursorStyle};
`;

interface StarProps {
  fill?: string;
}

const Star = styled.span<StarProps>`
  ${colorStyle};
  margin-right: 4px;
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Rating: React.FC<RatingProps> = ({
  name,
  value,
  readOnly = false,
  disabled = false,
  onChange,
}) => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const handleClick = (event: React.MouseEvent, newValue: number) => {
    if (readOnly || disabled || !onChange) return;
    onChange(event, newValue);
  };

  const handleMouseEnter = (newValue: number) => {
    if (readOnly || disabled) return;
    setHoveredValue(newValue);
  };

  const handleMouseLeave = () => {
    if (readOnly || disabled) return;
    setHoveredValue(null);
  };

  const stars = Array.from({ length: 5 }, (_, index) => {
    const ratingValue = index + 1;
    const filled = (hoveredValue || value || 0) >= ratingValue;
    return (
      <Star
        key={`${name}-${ratingValue}`}
        $filled={filled}
        readOnly={readOnly}
        disabled={disabled}
        onClick={(event) => handleClick(event, ratingValue)}
        onMouseEnter={() => handleMouseEnter(ratingValue)}
        onMouseLeave={handleMouseLeave}
      >
        <StarIcon
          fill={filled ? "#1A3F34" : readOnly || disabled ? "transparent" : "transparent"}
        />
      </Star>
    );
  });

  return (
    <StyledRatingWrapper
      name={name}
      value={value}
      readOnly={readOnly}
      disabled={disabled}
    >
      {stars}
    </StyledRatingWrapper>
  );
};

export default Rating;
