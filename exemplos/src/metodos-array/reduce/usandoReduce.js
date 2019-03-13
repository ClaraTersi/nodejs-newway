const locations = require('./locations');
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const soma = array.reduce(function (valorAnterior, elem, index) {
  return valorAnterior + elem;
}, 0);

const agrupados = array.reduce(function (valorAnterior, valorAtual, index) {
  if(valorAtual % 2 === 0) {
    valorAnterior.par.push(valorAtual);
  } else {
    valorAnterior.impar.push(valorAtual);
  }
  return valorAnterior;
}, { par: [], impar: [] });

console.log(`Soma: ${soma}`);
console.log('Agrupados:', agrupados);

const cidadesPorEstado = locations.reduce((valorInicial, valorAtual) => {
  valorInicial[valorAtual.state] = valorInicial[valorAtual.state] || [];
  valorInicial[valorAtual.state].push(valorAtual.city);
  return valorInicial;
}, {});

//console.log('Agrupamento por estado:', cidadesPorEstado);
