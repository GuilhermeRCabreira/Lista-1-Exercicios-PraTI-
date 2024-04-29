/* 9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo: */

const prompt = require("prompt-sync")();

console.log("------------Identificador de região:------------");

let origem;

origem = entrada("Informe o código de origem do produto: ");

identificador(origem);

//////Funcoes////////
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

function identificador(origem) {
  let regiao;
  switch (origem) {
    case 1:
      regiao = "Sul.";
      console.log("O produto é da região " + regiao);
      break;
    case 2:
      regiao = "Norte.";
      console.log("O produto é da região " + regiao);
      break;
    case 3:
      regiao = "Leste.";
      console.log("O produto é da região " + regiao);
      break;
    case 4:
      regiao = "Oeste.";
      console.log("O produto é da região " + regiao);
      break;
    case 5:
    case 6:
      regiao = "Nordeste.";
      console.log("O produto é da região " + regiao);
      break;
    case 7:
    case 8:
    case 9:
      regiao = "Sudeste.";
      console.log("O produto é da região " + regiao);
      break;
    default:
      if (origem >= 10 && origem <= 20) {
        regiao = "Centro-Oeste.";
        console.log("O produto é da região " + regiao);
      } else {
        if (origem >= 25 && origem <= 50) {
          regiao = "Nordeste.";
          console.log("O produto é da região " + regiao);
        } else {
          console.log("O produto é importado.");
        }
      }

      break;
  }
}
