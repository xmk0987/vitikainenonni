import React from "react";

interface IconProps {
  size?: string;
  color?: string;
}

const NextIcon: React.FC<IconProps> = ({ size = "24px", color = "white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 -960 960 960"
      width={size}
      fill={color}
    >
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
    </svg>
  );
};

export default NextIcon;
