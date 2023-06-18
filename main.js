///***loader
const loadingPage = function () {
  setTimeout(function () {
    window.location.href = "../html/scene0.html";
  }, 1500);
};

///***play
function play() {
  window.location.href = "html/loaderPage.html";
}

///***llamada al loader
let loaderPage = document.getElementById("loader-page");
console.log(loaderPage);

if (loaderPage) {
  loadingPage();
}

///***local storage
localStorage.setItem("partidaGuardada", "true");
let partidaJugador = localStorage.getItem("partidaGuardada");
if (partidaJugador) {
  console.log("Partida guardada");
  //almacenará las opciones de controlos elegidas y además, en donde dejó la partida para que no empiece de 0
}

// if(finalHistoria1){
//   //cuando el jugador llegue al final de la primera historia, se eliminarán los datos
//   localStorage.clear();
// }
