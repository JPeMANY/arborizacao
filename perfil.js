const valorPropriedade = 1200;
const iptu = 40;

const arvoresPlantadas = 0 | Number(localStorage.getItem('arvoresPlantadas')); 
const descontoPorArvore = 3;
const iptuComDesconto = iptu - (arvoresPlantadas * descontoPorArvore);

// Atualizar dados
const endereco_html = document.querySelector('#endereco');
const valor_propriedade_html = document.querySelector('#valor_propriedade');
const iptu_html = document.querySelector('#iptu');
const arvores_plantadas_html = document.querySelector('#arvores_plantadas');
const iptu_desconto_html = document.querySelector('#iptu_desconto');

endereco_html.textContent = localStorage.getItem('endereco');
valor_propriedade_html.textContent = valorPropriedade;
iptu_html.textContent = iptu;
arvores_plantadas_html.textContent = arvoresPlantadas;
iptu_desconto_html.textContent = iptuComDesconto;