import React from "react";

interface IconProps {
  size?: string;
  color?: string;
}

const BackIcon: React.FC<IconProps> = ({ size = "24px", color = "white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 -960 960 960"
      width={size}
      fill={color}
    >
      <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
    </svg>
  );
};

export default BackIcon;
