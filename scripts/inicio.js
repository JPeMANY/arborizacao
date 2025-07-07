// Verificar se usuário já está logado para mostrar formulário login
const nomeLocalStorage = localStorage.getItem('nome');
const xpLocalStorage = localStorage.getItem('xp');

const popupLogin = document.querySelector('#popup_login');

document.addEventListener('DOMContentLoaded', function() {
    if (!nomeLocalStorage && !xpLocalStorage) {
        abrirFecharPopup();
    } else {
        console.log('atualizar')
        atualizarSite();
    }
});

const btnFecharPopup = document.querySelector('.icon_fechar_popup');
btnFecharPopup.addEventListener('click', () => {
    abrirFecharPopup();
})

function abrirFecharPopup() {
    popupLogin.classList.toggle('none');
}


// Atualizar dados de nome e número de xp
const nomeSpan = document.getElementById('nomeUsuario');
const xpSpan = document.querySelector('#xp .numero');

function atualizarSite() {
    nomeSpan.textContent = nomeLocalStorage;
    xpSpan.textContent = xpLocalStorage;
}



// Formulário
document.getElementById('popup_login').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const endereco = document.getElementById('endereco').value.trim();

    // Verifica se todos os campos estão preenchidos
    if (nome && cidade && endereco) {
    // Salva os dados no localStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('cidade', cidade);
    localStorage.setItem('endereco', endereco);

    abrirFecharPopup();

    } else {
    alert('Por favor, preencha todos os campos.');
    }
});


// Tarefas

// JSON de tarefas
const tarefasLista = [
    {
        "icon": "🗑️",
        "nome": "Separar o lixo reciclável do orgânico",
        "xp": 20
    },
    {
        "icon": "🔋",
        "nome": "Levar pilhas e eletrônicos a um ponto de coleta",
        "xp": 25
    },
    {
        "icon": "🛒",
        "nome": "Evitar o uso de sacolas plásticas ao fazer compras",
        "xp": 10
    },
    {
        "icon": "🚲",
        "nome": "Andar a pé ou de bicicleta, em vez de ir de carro",
        "xp": 15
    },
    {
        "icon": "🚗",
        "nome": "Dar carona para reduzir a poluição",
        "xp": 30
    },
    {
        "icon": "🌱",
        "nome": "Cuidar de uma horta ou de uma árvore",
        "xp": 40
    }
];

// Função para criar o cartão de tarefa
function criarTarefa(tarefa) {
    // Criação da estrutura do cartão
    const tarefaDiv = document.createElement('div');
    tarefaDiv.classList.add('tarefa');

    // Criação do checkbox
    const checkboxDiv = document.createElement('div');
    checkboxDiv.classList.add('checkbox');
    checkboxDiv.innerHTML = `<i class="fi fi-rr-check"></i>`; // Ícone do checkbox

    // Criação do cartão de tarefa
    const cartaoDiv = document.createElement('div');
    cartaoDiv.classList.add('cartao');

    const iconSpan = document.createElement('span');
    iconSpan.classList.add('icon');
    iconSpan.textContent = tarefa.icon; // Emoji da tarefa

    const descricaoSpan = document.createElement('span');
    descricaoSpan.textContent = tarefa.nome; // Descrição da tarefa

    const xpSpan = document.createElement('span');
    xpSpan.classList.add('xp');
    xpSpan.innerHTML = `<span class="numero">${tarefa.xp}</span> XP`; // XP da tarefa

    // Adicionando os elementos dentro do cartão
    cartaoDiv.appendChild(iconSpan);
    cartaoDiv.appendChild(descricaoSpan);
    cartaoDiv.appendChild(xpSpan);

    // Adicionando o checkbox e o cartão à tarefa
    tarefaDiv.appendChild(checkboxDiv);
    tarefaDiv.appendChild(cartaoDiv);

    return tarefaDiv;
}

// Função para adicionar as tarefas na página
function adicionarTarefas() {
    const tarefasContainer = document.querySelector('.tarefas'); // Seleciona a div com class 'tarefas'

    tarefasLista.forEach(tarefa => {
        const tarefaElemento = criarTarefa(tarefa); // Cria o elemento da tarefa
        tarefasContainer.appendChild(tarefaElemento); // Adiciona na div 'tarefas'
    });

    const tarefas = document.querySelectorAll('.tarefa');
    tarefas.forEach(tarefa => {
        tarefa.addEventListener('click', () => {
            tarefa.classList.toggle('concluida');
            const xp = tarefa.querySelector('.xp .numero').textContent;
            if(tarefa.classList.contains('concluida')) {
                xpSpan.textContent = Number(xpSpan.textContent) + Number(xp);
            } else {
                xpSpan.textContent = Number(xpSpan.textContent) - Number(xp);
            }
            localStorage.setItem('xp', xpSpan.textContent);
        })
    })
}

// Chama a função para adicionar as tarefas
adicionarTarefas();

