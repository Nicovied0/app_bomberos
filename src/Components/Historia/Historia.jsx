import React from "react";
import styles from "./Historia.module.css";

const Historia = () => {
  return (
    <div className={styles.div_contenedor} id="Historias">
      <h2>Nuestra historia</h2>
      <p>
        Hasta el año 1880 en Rosario, los incendios que la asolaron habían sido
        contrarrestados con la decisión y el heroísmo del vecindario, pero a
        medida que crecía el radio urbano se hacía difícil luchar sin los medios
        necesarios, por ello es que un grupo de emprendedores vecinos funda el
        20 de noviembre del año 1880 la "Compañía Primera de Bomberos
        Voluntarios del Rosario", comprando con su peculio los elementos
        indispensables y manteniendo el Cuerpo con su esfuerzo hasta 1889, fecha
        en que se pasó a integrar, por iniciativa del Jefe de Policía Don
        Mariano Mazza, la dotación de esa repartición recibiendo el nombre de
        Cuerpo de Bomberos de Policía, quienes quedaron a los órdenes del
        Teniente Coronel Alberto Urraco, siendo el número de plazas de 50
        integrantes. Sus integrantes, eran vecinos de Rosario que, deseosos de
        servir a lacomunidad, no dudaron en arriesgar sus vidas.
      </p>
    </div>
  );
};

export default Historia;
