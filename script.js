//alert("Hola este es mi Javascript");

//let nombre = "Aldana";
//console.log(nombre);

//SELECCIONAR ELEMENTOS

// let contenidoTitulo = "Nombre";

// let titulo = document.querySelector(".acerca-de h2");
// if (titulo) {
//     titulo.innerHTML = contenidoTitulo;
// };

//CONDICIONALES
//  let textoTitulo = titulo.innerText;
//  console.log(textoTitulo);

//  if (textoTitulo == "Nombre"){
//     titulo.innerHTML = "Otro";
//  } else{
//      console.log("No se cumple");
//  };

 //FUNCIONES

//  let nombre = "Taís";
//  let ciudad = "Montevideo";
//  let gusto = "cantar";

//  let parrafo = document.querySelector(".acerca-de .parrafo2");

//  function cambiarTexto(nombre, ciudad, gusto){
//     let contenido = `Me llamo ${nombre}, nací en ${ciudad}, Uruguay, donde actualmente vivo. Me gusta ${gusto}, viajar y cocinar`;

//     return contenido;
//  }

//  parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

/*-------------------------FORMULARIO-------------------------*/ 
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

/*---------------------------------------------------------------*/ 