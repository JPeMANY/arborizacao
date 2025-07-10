let inputSelecionado = false;

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
		console.log(inputSelecionado)
	}
})