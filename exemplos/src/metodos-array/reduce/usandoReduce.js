/**
 * Somar todos os valores de um array
 */
const array = [1, 2, 3];

const soma = array.reduce((valorAnterior, elem, index) => {
  return valorAnterior + elem;
}, 0);

console.log(`Array: ${array}`);
console.log(`Soma: ${soma}`);