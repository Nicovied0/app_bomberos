// Evento de activar o desactivar fondo de barra de navegacion
window.addEventListener("scroll", function () {
  let animacion = this.document.getElementById("scrolling");
  let posicionOBJ1 = animacion.getBoundingClientRect().top;
  console.log(posicionOBJ1, "soy yo");
  let nav = this.document.getElementById("Nav");

  if (posicionOBJ1 < -300) {
    console.log("aca");
    nav.setAttribute("style", "background: black");
  } else {
    nav.setAttribute("style", "background: none");
  }
});
