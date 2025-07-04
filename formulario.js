document.getElementById('btnEnviar').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;

    if (nome.value === null && cpf.value === null) {

    } else {
        
    }

    // Salva os valores no LocalStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('cpf', cpf);

    // Redireciona para a página /inicio.html
    window.location.href = 'inicio.html';
});
