// No caso 1, o algorítimo informa se o(a) aluno(a) está aprovado(a) ou não.
console.log('-- Caso 1 --')
let n1 = Number(prompt('Informe a 1ª nota: '));
let n2 = Number(prompt('Informe a 2ª nota: '));
let n3 = Number(prompt('Informe a 3ª nota: '));

let media = (n1 + n2 + n3) / 3;
let result = media >= 7 ? "Você está aprovado(a)!" : "Voce está reprovado(a).";
console.log(`Sua média é ${media.toFixed(2)}. ${result}\n`)

// No caso 2, o algorítimo informa quanto o(a) aluno(a) necessita para ser aprovado(a) por média.
console.log('-- Caso 2 --')
let nota1 = Number(prompt('Informe a 1ª nota: '));
let nota2 = Number(prompt('Informe a 2ª nota: '));

function result2(a, b) {
    return 21 - (a + b)
}

let diferenca = result2(nota1, nota2)

console.log(`Você precisa de ${diferenca} pontos na 3ª nota para alcançar a média mínima de 7.`)
