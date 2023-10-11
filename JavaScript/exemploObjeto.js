class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.ligado = false
    }

    ligar() {
        if (this.ligado == false) {
            this.ligado = true
            console.log("Carro ligado.")
        }
    }

    desligar() {
        if (this.ligado == true) {
            this.ligado = false
            console.log("Carro desligado.")
        }
    }

    andar() {
        if (this.ligado == true) {
            console.log("O carro está em movimento.")
        } else if (this.ligado != true) {
            console.log("O carro está desligado. Ligue-o para movimentá-lo.")
        }
    }
}

class Agenda {
    constructor(cor, estado, paginas) {
        this.cor = cor
        this.estado = estado
        this.paginas = paginas
        this.aberta = false
    }

    abrir() {
        if (this.aberta != true) {
            this.aberta = true
            console.log('Livro aberto.')
        }
    }

    fechar() {
        if (this.aberta == true) {
            this.aberta = false
            console.log('Livro fechado.')
        }
    }

    escrever() {
        if (this.aberta == true) {
            console.log('Escrevendo...')
        } else {
            console.log('O livro está fechado, abra-o primeiro.')
        }
    }
}

class Ensinar {
    constructor(data, materia, turno) {
        this.data = data
        this.materia = materia
        this.turno = turno
    }

    falar() {
        console.log('Você está falando.')
    }

    escrever() {
        console.log('Você está escrevendo.')
    }

    corrigir() {
        console.log('Você está corrigindo.')
    }
}

class Tocar {
    constructor(instrumento, quando, volume) {
        this.instrumento = instrumento
        this.quando = quando
        this.volume = volume
        this.guardado = true
    }

    pegarInstrumento() {
        if (this.guardado == true) {
            this.guardado = false
            console.log(`Você pegou o(a) ${this.instrumento}.`)
        }
    }

    guardarInstrumento() {
        if (this.guardado == false) {
            console.log(`${this.instrumento} guardado(a).`)
        } else if (this.guardado == true) {
            console.log(`O(a) ${this.instrumento} já se encontra guardado(a).`)
        }
    }

    tocarAgora() {
        if (this.guardado == false) {
            console.log(`Você está tocando o(a) ${this.instrumento} no volume ${this.volume}.`)
        } else {
            console.log(`O(a) ${this.instrumento} está guardado(a).Pegue - o(a) para tocar.`)
        }
    }
}

const Carro1 = new Carro('Land Rover', 'Evoque', 2023)
Carro1.ligar()
Carro1.andar()
Carro1.desligar()

const Diario = new Agenda('azul', 'novo', 200);
console.log(`Agenda de cor ${Diario.cor}, de ${Diario.estado} estado e com ${Diario.paginas} páginas.\n`)
Diario.escrever()
Diario.abrir()
Diario.escrever()
Diario.fechar()

const Violao = new Tocar('violão', 'agora', 'médio')
Violao.tocarAgora()
Violao.guardarInstrumento()
Violao.pegarInstrumento()
Violao.tocarAgora()

const Professor1 = new Ensinar('hoje', 'matemática', 'manhã')
console.log(`Você está ensinando ${Professor1.data}, sobre ${Professor1.materia} no turno da ${Professor1.turno}.\n`)
Professor1.falar()
Professor1.escrever()
Professor1.corrigir()

