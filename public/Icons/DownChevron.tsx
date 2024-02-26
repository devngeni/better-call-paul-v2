import React, { useState } from "react";
interface DownChevronProps {
  onClick?: () => void;
  style?: React.CSSProperties;
  $isOpen?: boolean;
}

const DownChevron: React.FC<DownChevronProps> = ({ onClick, $isOpen }) => {
  const [rotated, setRotated] = useState(false);

  const handleClick = () => {
    setRotated(!rotated);
    if (onClick) {
      onClick();
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{
        transform: rotated || $isOpen ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.6s ease-in-out",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <path
        d="M18 9L12 15L6 9"
        stroke="#1A3F34"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownChevron;
