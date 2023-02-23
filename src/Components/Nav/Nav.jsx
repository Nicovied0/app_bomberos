import React from "react";
import logo from "../../Assets/Logo.svg";

import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.Div_Contonador}>
      <ul className={styles.ul}>
        <Link to="/">
          <li className={styles.li}>
            <img alt="Logo_Nav" className={styles.Img_logo} src={logo}></img>
          </li>
        </Link>
        <Link to="/">
          <li className={styles.li}>Home</li>
        </Link>
        <Link to="/noticias">
          <li className={styles.li}>Noticias</li>
        </Link>
        <Link to="/historias">
          <li className={styles.li}>Historia</li>
        </Link>
        <Link to="/contacto">
          <li className={styles.li}>Contacto</li>
        </Link>
        <div className={styles.div2}>
          <a
            href="https://www.facebook.com/bomberosvoluntarios.stacatalinaholmberg"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </li>
          </a>
          <a
            href="https://www.instagram.com/bomberosvoluntariosstacatalina/?hl=es-la"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </li>
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
