function minhaFuncaoComPromise(valor) {
  return new Promise(function (resolve, reject) {
    if(valor > 0) resolve('Valor válido');
    else reject('Valor inválido.');
  });
}

minhaFuncaoComPromise(3)
  .then(function (resultado) {
    console.log(resultado);
  })
  .catch(function (erro) {
    console.log(erro);
  });