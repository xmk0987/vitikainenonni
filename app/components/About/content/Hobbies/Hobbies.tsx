import React from "react";
import styles from "../../About.module.css";

const Hobbies = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.mainContentHeader}>
        <h1>IN MY FREE TIME</h1>
        <p>
          I stay active in my free time with a variety of sports. I'm currently
          training for my first marathon, set for next May at the Helsinki
          Marathon. I also enjoy Muay Thai, calisthenics, and hitting the gym
          regularly. Every now and then, I play ball games with friends to keep
          things fun and social.
        </p>
        <p>
          Music is another passion of mine—I’m learning to play both the guitar
          and piano, and it’s been a rewarding challenge.
        </p>
        <p>
          When I’m not being active, I’m often diving into books, particularly
          those on psychology and history. I also dedicate a large portion of my
          free time to coding projects, constantly pushing myself to learn more
          complex topics. And of course, I always make time to catch up with
          friends.
        </p>
      </div>
    </div>
  );
};

export default Hobbies;
