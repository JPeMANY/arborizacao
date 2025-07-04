const h1Nome = document.querySelector('#nome');
const spanCpf = document.querySelector('#cpf');

const nome = localStorage.getItem('nome');
const cpf = localStorage.getItem('cpf');

h1Nome.textContent = nome;
spanCpf.textContent = cpf;

const botaoNovaPropriedade = document.querySelector('.adcionarNovaPropriedade');
