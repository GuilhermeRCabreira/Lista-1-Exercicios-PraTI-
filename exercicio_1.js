/* 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit. */

const prompt = require("prompt-sync")();

console.log(
  "------------Conversor de Graus Celsius para Graus Fahrenheit------------"
);

function conversorGrausFahrenheit(grausCelsius) {
  let fahrenheit = (9 / 5) * grausCelsius + 32;
  return fahrenheit;
}

let celsius;
let entradaValida = false;

while (!entradaValida) {
  celsius = prompt("Digite a temperatura em Graus Celsius:");
  if (!isNaN(celsius)) {
    entradaValida = true;
  } else {
    console.log("Valor inválido! Digite novamente.");
  }
}

let fahrenheit = conversorGrausFahrenheit(celsius);
console.log(
  celsius +
    " Graus Celsius é a mesma coisa que " +
    fahrenheit +
    " Graus Fahrenheit."
);
