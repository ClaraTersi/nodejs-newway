/**
 * Pegar todos os números pares de um array
 */
const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrayDePares = [];

arrayOriginal.forEach((elem, index) => {
  if (elem % 2 === 0) arrayDePares.push(elem);
});

console.log(`Array original: ${arrayOriginal}`);
console.log(`Array de pares: ${arrayDePares}`);