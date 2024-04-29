/* Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros. */

const prompt = require("prompt-sync")();

console.log("------------Algoritmo de operações:------------");

let num1;
let num2;
let num3;
let num4;

console.log("\nInforme 4 números inteiros:");

num1 = entrada("Número 1: ");
num2 = entrada("Número 2: ");
num3 = entrada("Número 3: ");
num4 = entrada("Número 4: ");

let num1M = num1 + 25;
let num2M = num2 * 3;
let num3M = (num3 * 0.12).toFixed(2);
num4 = num1 + num2 + num3;

exibir(num1M, num2M, num3M, num4);

//////Funcoes
function entrada(mensagem) {
  let numero;
  do {
    numero = prompt(mensagem);
    if (!Number.isInteger(parseFloat(numero))) {
      console.log("Informe um número inteiro válido.");
    }
  } while (!Number.isInteger(parseFloat(numero)));
  return parseInt(numero);
}

function exibir(num1, num2, num3, num4) {
  console.log("\nNúmeros após as operções:");
  console.log("Número 1: " + num1);
  console.log("Número 2: " + num2);
  console.log("Número 3: " + num3);
  console.log("Número 4: " + num4);
}
