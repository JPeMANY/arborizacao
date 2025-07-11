let inputSelecionado = false;
const main = document.querySelector('main');

const opcoes = document.querySelectorAll('.opcao-arvore');
	opcoes.forEach(opcao => {
	opcao.addEventListener('click', () => {
    	opcoes.forEach(o => o.classList.remove('selecionado'));
    	opcao.classList.add('selecionado');
    	const selecionado = opcao.querySelector('input[type="radio"]');
		selecionado.checked = true;
		inputSelecionado = selecionado.value;

    //   const ArrayArvores = localStorage.getItem('arvores') || [] ;
    //   ArrayArvores.push(opcao.querySelector('span').textContent);
    //   localStorage.setItem('arvores', ArrayArvores);

    //   console.log(ArrayArvores)
    });
});


if (arvores) {
	arvores.forEach(arvore => { criarArvore(arvore) });
} 

const botaoAdicionar = document.querySelector('button[type="submit"]');
botaoAdicionar.addEventListener('click', event => {
	event.preventDefault();

	if(!inputSelecionado) alert('Selecione uma árvore');
	else {
		criarArvore(inputSelecionado);
		abrirFecharPopup();
		arvores.push(inputSelecionado);
		localStorage.setItem('arvores', JSON.stringify(arvores));
	}
})

function criarArvore(tipo) {
	const cartao = document.createElement('div');
	cartao.classList = 'caixa arvore ' + formatarTexto(tipo);
	const imagem = document.createElement('img');
	imagem.src = `assets/${tipo}.png`;
	const span = document.createElement('span');
	span.textContent = tipo;
	const icon = document.createElement('div');
	icon.classList = 'icon_mais';
	icon.innerHTML = '<i class="fi fi-rr-menu-dots-vertical"></i>'
	cartao.appendChild(imagem);
	cartao.appendChild(span);
	cartao.appendChild(icon);

	main.appendChild(cartao);
}

const btnAdicionarArvore = document.querySelector('.adicionar_arvore');

btnAdicionarArvore.addEventListener('click', () => {
	abrirFecharPopup();
})

const caixasArvores = document.querySelectorAll('.arvore');

caixasArvores.forEach(c => {
	const icon = c.querySelector('.icon_mais');
	icon.addEventListener('click', () => {
		// Remove qualquer popup existente
		document.querySelectorAll('.popup_excluir').forEach(p => p.remove());

		// Cria o popup
		const popup = document.createElement('div');
		popup.classList.add('popup_excluir');
		popup.innerHTML = '<i class="fi fi-rr-trash"></i> Excluir';

		// Posiciona o popup ao lado do ícone clicado
		const rect = icon.getBoundingClientRect();
		popup.style.position = 'absolute';
		popup.style.top = `${window.scrollY + rect.top}px`;
		popup.style.left = `${window.scrollX + rect.left - 55}px`;


		// Adiciona ao body
		document.body.appendChild(popup);

		// Clique em "Excluir" remove a caixa
		popup.addEventListener('click', () => {
			const caixa = icon.closest('.caixa');
			caixa.remove();
			popup.remove();
			const itemExcluir = c.querySelector('span').textContent;
			let localStorageArvores = JSON.parse(localStorage.getItem('arvores')) || [];
			const index = localStorageArvores.indexOf(itemExcluir);
			if (index !== -1) {
				localStorageArvores.splice(index, 1);
				localStorage.setItem('arvores', JSON.stringify(localStorageArvores));
			}
		});
	});
});

// Fecha o popup ao clicar fora
document.addEventListener('click', e => {
	const isPopup = e.target.closest('.popup_excluir');
	const isIcon = e.target.closest('.icon_mais');
	if (!isPopup && !isIcon) {
		document.querySelectorAll('.popup_excluir').forEach(p => p.remove());
		caixasArvores.forEach(c => { c.style.zIndex = 0 });
	}
});

function formatarTexto(texto) {
  return texto
    .normalize("NFD")                 // Separa letras dos acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
    .replace(/[\s-]/g, "")           // Remove espaços e traços
    .toLowerCase();                  // Converte para minúsculas
}

// <i class="fi fi-rr-trash"></i>