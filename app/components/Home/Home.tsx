"use client";
import React from "react";
import styles from "./Home.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import GithubIcon from "@/public/assets/icons/GithubIcon";
import LinkedInIcon from "@/public/assets/icons/LinkedInIcon";
import EmailIcon from "@/public/assets/icons/EmailIcon";

const Home = () => {
  const { chosenProject } = useSelector((state: RootState) => state.projects);
  return (
    <section className={styles.container} id="home">
      <div className={styles.welcome}>
        <div className={styles.name}>
          <h1>ONNI VITIKAINEN</h1>
        </div>
        <div className={styles.info}>
          <h2>FULL STACK DEVELOPER</h2>
          <p>
            Full-stack developer passionate about solving real world problems
            and contributing to impactful solutions.
          </p>
          <div className={styles.contact}>
            <a href="https://github.com/xmk0987" target="blank_">
              <GithubIcon size="35px" color="white" />
            </a>
            <a
              href="https://www.linkedin.com/in/onni-vitikainen-a9a57a16b/"
              target="blank_"
            >
              <LinkedInIcon size="35px" color="white" />
            </a>
            <a href="mailto:vitikainenonni@gmail.com">
              <EmailIcon size="35px" color="white" />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${styles.divider} ${
          chosenProject === "todoGroups" ? styles.todoGroups : null
        } ${chosenProject === "fastspots" ? styles.fastspots : null} ${
          chosenProject === "getDrunk" ? styles.getDrunk : null
        }`}
      ></div>
    </section>
  );
};

export default Home;
