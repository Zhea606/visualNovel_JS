let page = 0;
const texts = ["Testing"];

const speaker = ["Narrador"];

///clase y metodo

class Scene {
  constructor(speaker, text) {
    this.speaker = speaker;
    this.text = text;
  }
  insertDialogue() {
    document.getElementById("name").innerHTML = speaker[page];
    document.getElementById("text").innerHTML = texts[page];
    console.log(this.speaker + this.text);
  }
}

const scene1 = new Scene("Narrador ", "Hola, soy el Narrador");
scene1.insertDialogue();

//modificar texto del dialogo
// let modifiedText = document.getElementById("text");
// modifiedText.innerText ="Nuevo personaje";
//probar si funciona, por que en html, los div no tienen texto. Encontrar la manera
//de entrar mediante eñ cod que esta en js innerHTML

//intentar con desestructuracion en array etc para el tema de dialogos y speaker

// const scenes = [
//   //array de objetos donde llamo a cada escena
//   {id:},
//   {id:},
// ];

const traerEscenas = () => {
  return new Promise((resolve, reject) => {
    resolve(BD);
  });
};

traerEscenas()
  .then((reponse) => {
    reponse.forEach((escena) => {
      let div = document.getElementById("div");
      div.innerHTML = `
      <h2> Escena 1: ${escena.id}</h2>
      // llamo a los objetos del array
      `;
      document.body.append(div);
    });
  })
  .catch((error) => console.log(error));

///
