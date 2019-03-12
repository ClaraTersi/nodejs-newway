function saudar(nome, callback) {
  console.log(`Bem vindo, ${nome}!`);
  setTimeout(callback, 3000);
}

function callback(nome) {
  console.log(`O ${nome} foi saudado`);
}

saudar('julio', callback);