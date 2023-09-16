class Banco {
    constructor(conta, agencia, tipo) {
        this.conta = conta;
        this.agencia = agencia;
        this.saldo = 0.0;
        this.tipo = tipo;
    }
    buscarSaldo() {
        console.log(this.saldo);
    }

    deposito(valor) {
        this.saldo = valor;
    }

    saque(retirar) {
        this.saldo -= retirar;
    }

    numeroConta() {
        console.log(this.conta)
    }
}

//Adicionando objeto
let conta1 = new Banco('14790', '002', 'Corrente');

//Depositando valor
conta1.deposito(500.00);
//Sacando valor
conta1.saque(250.42);
//Exibindo número da conta
conta1.numeroConta();
//Informando saldo
conta1.buscarSaldo();