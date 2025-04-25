"use client";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects/Projects";
import styles from "./EPortfolio.module.css";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function EPortfolio() {
  return (
    <>
      <Provider store={store}>
        <div className={styles.container}>
          <Navbar />
          <main>
            <Home />
            <Projects />
          </main>
        </div>
      </Provider>
    </>
  );
}
