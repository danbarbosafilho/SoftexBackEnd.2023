let n1, n2, operador;

function calculadora(a, b, c) {
    if (c == '+') {
        return a + b;
    } else if (c == '-') {
        return a - b;
    } else if (c == '*') {
        return a * b;
    } else if (c == '/') {
        return a / b;
    }
}

do {
    try {
        n1 = Number(prompt('Informe o primeiro número: '));
        n2 = Number(prompt('Informe o segundo número: '));
        operador = prompt('Informe o operador (+, -, *, /): ');

        if (isNaN(n1) || isNaN(n2)) {
            throw new Error('Opção inválida! Digite um número.');
        } else if (operador !== '+' && operador !== '-' && operador !== '*' && operador !== '/') {
            throw new Error('Opção inválida. Informe um operador entre +, -, * e /');
        }
    } catch (error) {
        console.log(error.message);
    }

} while (isNaN(n1) || isNaN(n2) || (operador !== '+' && operador !== '-' && operador !== '*' && operador !== '/'));

const resultado = calculadora(n1, n2, operador);
console.log(`O resultado final de ${n1} ${operador} ${n2} é: ${resultado}`);