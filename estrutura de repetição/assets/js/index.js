// const elementos = [
//   { tag: "Paragrafo", texto: "texto 1" },
//   { tag: "Div", texto: "texto 2" },
//   { tag: "Section", texto: "texto 3" },
//   { tag: "Footer", texto: "texto 4" },
// ];

// const container = document.querySelector(".container");
// const div = document.createElement("div");

// for (let i = 0; i < elementos.length; i++) {
//   let { tag, texto } = elementos[i];
//   let tagCriada = document.createElement(tag);
//   let textoCriado = document.createTextNode(texto)
//   tagCriada.innerHTML = texto;
//   div.appendChild(tagCriada);
// }

// container.appendChild(div);

const frutas = ["Pera", "Maçã", "Uva"];

const pessoa = {
  nome: "Fabio",
  sobrenome: "Nagamine",
};

for (let i in pessoa) {
  console.log(i);
}

for (i in pessoa) {
  console.log(i, pessoa[i]);
}

for (valor of frutas) {
  console.log(valor);
}

frutas.forEach(function (elemento, indice, array) {
  console.log(elemento, indice, array);
});
