const fetch = require('node-fetch');

function pegarNome(nomeDeUsuario) {
  const res = fetch(`https://api.github.com/users/${nomeDeUsuario}`);
  const data = res.json(); // Erro, pois a resposta da req acima ainda não roi recebida
  return data.name;
}

function mostrarNome() {
  const nomeDeUsuario = 'claratersi';
  const nome = pegarNome(nomeDeUsuario);
  console.log(nome);
}

mostrarNome();