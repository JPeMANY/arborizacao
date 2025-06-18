const jsonUrl = 'dados/usuarios.json?' + new Date().getTime();
fetch(jsonUrl)
    .then(response => response.json()) // Converter a resposta para JSON
    .then(data => {
        const dados = data;
        atualizarPagina(dados);
    })
.catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

function atualizarPagina(dados) {
    const nome = document.querySelector('#nome');
    const cpf = document.querySelector('#cpf');

    nome.textContent = dados[0].nome;
}