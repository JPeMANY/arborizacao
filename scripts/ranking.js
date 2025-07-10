const ranking = document.querySelector('.ranking');

// Lista original dos participantes (exceto "Você", que será adicionado abaixo com xpLocalStorage)
const participantes = [
    { icon: 1, nome: "Luana Costa", xp: 130 },
    { icon: 2, nome: "Bruno Ferreira", xp: 125 },
    { icon: 3, nome: "Ana Lima", xp: 120 },
    { icon: 4, nome: "Ricardo Melo", xp: 115 },
    { icon: 5, nome: "Camila Duarte", xp: 110 },
    { icon: 6, nome: "Mateus Rocha", xp: 105 },
    { icon: 7, nome: "Juliana Martins", xp: 100 },
    { icon: 8, nome: "Felipe Oliveira", xp: 95 },
    { icon: 9, nome: "Marina Souza", xp: 90 },
    { icon: 10, nome: "Gabriel Nunes", xp: 85 },
    { icon: 11, nome: "Clara Ribeiro", xp: 70 },
    { icon: 12, nome: "Eduardo Moreira", xp: 55 },
    { icon: 14, nome: "Tiago Silva", xp: 0 },
    { icon: 15, nome: "Renata Almeida", xp: 0 }
];

// Adiciona o usuário com o XP do localStorage
participantes.push({ icon: 13, nome: "Você", xp: xpLocalStorage });

// Ordena os participantes do maior para o menor XP
participantes.sort((a, b) => b.xp - a.xp);

// Cria os elementos HTML para cada participante
participantes.forEach((p, index) => {
    const div = document.createElement('div');
    div.classList.add('participante');

    const spanPosicao = document.createElement('span');
    spanPosicao.classList.add('posicao');
    spanPosicao.textContent = `#${index + 1}`;

    const img = document.createElement('img');
    img.src = `assets/users/${p.icon}.svg`;
    img.alt = 'usuario';

    const spanNome = document.createElement('span');
    spanNome.classList.add('nome');
    spanNome.textContent = p.nome;

    const spanXP = document.createElement('span');
    spanXP.classList.add('xp');
    spanXP.textContent = `${p.xp}xp`;

    div.appendChild(spanPosicao);
    div.appendChild(img);
    div.appendChild(spanNome);
    div.appendChild(spanXP);

    ranking.appendChild(div);
});
