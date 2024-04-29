/* Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação). */

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
  console.log(
    "Reprovado! Infelizmente você não atingiu a nota mínima de 6.0 para aprovação."
  );
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
