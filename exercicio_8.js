/* 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

const prompt = require("prompt-sync")();

console.log("------------Ordenar números:------------");

let x;
let y;

console.log("Informe 2 valores distintos:");

x = entrada("Número 1: ");
do {
  y = entrada("Número 2: ");
  if (y == x) {
    console.log("Os números devem ser diferentes. Digite novamente.");
  }
} while (y == x);
ordenar(x, y);

//////Funcoes////
function entrada(mensagem) {
  let entradaValida = false;

  while (!entradaValida) {
    let numero = prompt(mensagem);
    if (!isNaN(numero)) {
      entradaValida = true;
      return numero;
    } else {
      console.log("Valor inválido! Digite novamente.");
    }
  }
}

function ordenar(x, y) {
  let maior, menor;

  if (x < y) {
    menor = x;
    maior = y;
  } else {
    menor = y;
    maior = x;
  }
  console.log("Valores em ordem crescente: " + menor + ", " + maior);
}
