const https = require('https');

function pegarNome() {
  const res = https.get('https://api.github.com/users/claratersi');
  const data = res.json();
  return data.name;
}

function mostrarNome() {
  const nome = pegarNome();
  console.log(nome);
}

mostrarNome();