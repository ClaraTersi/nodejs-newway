/**
 * Somar todos os valores de um array
 */
const array = [1, 2, 3];
let soma = 0;

array.forEach((elem) => {
  soma += elem;
});

console.log(`Array: ${array}`);
console.log(`Soma: ${soma}`);