/* 14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */

const prompt = require("prompt-sync")();

console.log("------------Média:------------");

let numVet=[];
let numero;
while (numero !== 0) {
    numero = entrada("Informe um número decimal ou zero para encerrar o programa:");
    if (numero !== 0) {
        numVet.push(numero);
    }
}

if (numVet.length===0) {
    console.log("Vetor está vazio.")
} else {
    console.log("Vetor formado: "+numVet);
    media(numVet);
}







//////////Funcoes
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

  function somaVetor(vetor=[]){
    let soma=0;
    for (let i = 0; i < vetor.length; i++) {
        soma+= vetor[i];
        
    }
    return soma;
  }

  function media(vetor=[]) {
    let media = (somaVetor(vetor)/vetor.length);
    console.log("A média aritmética desses valores é: "+media.toFixed(2));
  }

