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
    " de traje azul con galera'", //arreglar foto
  "¿Quienes son los de la foto, señora?",
  "Ah, esos son mi abuelo con sus dos amigos, cuando los contrataron para trabajar en la obra del" +
    "tren trasandino. ¡Si hubieran sabido que lo iban a clausurar! Tal vez podrian haberse ido del pueblo a trabajar en la ciudad y ganar mejor.",
  "Los otros hombres, ¿se quedaron en el pueblo también? ¿Tuvieron familia?",
  "¡Ay, mijito! (rompe en llanto) los pobres muchachos que murieron con mi niñito, eran sus bisnietos. ¡Es un castigo de Dios!" +
    "Algo debieron haber hecho para que nos maldijeran asi.",
  "'Efectivamente. Que el espiritu del futre los atacara no era coincidencia. Habian provocado la furia de algo que los perseguiria generación por generación." +
    "Ya habia saldado cuentas con ésta, ahora sólo tenia que esperar a la próxima camada de hombres que nacieran en esas tres familias.'",
  "'No necesitaba investigar más. No era la primera vez que lidiaba con este tipo de espíritu vengador. Ahora, sólo tenia que ir al lugar de los hechos...y esperar.'",
];

const speaker = [
  "<b>Narrador</b>",
  "<b>Narrador</b>",
  "<b>Narrador</b>",
  "<b>Cazador</b>",
  "<b>Mujer</b>",
  "<b>Cazador</b>",
  "<b>Mujer</b>",
  "<b>Narrador</b>",
  "<b>Narrador</b>",
];

//llamar a los elementos del array: speaker[0] + texts[1]
//speaker.push('otro personaje')
//si agrego un dialogo más, tendré que modificar la cant de page < 3

document.getElementById("name").innerHTML = speaker[page];
document.getElementById("text").innerHTML = texts[page];

///***next
function next() {
  window.location.href = "../../html/scene3.html";
}

function nextDialogue() {
  let scene = (document.getElementById("scene").src = "../assets/picture.jpg");

  if (page < 8) {
    scene.className = "picture";
    page++;
    document.getElementById("text").innerHTML = texts[page];
    document.getElementById("name").innerHTML = speaker[page];
  } else {
    button.className = "button-show";
  }
}
