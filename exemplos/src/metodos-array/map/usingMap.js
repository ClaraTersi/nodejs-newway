/**
 * Multiplicando cada item do array por 2
 */
const arrayOriginal = [1, 2, 3];

const arrayNova = arrayOriginal.map((elem) => {
  return elem * 2;
});

console.log(`Array original: ${arrayOriginal}`);
console.log(`Array nova: ${arrayNova}`);