function minhaFuncao(callback) {
  console.log('Executando minha função...');
  setTimeout(callback, 5000);
}

function callback() {
  console.log('Callback executada!');
}

minhaFuncao(callback);