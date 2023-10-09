let n1, n2, operador;

try {
    n1 = Number(prompt('Informe o primeiro número: '));
    n2 = Number(prompt('Informe o segundo número: '));
    operador = prompt('Informe o operador (+, -, *, /): ');

    if (isNaN(n1) || isNaN(n2)) {
        throw new Error('Opção inválida');
    } else if (operador !== '+' && operador !== '-' && operador !== '*' && operador !== '/') {
        throw new Error('Opção inválida.');
    }
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Operação finalizada.')
}