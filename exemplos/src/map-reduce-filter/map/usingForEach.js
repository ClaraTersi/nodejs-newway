const arrayOriginal = [1, 2, 3];
const arrayNova = [];

arrayOriginal.forEach((elem, index) => {
  arrayNova.push(elem * 2);
  // ou modificando a array orginal:
  // return arrayOriginial[index] = elem * 2;
});

console.log(`Array original: ${arrayOriginal}`);
console.log(`Array nova: ${arrayNova}`);