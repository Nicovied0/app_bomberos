import React from "react";
import logo from "../../Assets/Logo.svg";

import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.Div_Contonador} id="Nav">
      <ul className={styles.ul}>
        <a href="/">
          <li className={styles.li}>
            <img alt="Logo_Nav" className={styles.Img_logo} src={logo}></img>
          </li>
        </a>
        <a href="#Home">
          <li className={styles.li}>Inicio</li>
        </a>
        <a href="#Noticias">
          <li className={styles.li}>Noticias</li>
        </a>
        <a href="#Historias">
          <li className={styles.li}>Historia</li>
        </a>
        <a href="#Contacto">
          <li className={styles.li}>Contacto</li>
        </a>
        <div className={styles.div2}>
          <a
            href="https://www.facebook.com/bomberosvoluntarios.stacatalinaholmberg"
            target="_blank"
            rel="noreferrer"
            className="iconoNav"
          >
            <li   className="iconoNav">
              <i   className="iconoNav" class="fa fa-facebook" aria-hidden="true"></i>
            </li>
          </a>
          <a
            href="https://www.instagram.com/bomberosvoluntariosstacatalina/?hl=es-la"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <i className="iconoNav" class="fa fa-instagram" aria-hidden="true"></i>
            </li>
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
