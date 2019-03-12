const nome = 'Julio';

const dobrar = numero => numero * 2; 

const informarDobroComArrowFunction = (nome, numero) => {
    const dobro = dobrar(numero);
    return `${this.nome}, o dobro desse número é ${dobro}`;
};

function informarDobroSemArrowFunction(nome, numero) {
    const dobro = dobrar(numero);
    return `${this.nome}, o dobro desse número é ${dobro}`;
};

console.log(informarDobroComArrowFunction('Clara', 2));
console.log(informarDobroSemArrowFunction('Clara', 3));

