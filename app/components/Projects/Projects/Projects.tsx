"use client";

import React, { useEffect } from "react";
import styles from "./Projects.module.css";
import Slider from "../../Slider/Slider";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { changeChosenImage, setChosenProject } from "@/redux/projectsSlice";
import duck from "@/public/assets/images/duck.png";
import capy from "@/public/assets/images/capy.png";
import BackIcon from "@/public/assets/icons/BackIcon";
import NextIcon from "@/public/assets/icons/NextIcon";
import GithubIcon from "@/public/assets/icons/GithubIcon";

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

  // Accessing the chosenProject and its details from the Redux store
  const { projects, chosenProject, chosenImage } = useSelector(
    (state: any) => state.projects
  );

  const projectKeys = Object.keys(projects);

  useEffect(() => {
    // This useEffect is no longer necessary since chosenImage updates with Redux state
  }, [chosenProject]);

  // Calculate previous and next project keys
  const currentIndex = projectKeys.indexOf(chosenProject);
  const prevIndex =
    (currentIndex - 1 + projectKeys.length) % projectKeys.length; // Get the previous index, wrapping around
  const nextIndex = (currentIndex + 1) % projectKeys.length; // Get the next index, wrapping around

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
            <Image
              src={chosenImage}
              alt={projects[chosenProject].name}
              height={700}
              width={1000}
            />
            <button onClick={() => changeImage("previous")}>
              <BackIcon
                color={chosenProject !== "fastspots" ? "black" : "white"}
              />
            </button>
            <button onClick={() => changeImage("next")}>
              <NextIcon
                color={chosenProject !== "fastspots" ? "black" : "white"}
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
          <Image
            className={styles.todoGroupsArt}
            src={duck}
            alt="Duck"
            layout="responsive"
            height={700}
            width={700}
          />
          <Image
            className={styles.todoGroupsArt}
            src={capy}
            alt="Capybara"
            layout="responsive"
            height={700}
            width={700}
          />
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
