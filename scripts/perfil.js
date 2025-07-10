const valorPropriedade = 300000;
const iptu = 3000;

const arvoreLocalStorage = JSON.parse(localStorage.getItem('arvores') || '[]');
const numeroArvores = arvoreLocalStorage.length;

const descontoPorArvore = 75;
const iptuComDesconto = iptu - (numeroArvores * descontoPorArvore);

// Atualizar dados
const endereco_html = document.querySelector('#endereco');
const valor_propriedade_html = document.querySelector('#valor_propriedade');
const iptu_html = document.querySelector('#iptu');
const arvores_plantadas_html = document.querySelector('#arvores_plantadas');
const iptu_desconto_html = document.querySelector('#iptu_desconto');

endereco_html.textContent = localStorage.getItem('endereco') + ' - ' + localStorage.getItem('cidade');
valor_propriedade_html.textContent = 'R$' + valorPropriedade + ',00';
iptu_html.textContent = 'R$' + iptu;
arvores_plantadas_html.textContent = numeroArvores;
iptu_desconto_html.textContent = 'R$' + iptuComDesconto + ',00';