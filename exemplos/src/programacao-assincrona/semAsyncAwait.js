const fetch = require('node-fetch');

function pegarNome() {
  const res = fetch('https://api.github.com/users/claratersi');
  const data = res.json();
  return data.name;
}

function mostrarNome() {
  const nome = pegarNome();
  console.log(nome);
}

mostrarNome();