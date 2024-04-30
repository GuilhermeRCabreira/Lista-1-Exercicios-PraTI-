/* 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO. */

const prompt = require("prompt-sync")();

console.log("------------Leitor de pares e ímpares:------------");

let numero;

do {
    numero = parseInt(prompt("Informe um número inteiro: "));
    if (!isNaN(numero)&&numero>0) {
        verificarParOuImpar(numero);
    } else {if (numero<0) {
        console.log("Número inválido. Programa encerrado.");
    } else {
        console.log("Número inválido. Programa encerrado."); 
    }
        
    }
} while (numero>0);

////////Função/////////
function verificarParOuImpar(numero) {
    if (numero % 2 ===0) {
        console.log("O número "+numero+" é par");
    } else {
        console.log("O número "+numero+" é ímpar");
    }
}
