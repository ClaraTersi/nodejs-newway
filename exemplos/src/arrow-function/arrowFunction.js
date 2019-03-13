class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    exibirThisComArrowFunction() {
       const arrowFunction = () => console.log('Com Arrow Function:', this);
       arrowFunction();
    }

    exibirThisSemArrowFunction() {
        const anonymousFunction = function() { console.log('Sem Arrow Function:', this) };
        anonymousFunction();
    }
}

const pessoa = new Pessoa('Julio', 'Camargo');

pessoa.exibirThisComArrowFunction();
pessoa.exibirThisSemArrowFunction();
