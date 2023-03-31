import React from "react";
import styles from "./Historia.module.css";
import Contador from "../Contador/Contador";
const Historia = () => {
  return (
    <div className={styles.div_contenedor} id="Historias">
      <h2 className={styles.title}>Nuestra historia</h2>
      <hr></hr>
      <div className={styles.divTexto}>
        <div className={styles.divp}>
          <p>
            Hasta el año 1880 en Rosario, los incendios que la asolaron habían
            sido contrarrestados con la decisión y el heroísmo del vecindario,
            pero a medida que crecía el radio urbano se hacía difícil luchar sin
            los medios necesarios, por ello es que un grupo de emprendedores
            vecinos funda el 20 de noviembre del año 1880 la "Compañía Primera
            de Bomberos Voluntarios del Rosario", comprando con su peculio los
            elementos indispensables y manteniendo el Cuerpo con su esfuerzo
            hasta 1889, fecha en que se pasó a integrar, por iniciativa del Jefe
            de Policía Don Mariano Mazza, la dotación de esa repartición
            recibiendo el nombre de Cuerpo de Bomberos de Policía, quienes
            quedaron a los órdenes del Teniente Coronel Alberto Urraco, siendo
            el número de plazas de 50 integrantes. Sus integrantes, eran vecinos
            de Rosario que, deseosos de servir a lacomunidad, no dudaron en
            arriesgar sus vidas.
          </p>
        </div>
        <div className={styles.divp}>
          <p>
            Con el recuerdo lejano de la Compañía Primera de Bomberos
            Voluntarios del Rosario, un grupo de rosarinos con "alma de
            Bomberos", fundan, el 2 de junio de 1978 la Asociación Bomberos
            Voluntarios de Rosario, siendo el Sr. Eric Lowenstein su primer
            Presidente y 3 de diciembre de 1978 se crea el Cuerpo Activo siendo
            el Sr. Luis E. Vázquez su 1er. Jefe del Cuerpo Activo. En la
            actualidad, solo contamos con el Cuartel Central, pero es nuestro
            anhelo disponer, en un futuro cercano,de un destacamento en cada uno
            de los 6 distritos de la ciudad. Recordamos que en 1997 el Honorable
            Concejo Municipal de Rosario, agradeció la actividad que los
            Bomberos Voluntario de Rosario realizan en beneficio de nuestra
            comunidad, como asimismo obtuvimos además del IADE el Primer Premio
            a la Excelencia Institucional.
          </p>
        </div>
        <div >
          <div>
            <h3>NOSOTROS</h3>
            <p>
              Desde el año 1978, contamos con un Cuartel Central sito en calle
              Rioja Nº 2860. Desde marzo de 1995 hasta finales del 2003, tuvimos
              destacamentos en distintos puntos de la zona sur motivados por la
              sencilla razón de que éste gran área de nuestra Ciudad de casi
              400.000 habitantes estaba muy lejos de cumplir con la elemental
              norma de seguridad que es la de tener un Destacamento de Bomberos
              a una distancia máxima de 26 cuadras, con el fin de lograr que el
              primer vehículo de socorro llegue dentro de los 5 minutos
              siguientes a la recepción del llamado de alarma.
            </p>
          </div>
          <div className={styles.divp}>
            <h3>ACTUALIDAD</h3>
            <p>
              Desde el año 1978, contamos con un Cuartel Central sito en calle
              Rioja Nº 2860. Desde marzo de 1995 hasta finales del 2003, tuvimos
              destacamentos en distintos puntos de la zona sur motivados por la
              sencilla razón de que éste gran área de nuestra Ciudad de casi
              400.000 habitantes estaba muy lejos de cumplir con la elemental
              norma de seguridad que es la de tener un Destacamento de Bomberos
              a una distancia máxima de 26 cuadras, con el fin de lograr que el
              primer vehículo de socorro llegue dentro de los 5 minutos
              siguientes a la recepción del llamado de alarma.
            </p>
          </div>
        </div>
        <div>
          <Contador />
        </div>
      </div>
    </div>
  );
};

export default Historia;
