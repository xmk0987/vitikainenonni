import React from "react";
import styles from "./Slider.module.css";

interface SliderProps {
  items: string[];
  color?: string;
  bg: string;
}

const Slider: React.FC<SliderProps> = ({ items, color = "black", bg }) => {
  if (!items) return null;

  const sliderStyles: React.CSSProperties = {
    "--width": "120px",
    "--height": "40px",
    "--quantity": items.length.toString(),
    "--bg": bg,
    "--color": color,
  } as React.CSSProperties;

  // Duplicate the items to make the scroll seem infinite
  const duplicatedItems = [...items, ...items]; // Duplicate the items

  return (
    <div className={styles.slider} style={sliderStyles}>
      <div className={styles.list}>
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            style={
              {
                color: color,
                backgroundColor: bg,
              } as React.CSSProperties
            }
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
