import React, { useState } from "react";
import styles from "./About.module.css";
import Work from "./content/Work/Work";
import Education from "./content/Education/Education";
import Hobbies from "./content/Hobbies/Hobbies";
import BackIcon from "@/public/assets/icons/BackIcon";
import NextIcon from "@/public/assets/icons/NextIcon";

const About = () => {
  const sections = ["work", "education", "hobbies"];
  const [activeSection, setActiveSection] = useState("work");

  const getNextSection = () => {
    const currentIndex = sections.indexOf(activeSection);
    return sections[(currentIndex + 1) % sections.length];
  };

  const getPreviousSection = () => {
    const currentIndex = sections.indexOf(activeSection);
    return sections[(currentIndex - 1 + sections.length) % sections.length];
  };

  const handleSectionChange = (direction: "next" | "previous") => {
    if (direction === "next") {
      setActiveSection(getNextSection());
    } else {
      setActiveSection(getPreviousSection());
    }
  };

  return (
    <section className={styles.about} id="about">
      <button
        className={styles.changePage}
        onClick={() => handleSectionChange("previous")}
      >
        <BackIcon />
      </button>
      <button
        className={styles.changePage}
        onClick={() => handleSectionChange("next")}
      >
        <NextIcon />
      </button>

      {activeSection === "work" && <Work />}
      {activeSection === "education" && <Education />}
      {activeSection === "hobbies" && <Hobbies />}
    </section>
  );
};

export default About;
