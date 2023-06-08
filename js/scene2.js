let page = 0;
let button = document.getElementById("button");

const texts = [
  "'Ya en el interior de la casa, el cazador pudo encontrar lo " +
    "que estaba buscando: la razón por la que el ente los habia atacado.'",
  "'Mientras la mujer relatada entre llantos cómo había sido el ataque," +
    " el cazador prácticamente la ignoraba, y en cambio, puso toda su atención" +
    " en una fotografía que estaba en la pared: era una foto muy vieja, de los primeros dias de la " +
    " construcción del tren trasandino que conectaba a Chile con Argentina'",
  "'La foto databa de 1872. En ella se podia ver a tres hombres amistosos, con las vias del tren al fondo, " +
    " a medio construir. Pero habia alguien más, alejado, que casi pasaba desapercibido: un hombre vestido" +
    " de traje azul con galera'",
  "Si si...muchas gracias por venir tan rápido. Venga conmigo, es aquí cerca.",
];

const speaker = [
  "<b>Narrador</b>",
  "<b>Narrador</b>",
  "<b>Narrador</b>",
  "<b>Alcalde</b>", ///meterlos en uno o dos for?
];

document.getElementById("name").innerHTML = speaker[page];
document.getElementById("text").innerHTML = texts[page];

///next
function next() {
  window.location.href = "html/scene1.html";
}

function nextDialogue() {
  let scene = (document.getElementById("scene").src = "../assets/picture.jpg");

  if (page < 3) {
    scene.className = "picture";
    page++;
    document.getElementById("text").innerHTML = texts[page];
    document.getElementById("name").innerHTML = speaker[page];
  } else {
    button.className = "toggle";
  }
}
