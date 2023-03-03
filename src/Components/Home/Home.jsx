import React from "react";
import Slides from "../Slides/Slides";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.home} id="Home">
      {/* <h2>aca va el home</h2> */}
      <div className={styles.home2}>
        <Slides></Slides>
      </div>
    </div>
  );
};

export default Home;
