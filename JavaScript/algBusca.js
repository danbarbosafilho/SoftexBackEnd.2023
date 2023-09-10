
//Algoritmo de busca para localizar o elemento 20 do array.
let arraySimples = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];

function buscarIndice(array, elemento) {
    for(i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return i; 
        } 
    } return -1
}

let result = buscarIndice(arraySimples, 20);

console.log(`O elemento 20 do arraySimples está localizado no índice de número ${result}`)