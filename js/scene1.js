let page = 0;
let button = document.getElementById("button");

const texts = [
  "'El cazador logra llegar a la casa de quien era la madre de uno " +
    "de los trabajadores asesinados. A diferencia de las demás, su casa, aunque simple, se encontraba muy " +
    "arreglada y en mucho mejor estado que la de sus vecinos.'",
  "'Al tocar la puerta, una mujer muy afligida lo recibe. Sabía a qué venía el cazador, " +
    "puesto que el jefe del pueblo le había avisado. Lo invitó a pasar' ",
];

const speaker = [
  "<b>Narrador</b>",
  "<b>Narrador</b>",
  ///meterlos en uno o dos for?
];

document.getElementById("name").innerHTML = speaker[page];
document.getElementById("text").innerHTML = texts[page];

///next
function next() {
  window.location.href = "../../html/scene2.html";
}

function nextDialogue() {
  document.getElementById("scene").src = "../assets/house2.jpg";

  if (page < 1) {
    page++;
    document.getElementById("text").innerHTML = texts[page];
    document.getElementById("name").innerHTML = speaker[page];
  } else {
    button.className = "button-show";
  }
}
