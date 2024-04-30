/* 13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N */

const prompt = require("prompt-sync")();

console.log("------------Tabuada:------------");

let num1, num2, num3, num4, num5;

num1=entrada("Informe o primeiro número: ");
num2=entrada("Informe o segundo número: ");
num3=entrada("Informe o terceiro número: ");
num4=entrada("Informe o quarto número: ");
num5=entrada("Informe o quinto número: ");

tabuada(num1);
tabuada(num2);
tabuada(num3);
tabuada(num4);
tabuada(num5);

/////funcoes//////
function entrada(mensagem) {
    let numero;
    do {
      numero = prompt(mensagem);
      if (isNaN(numero) ) {
        console.log("Informe um número válido.");
      }
    } while (isNaN(numero) );
    return numero;
  }

  function tabuada(numero) {
    console.log("Para o número: "+numero);
    for (let i = 0; i <= numero; i++) {
        let resultado=numero*i;

        console.log(i+" X "+numero+" = "+resultado);
        
    }
    console.log("\n");
  }
