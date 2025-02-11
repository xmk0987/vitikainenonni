"use client";

import React from "react";
import styles from "./Projects.module.css";
import Slider from "../../Slider/Slider";
import { useSelector, useDispatch } from "react-redux";
import { changeChosenImage, setChosenProject } from "@/redux/projectsSlice";

import BackIcon from "@/public/assets/icons/BackIcon";
import NextIcon from "@/public/assets/icons/NextIcon";
import GithubIcon from "@/public/assets/icons/GithubIcon";
import { RootState } from "@/redux/store";
import duck from "@/public/assets/images/duck.png";
import capy from "@/public/assets/images/capy.png";

type SliderStylesType = {
  [key: string]: {
    bg: string;
    color: string;
  };
};

const sliderStyles: SliderStylesType = {
  todoGroups: {
    bg: "var(--accent)",
    color: "white",
  },
  moneySpendTracker: {
    bg: "white",
    color: "black",
  },
  getDrunk: {
    bg: "var(--getDrunk-accent-yellow)",
    color: "var(--getDrunk-accent-blue)",
  },
  fastspots: {
    bg: "black",
    color: "white",
  },
};

const Projects = () => {
  const dispatch = useDispatch();

  const { projects, chosenProject, chosenImage } = useSelector(
    (state: RootState) => state.projects
  );

  const projectKeys = Object.keys(projects);

  // Calculate previous and next project keys
  const currentIndex = projectKeys.indexOf(chosenProject);
  const prevIndex =
    (currentIndex - 1 + projectKeys.length) % projectKeys.length;
  const nextIndex = (currentIndex + 1) % projectKeys.length;

  const handleProjectChange = (newIndex: number) => {
    dispatch(setChosenProject(projectKeys[newIndex]));
  };

  const changeImage = (value: "next" | "previous") => {
    dispatch(changeChosenImage(value));
  };

  return (
    <section className={styles.projects} id="projects">
      <div
        className={`${styles.project} ${
          chosenProject === "todoGroups" ? styles.todoGroups : null
        } ${chosenProject === "fastspots" ? styles.fastspots : null} ${
          chosenProject === "getDrunk" ? styles.getDrunk : null
        } ${
          chosenProject === "moneySpendTracker"
            ? styles.moneySpendTracker
            : null
        }`}
      >
        <button
          className={styles.changeProject}
          onClick={() => handleProjectChange(prevIndex)}
        >
          {projects[projectKeys[prevIndex]].name}
        </button>
        <button
          className={styles.changeProject}
          onClick={() => handleProjectChange(nextIndex)}
        >
          {projects[projectKeys[nextIndex]].name}
        </button>
        <div className={styles.mainContent}>
          <div className={styles.mainContentHeader}>
            <h1>{projects[chosenProject].name}</h1>
            <a href={projects[chosenProject].url} target="blank_">
              Try it out!
            </a>
          </div>
          <div className={styles.mainContentImage}>
            <button onClick={() => changeImage("previous")}>
              <BackIcon
                color={
                  !["fastspots", "moneySpendTracker"].includes(chosenProject)
                    ? "black"
                    : "white"
                }
              />
            </button>
            <img src={chosenImage} alt={projects[chosenProject].name} />
            <button onClick={() => changeImage("next")}>
              <NextIcon
                color={
                  !["fastspots", "moneySpendTracker"].includes(chosenProject)
                    ? "black"
                    : "white"
                }
              />
            </button>
          </div>
          <div className={styles.projectInfo}>
            <p>{projects[chosenProject].description}</p>
          </div>
        </div>
        <Slider
          items={projects[chosenProject].technologies}
          bg={sliderStyles[chosenProject].bg}
          color={sliderStyles[chosenProject].color}
        />
      </div>

      {chosenProject === "todoGroups" && (
        <>
          <img className={styles.todoGroupsArt} src={duck.src} alt="Duck" />
          <img className={styles.todoGroupsArt} src={capy.src} alt="Capybara" />
        </>
      )}
      <a
        className={`${styles.otherProjects} tooltip`}
        href="https://github.com/xmk0987"
        target="blank_"
      >
        <GithubIcon color="black" size="40px" />
        <span className="tooltiptext">Check out my projects.</span>
      </a>
    </section>
  );
};

export default Projects;
