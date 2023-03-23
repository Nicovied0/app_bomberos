import React from "react";
import styles from "./Footer.module.css";

import logo from "../../Assets/Logo.svg";

const Footer = () => {
  return (
    <div className={styles.div}>
      <div className={styles.div2}>
        <a
          href="https://www.facebook.com/bomberosvoluntarios.stacatalinaholmberg"
          target="_blank"
          rel="noreferrer"
          id="iconoNav2"
        >
          <i className="iconoNav" class="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.instagram.com/bomberosvoluntariosstacatalina/?hl=es-la"
          target="_blank"
          rel="noreferrer"
          id="iconoNav2"
        >
          <i
            className="iconoNav"
            class="fa fa-instagram"
            aria-hidden="true"
          ></i>
        </a>
      </div>
      <div>
        <img alt="Logo_Nav" className={styles.Img_logo} src={logo}></img>
      </div>
      <div>
        <p>
          Diseño realizado por
          <a href="https://ondev.vercel.app" target="_blank" rel="noreferrer">
            ONDev
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
