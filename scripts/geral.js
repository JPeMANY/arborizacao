const nomeLocalStorage = localStorage.getItem('nome');
const xpLocalStorage = localStorage.getItem('xp');

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