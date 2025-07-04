const botaoEnviar = document.getElementById('btnEnviar');
const botaoRedirecionar = document.getElementById('btnIrPagina');

const nome = document.getElementById('nome');
const cpf = document.getElementById('cpf');
const senha = document.getElementById('senha');

// Verificação
if (!localStorage.getItem('nome') && localStorage.getItem('cpf')) {
    window.location.href = 'inicio.html';
}

// Formatar input CPF
function formatarCPF(campo) {
    // Remover todos os caracteres que não são números
    let valor = campo.value.replace(/\D/g, '');

    // Verificar se o valor tem mais de 11 caracteres e limitar
    if (valor.length > 11) {
        valor = valor.substring(0, 11);
    }

    // Adicionar pontos e traço conforme o formato do CPF
    if (valor.length <= 3) {
        campo.value = valor;
    } else if (valor.length <= 6) {
        campo.value = valor.replace(/(\d{3})(\d{1,})/, '$1.$2');
    } else if (valor.length <= 9) {
        campo.value = valor.replace(/(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3');
    } else {
        campo.value = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3-$4');
    }
}

// Botão enviar formulário
botaoEnviar.addEventListener('click', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    if (nome.value && cpf.value.length === 14 && senha.value) {
        localStorage.setItem('nome', nome);
        localStorage.setItem('cpf', cpf);

        window.location.href = 'inicio.html';
    } else {
        alert('Preencha todos os campos')   
    }
});
