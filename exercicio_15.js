/* 15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos. */
const prompt = require("prompt-sync")();

console.log("------------Média ponderada:------------");

let numMatriz=[];
let numero;
let peso;
while (true) {
    numero = entrada("Informe um número decimal ou zero para encerrar o programa:");
    if (numero === 0) {
        break;
    }
    peso = entradaPeso("Informe um número para o peso desse número:");
    numMatriz.push([numero, peso]);
}

if (numMatriz.length===0) {
    console.log("Matriz está vazia.")
} else {
    console.log("Matriz formada: ");
    console.table(numMatriz);
    media(numMatriz);
}



function entrada(mensagem) {
    let numero;
    do {
      numero = parseFloat(prompt(mensagem));
      if (isNaN(numero) || (numero !== 0 && Number.isInteger(numero))) {
        console.log("Informe um número decimal válido.");
      }
    } while (isNaN(numero) || (numero !== 0 && Number.isInteger(numero)));
    return numero;
  }

  function entradaPeso(mensagem) {
    let numero;
    do {
      numero = parseFloat(prompt(mensagem));
      if (isNaN(numero) ) {
        console.log("Informe um número válido.");
      }
    } while (isNaN(numero) );
    return numero;
  }

  function somaMatriz(matriz=[]){
    let somaProduto=0;
    let somaPeso=0;

    for (let i = 0; i < matriz.length; i++) {
        somaProduto += matriz[i][0] * matriz[i][1];
        somaPeso += matriz[i][1];
        
    }
    return { somaProduto, somaPeso };
  }

  function media(matriz=[]) {
    let {somaProduto, somaPeso} = somaMatriz(matriz);
    let media = (somaProduto/somaPeso);
    console.log("A média ponderada desses valores é: "+media.toFixed(2));
  }
