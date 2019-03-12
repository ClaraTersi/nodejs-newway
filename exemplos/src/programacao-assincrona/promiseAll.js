const promise1 = new Promise(function (resolve, reject) {
  setTimeout(function() {
    resolve('Promise 1 foi resolvida');
  }, 3000);
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(function() {
    resolve('Promise 2 foi resolvida');
  }, 3000);
});

Promise.all([promise1, promise2])
  .then(function (resultados) {
    console.log(resultados[0]);
    console.log(resultados[1]);
  })
  .catch((erro) => {
    console.log(erro);
  });