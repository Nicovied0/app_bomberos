import React from "react";

const Contacto = () => {
  return (
    <div id="Contacto">
      <div>
        <h2>Planilla de Contacto</h2>
        <form>
          <input placeholder="Nombre" type="text"></input>
          <input placeholder="Email" type="email"></input>
          <input placeholder="Asunto" type="text"></input>
          <textarea placeholder="Mensaje" rows="10" cols="50"></textarea>
        </form>
      </div>

      <div>
        <h3>
          Puedes utilizar esta planilla de contacto para todas tus consultas y/o
          sugerencias y te responderemos a la brevedad a la dirección de correo
          electrónico que nos proporciones. Si tienes algún inconveniente con la
          planilla, puedes enviarnos un email a
          aspirantes27@bomberosrosario.com.ar
        </h3>
        <h2>Dirección</h2>
        <iframe
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1669.177065318863!2d-64.43668876449388!3d-33.20481107015381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d1f92bc9be3ddd%3A0x4dd7fe0f482d7610!2sBomberos%20Voluntarios%20Santa%20Catalina!5e0!3m2!1ses-419!2sar!4v1677133095538!5m2!1ses-419!2sar"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <h2>Números telefónicos</h2>
        <h3>Tel: (0341) 430 8888</h3>
      </div>
    </div>
  );
};

export default Contacto;
