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

endereco_html.innerHTML = '<i class="fi fi-rr-marker"></i>' + localStorage.getItem('endereco') + ' - ' + localStorage.getItem('cidade');
valor_propriedade_html.textContent = formatar(valorPropriedade);
iptu_html.textContent = formatar(iptu);
arvores_plantadas_html.textContent = numeroArvores;
iptu_desconto_html.textContent = formatar(iptuComDesconto);

const btnResetar = document.getElementById('btnResetar');
btnResetar.addEventListener('click', ()=> {
    localStorage.clear();
    window.location.href = '/';
})

function formatar(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
