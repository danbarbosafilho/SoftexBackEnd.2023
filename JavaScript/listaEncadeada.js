class Family {
    constructor(nome, idade, filho){
        this.nome = nome;
        this.idade = idade;
        this.filho = filho;
    }
}

const Bizavo = new Family('José', 76, null);
const Avo = new Family('Maria', 52, null);
const Pai = new Family('Renan', 28, null);
const Filho = new Family('Luara', 2, null);

Bizavo.filho = Avo;
Avo.filho = Pai;
Pai.filho = Filho;

class No {
    constructor(conteudo, proximo){
        this.conteudo = conteudo;
        this.proximo = proximo;
    }
}

// Criação da lista encadeada
const listaEncadeada = new No(Bizavo, null);
let atual = listaEncadeada;

const familyArray = [Avo, Pai, Filho];

for (let i = 0; i < familyArray.length; i++) {
    const novoNo = new No(familyArray[i], null);
    atual.proximo = novoNo;
    atual = novoNo;
}

// Exibição da lista encadeada com informações sobre os filhos
atual = listaEncadeada;

while (atual !== null) {
    console.log(`Nome: ${atual.conteudo.nome}, Idade: ${atual.conteudo.idade}`);
    
    if (atual.conteudo.filho !== null) {
        console.log(`Filho: ${atual.conteudo.filho.nome}`);
    }
    
    atual = atual.proximo;
}