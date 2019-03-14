const fetch = require('node-fetch');

async function pegarNome(nomeDeUsuario) {
  const res = await fetch(`https://api.github.com/users/${nomeDeUsuario}`);
  const data = await res.json();
  return data.name;
}

async function mostrarNome() {
  const nomeDeUsuario = 'claratersi';
  const nome = await pegarNome(nomeDeUsuario);
  console.log(nome);
}

mostrarNome();