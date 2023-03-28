import React from "react";
import styles from "./ButtonUp.module.css";
import { useLocation } from "react-router-dom";

const ButtonUp = () => {
  let params = useLocation();
  console.log(params.pathname, "soy params");
  if (params.pathname === "/Noticias") {
    return (
      <div className={styles.div}>
        <a className={styles.button} href="#NoticiasInicio">
          Ir al Inicio
        </a>
      </div>
    );
  }
  return (
    <div className={styles.div}>
      <a className={styles.button} href="#Inicio">
        Ir al Inicio
      </a>
    </div>
  );
};

export default ButtonUp;
