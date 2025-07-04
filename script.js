const h1Nome = document.querySelector('#nome');
const spanCpf = document.querySelector('#cpf');

const nome = localStorage.getItem('nome');
const cpf = localStorage.getItem('cpf');

h1Nome.textContent = nome;
spanCpf.textContent = cpf;

const botaoNovaPropriedade = document.querySelector('.adcionarNovaPropriedade');
const botaoFecharPopup = document.querySelector('.icon_fechar_popup');
const popup_adicionar_propriedade = document.getElementById('popup_adicionar_propriedade');

botaoNovaPropriedade.addEventListener('click', () => {
    abrirFecharPopup();
})

botaoFecharPopup.addEventListener('click', () => {
    abrirFecharPopup();
})

function abrirFecharPopup() {
    popup_adicionar_propriedade.classList.toggle('none');
}


const botoesExcluir = document.querySelectorAll('.opcoes .excluir');
const botoesEditar = document.querySelectorAll('.opcoes .editar');

botoesEditar.forEach(botao => {
    botao.addEventListener('click', () => {
        abrirFecharPopup();
    })
})

const cartoesPropriedades = document.querySelectorAll('#propriedades .caixa');
botoesExcluir.forEach(botao => {
    botao.addEventListener('click', (event, index) => {
        console.log(index)
    })
})