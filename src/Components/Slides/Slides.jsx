import styles from "./Slides.module.css";
import img from "../../Assets/CARTEL.png";
import img1 from "../../Assets/CARTEL2.jpg";
import img2 from "../../Assets/CARTEL3.jpg";

import React from "react";

const Slides = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img} alt="First slide" className={styles.img}/>
            <h2 className={styles.h2}>foto 1</h2>
          </div>
          <div class="carousel-item">
            <img src={img1} alt="Second slide" className={styles.img}/>
            <h2 className={styles.h2}>foto 2</h2>
          </div>
          <div class="carousel-item">
            <img src={img2} alt="Third slide" className={styles.img}/>
            <h2 className={styles.h2}>foto 3</h2>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Slides;
