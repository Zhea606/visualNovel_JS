let objetoOculto = document.getElementById("object-hat"); //oculto siempre, pero activo

objetoOculto.addEventListener("click", objetoEncontrado);

function objetoEncontrado() {
  console.log("te encontré");
  mostrarMensaje();

  //con un hover cambiar el cursor, y luego con el click, "Encontré el sombrero"
}

let pen = document.getElementById("object-pen");
pen.onclick = () => {
  console.log("Encontré la lapicera");
  //lanzar dialogo indicancdo que encontró el objeto
};

let glasses = document.getElementById("glasses");
glasses.onmousemove = () => {
  console.log("lentes");
  //cambia puntero El jugador debe hacer click
};

///***promesas

function mostrarMensaje() {
  return new Promise((resolve, reject) => {
    alert("Has encotrado el objeto perdidoa, sigue adelante...");

    objetoOculto.addEventListener("clicl", () => {
      resolve();
    });
  });
}

mostrarMensaje()
  .then(() => {
    continuaHistoria();
  })
  .catch((error) => {
    console.error(error);
  });

let button = document.getElementById("button");

function continuaHistoria() {
  button.className = "button-show";
}
