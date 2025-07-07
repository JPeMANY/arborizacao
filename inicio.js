// Verificar se usuário já está logado para mostrar formulário login
const nome_localStorage = localStorage.getItem('nome');
const xp_localStorage = localStorage.getItem('xp');

const popupLogin = document.querySelector('#popup_login');

if (!nome_localStorage && !xp_localStorage) {
    abrirFecharPopup();
} else{
    atualizarSite();
}

const btnFecharPopup = document.querySelector('.icon_fechar_popup');
btnFecharPopup.addEventListener('click', () => {
    abrirFecharPopup();
})

function abrirFecharPopup() {
    popupLogin.classList.toggle('none');
}


// Atualizar dados de nome e número de xp
const nome_h1 = document.querySelector('#nome_usuario');
const xp_span = document.querySelector('#xp');

function atualizarSite() {
    nome_h1.textContent = nome_localStorage;
    xp_span.textContent = xp_localStorage;
}


// Formulário
document.getElementById('popup_login').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const endereco = document.getElementById('endereco').value.trim();

    // Verifica se todos os campos estão preenchidos
    if (nome && cidade && senha && endereco) {
    // Salva os dados no localStorage (exceto a senha)
    localStorage.setItem('nome', nome);
    localStorage.setItem('cidade', cidade);
    localStorage.setItem('endereco', endereco);

    abrirFecharPopup();

    } else {
    alert('Por favor, preencha todos os campos.');
    }
});