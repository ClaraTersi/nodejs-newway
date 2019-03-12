/**
 * Somar todos os valores de um array
 */
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const soma = array.reduce(function (valorAnterior, elem, index) {
  return valorAnterior + elem;
}, 0);

const agrupados = array.reduce(function (valorInicial, valorAtual, index) {
  if(valorAtual % 2 === 0) {
    valorInicial['par'] = valorInicial['par'] || [];
    valorInicial['par'].push(valorAtual);
  } else {
    valorInicial['impar'] = valorInicial['impar'] || [];
    valorInicial['impar'].push(valorAtual);
  }
  return valorInicial;
}, []);

console.log(`Array: ${array}`);
console.log(`Soma: ${soma}`);
console.log(`Agrupados: ${agrupados}`);