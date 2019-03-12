const https = require('https');

async function pegarNome() {
  const res = await https.get('https://api.github.com/users/claratersi');
  const data = await res.json();
  return data.name;
}

async function mostrarNome() {
  const nome = await pegarNome();
  console.log(nome);
}

mostrarNome();