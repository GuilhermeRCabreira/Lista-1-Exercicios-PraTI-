/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

const prompt = require("prompt-sync")();

console.log("------------Calculadora de valor:------------");

let quantidade = entrada("Informe o número de maçãs compradas: ");

let valorTotal = calculaValor(quantidade);

console.log("\n Quantidade de maçãs compradas: " + quantidade);
console.log("Valor total da compra: R$ " + valorTotal);

//////Funcoes//////
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

function calculaValor(quantidade) {
  let valorTotal;
  if (quantidade < 12) {
    return (valorTotal = quantidade * 0.3).toFixed(2);
  } else {
    return (valorTotal = quantidade * 0.25).toFixed(2);
  }
}
