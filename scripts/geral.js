const nomeLocalStorage = localStorage.getItem('nome');
const xpLocalStorage = Number(localStorage.getItem('xp')) || 0;

const arvores = JSON.parse(localStorage.getItem('arvores')) || [];

// Verificar se usuário já está logado para mostrar formulário login
document.addEventListener('DOMContentLoaded', function() {
    if (!nomeLocalStorage && !xpLocalStorage) {
        abrirFecharPopup();
    } else {
        atualizarSite();
    }
});


// Atualizar dados de nome e número de xp
const nomeSpan = document.getElementById('nomeUsuario');
const xpSpan = document.querySelector('#xp .numero');

function atualizarSite() {
    nomeSpan.textContent = nomeLocalStorage;
    xpSpan.textContent = xpLocalStorage;
}

if (document.querySelector('.popup')) {
    const popup = document.querySelector('.popup');

    const btnFecharPopup = document.querySelector('.icon_fechar_popup');
    btnFecharPopup.addEventListener('click', () => {
        abrirFecharPopup();
    })

    function abrirFecharPopup() {
        popup.classList.toggle('none');
    }
}