let inputSelecionado = false;
const nomeArvores = localStorage.getItem('arvores') || [];
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

const botaoAdicionar = document.querySelector('button[type="submit"]');
botaoAdicionar.addEventListener('click', event => {
	event.preventDefault();

	if(!inputSelecionado) alert('Selecione uma árvore');
	else {
		criarArvore(inputSelecionado);
		abrirFecharPopup();
		numeroArvores++;
		localStorage.setItem('numeroArvores', numeroArvores);
		nomeArvores.push(inputSelecionado);
	}
})

function criarArvore(tipo) {
	const cartao = document.createElement('div');
	cartao.classList = 'caixa';
	const imagem = document.createElement('img');
	imagem.src = `assets/${tipo}`;
	const span = document.createElement('span');
	span.textContent = tipo;
	const icon = document.createElement('div');
	icon.classList = 'icon_excluir';
	cartao.appendChild(imagem);
	cartao.appendChild(span);
	cartao.appendChild(icon);

	main.appendChild(cartao);
}

const btnAdicionarArvore = document.querySelector('.adicionar_arvore');

btnAdicionarArvore.addEventListener('click', () => {
	abrirFecharPopup();
})
