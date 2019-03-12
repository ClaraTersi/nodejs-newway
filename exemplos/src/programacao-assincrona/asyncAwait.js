const fetch = require('node-fetch');

async function pegarNome() {
  const res = await fetch('https://api.github.com/users/claratersi');
  const data = await res.json();
  return data.name;
}

async function mostrarNome() {
  const nome = await pegarNome();
  console.log(nome);
}

mostrarNome();