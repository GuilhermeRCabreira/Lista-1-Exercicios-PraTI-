/*10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/
const prompt = require("prompt-sync")();

console.log("------------Repetidor de números:------------");

let numero;

numero=entrada("Informe um número inteiro para repetir 10 vezes: ");



for (let i = 0; i < 10; i++) {
    console.log(numero);

   
    
}


////funcao
function entrada(mensagem) {
    let numero;
    do {
      numero = prompt(mensagem);
      if (!Number.isInteger(parseFloat(numero)) ) {
        console.log("Informe um número inteiro positivo válido.");
      }
    } while (!Number.isInteger(parseFloat(numero)) );
    return parseInt(numero);
  }
