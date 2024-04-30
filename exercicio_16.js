/* 16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo. */

console.log("------------Números primos:------------");

let contador = 0;
let numero = 101;

while (contador<50) {
    if (primo(numero)) {
        console.log(numero);
        contador++;
    }
    numero++;
}



function primo(numero) {
    if (numero<=1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++){
        if (numero % i === 0) {
            return false;
        }
     
    }
    return true;
}
