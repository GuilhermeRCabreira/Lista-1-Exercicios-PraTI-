/* Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores. */

const prompt = require("prompt-sync")();

console.log("------------Caculadora de percentual em eleição:------------");
let quantEleitores;
let quantVotosBrancos;
let quantVotosNulos;
let quantVotosValidos;

////funcoes
function calcularPercentual(numParcial, numTotal) {
  let percentual = (numParcial / numTotal) * 100;
  return percentual.toFixed(2);
}

function entrada(mensagem) {
  let numero;
  do {
    numero = prompt(mensagem);
    if (!Number.isInteger(parseFloat(numero)) || parseFloat(numero) < 0) {
      console.log("Informe um número inteiro positivo válido.");
    }
  } while (!Number.isInteger(parseFloat(numero)) || parseFloat(numero) < 0);
  return parseInt(numero);
}

quantEleitores = entrada("Por favor, digite a quantidade total de eleitores:");
console.log("\nAgora informe os seguintes dados:");
quantVotosBrancos = entrada("\nQuantidade de votos brancos:");
quantVotosNulos = entrada("Quantidade de votos nulos:");
quantVotosValidos = entrada("Quantidade de votos válidos:");

let vbrancos = calcularPercentual(quantVotosBrancos, quantEleitores);
let nulos = calcularPercentual(quantVotosNulos, quantEleitores);
let validos = calcularPercentual(quantVotosValidos, quantEleitores);

console.log("\nQuantidade total de eleitores: ", quantEleitores);
console.log("Percentual de votos brancos: ", vbrancos + "%");
console.log("Percentual de votos nulos: ", nulos + "%");
console.log("Percentual de votos válidos: ", validos + "%");
