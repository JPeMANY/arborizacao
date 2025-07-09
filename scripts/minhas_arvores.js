let inputSelecionado = false;

const opcoes = document.querySelectorAll('.opcao-arvore');
	opcoes.forEach(opcao => {
	opcao.addEventListener('click', () => {
    	opcoes.forEach(o => o.classList.remove('selecionado'));
    	opcao.classList.add('selecionado');
    	opcao.querySelector('input[type="radio"]').checked = true;
		inputSelecionado = true;

    //   const ArrayArvores = localStorage.getItem('arvores') || [] ;
    //   ArrayArvores.push(opcao.querySelector('span').textContent);
    //   localStorage.setItem('arvores', ArrayArvores);

    //   console.log(ArrayArvores)
    });
});

const botaoAdicionar = document.querySelector('button[type="submit"]');
botaoAdicionar.addEventListener('click', ()=> {
	if(!inputSelecionado) alert('Selecione uma árvore');
	else {
		
	}
})