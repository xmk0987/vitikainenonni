"use client";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { chosenProject } = useSelector((state: any) => state.projects);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "projects", "about"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });
    };
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setActiveSection(targetId);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log("Active Section:", activeSection);

  return (
    <nav
      className={`${styles.container} ${
        chosenProject !== "fastspots" && activeSection === "projects"
          ? styles.navbarProjects
          : ""
      }`}
    >
      <div>
        <a href="#home" onClick={(e) => handleScroll(e, "home")}>
          HOME
        </a>
        <span
          className={`${activeSection === "home" ? styles.showSpan : ""}`}
        ></span>
      </div>
      <div>
        <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
          PROJECTS
        </a>
        <span
          className={`${activeSection === "projects" ? styles.showSpan : ""}`}
        ></span>
      </div>
      <div>
        <a href="#about" onClick={(e) => handleScroll(e, "about")}>
          ABOUT
        </a>
        <span
          className={`${activeSection === "about" ? styles.showSpan : ""}`}
        ></span>
      </div>
    </nav>
  );
};

export default Navbar;
