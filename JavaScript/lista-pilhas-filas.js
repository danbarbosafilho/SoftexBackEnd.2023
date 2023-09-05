let array1 = [3, 7, 9, 1, 0];
// Pilha. Ordem de saída: 0, 1, 9, 7, 3
console.log(`Ordem de saída como Pilha:`);
array1.forEach(function () {
    do {
        let saida1 = array1.pop();
        console.log(saida1);
    } while (array1.length !== 0);
})

let array2 = [3, 7, 9, 1, 0];
// Fila. Ordem de saída: 3, 7, 9, 1, 0
console.log(`Ordem de saída como Fila:`);
array2.forEach(function () {
    do {
        let saida2 = array2.shift();
        console.log(saida2);
    } while (array2.length !== 0);
})

// Lista. Para uma Lista, a ordem de saída pode ser feita
// tanto como Pilha (Last-in-First-out), tanto como Fila (First-in-First-Out).