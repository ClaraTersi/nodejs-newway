const promise1 = new Promise(function (resolve) {
  setTimeout(function() {
    console.log('Promise 1 foi resolvida');
    resolve('Promise 1 foi resolvida');
  }, 3000);
});

const promise2 = new Promise(function (resolve) {
  setTimeout(function() {
    console.log('Promise 2 foi resolvida');
    resolve('Promise 2 foi resolvida');
  }, 6000);
});

Promise.all([promise1, promise2])
  .then(function (resultados) {
    console.log('As duas promises foram resolvidas')
  })
  .catch((erro) => {
    console.log(erro);
  });