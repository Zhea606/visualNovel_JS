let page = 0;
let button = document.getElementById("button");

const texts = [
  "'Después de un largo viaje por un camino sólo de tierra, el Cazador logra llegar al remoto pueblo'",
  "Buen día, ¿es usted el cazador?",
  "Si. Vine por una carta que me enviaron solicitándome ayuda.",
  "Si si...muchas gracias por venir tan rápido. Venga conmigo, es aquí cerca.",
];

const speaker = [
  "<b>Narrador</b>",
  "<b>Alcalde</b>",
  "<b>Cazador</b>",
  "<b>Alcalde</b>", ///meterlos en uno o dos for?
];

document.getElementById("name").innerHTML = speaker[page];
document.getElementById("text").innerHTML = texts[page];

///next
function next() {
  window.location.href = "../html/scene1.html";
}

function nextDialogue() {
  document.getElementById("scene").src = "../assets/pueblo2.webp";

  if (page < 3) {
    page++;
    document.getElementById("text").innerHTML = texts[page];
    document.getElementById("name").innerHTML = speaker[page];
  } else {
    button.className = "button-show";
  }
}
