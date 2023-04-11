import React from "react";
import styles from "./Galeria.module.css";

const Galeria = () => {
  return (
    <div>
      <h2 className={styles.titulo}>Galeria Fotografica</h2>
      <hr></hr>
      <p>
        Aqui puedes visualizar algunas fotografías de nuestro trabajo,
        prácticas, eventos y demás. No te olvides de visitar nuestras redes
        sociales, tales como Facebook o también Instagram donde encontrarás más
        contenido.
      </p>
      <div>imagenes</div>
    </div>
  );
};

export default Galeria;
