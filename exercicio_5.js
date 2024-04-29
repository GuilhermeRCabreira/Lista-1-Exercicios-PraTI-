/* 5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0 */

const prompt = require("prompt-sync")();

console.log("------------Calculadora de média:------------");

let avaliacao1;
let avaliacao2;
let media;

avaliacao1 = entrada("Informe a nota da avaliação 1: ");
avaliacao2 = entrada("Informe a nota da avaliação 2: ");

media = (avaliacao1 + avaliacao2) / 2;

if (media >= 6.0) {
  console.log("\nMédia final: " + media);
  console.log("PARABÉNS! Você foi aprovado");
} else {
  console.log("\nMédia final: " + media);
  console.log("Você foi REPROVADO! Estude mais");
}

///Funções/////
function entrada(mensagem) {
  let numero;
  do {
    numero = prompt(mensagem);
    if (parseFloat(numero) <= 0 || isNaN(parseFloat(numero))) {
      console.log("Erro, você deve informar um número maior que zero.");
    }
  } while (parseFloat(numero) <= 0 || isNaN(parseFloat(numero)));
  return parseFloat(numero);
}
