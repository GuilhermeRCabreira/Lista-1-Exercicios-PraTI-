/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

const prompt = require("prompt-sync")();

console.log("------------Identificador de triângulo:------------");

let A;
let B;
let C;

console.log("Forneça o valor dos lados do triângulo:");
A = entrada("Lado A: ");
B = entrada("Lado B: ");
C = entrada("Lado C: ");

if (verificacaoDeTriangulo(A, B, C) == true) {
  identificacaoDeTriangulo(A, B, C);
} else {
  console.log("Os valores informados não correspondem a um triângulo.");
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

function verificacaoDeTriangulo(A, B, C) {
  if (A < B + C && B < A + C && C < A + B) {
    return true;
  } else {
    return false;
  }
}

function identificacaoDeTriangulo(A, B, C) {
  if (A == B && B == C && C == A) {
    console.log(
      "\nÉ um triângulo equilátero, pois possui todos os lados iguais."
    );
    console.log("Lado A: " + A);
    console.log("Lado B: " + B);
    console.log("Lado C: " + C);
  } else {
    if (A == B || A == C || B == C) {
      console.log("\nÉ um triângulo isóceles, pois possui dois lados iguais.");
      console.log("Lado A: " + A);
      console.log("Lado B: " + B);
      console.log("Lado C: " + C);
    } else {
      console.log(
        "\nÉ um triângulo escaleno, pois possui todos os lados diferentes."
      );
      console.log("Lado A: " + A);
      console.log("Lado B: " + B);
      console.log("Lado C: " + C);
    }
  }
}
