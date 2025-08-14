// 1. Selecione o elemento <body> e armazene em uma variável
// O innerHTML recupera o conteúdo, mas você precisa do elemento em si para manipulá-lo.
let body = document.getElementsByTagName('body')[0];

// 2. Selecione todos os elementos <p> e armazene em uma variável
// O método correto é 'getElementsByTagName', com 's' no final.
let paragrafos = document.getElementsByTagName('p');

// 3. Selecione o elemento com id "meuId"
// O 'ID' é case sensitive. A correção é usar 'meuId'.
let elementoPorId = document.getElementById('meuId');

// ==================================================
// ==> CRIAR E ADICIONAR ELEMENTOS <==
// 4. Crie um novo elemento <h1>
let novoH1 = document.createElement('h1');

// 5. Defina o texto do h1 como "Minha Atividade DOM"
// O texto está correto, mas a variável é 'novoH1'.
novoH1.textContent = 'Minhas Atividade DOM';

// 6. Adicione o h1 ao body
// O nome da variável que você criou é 'novoH1'.
body.appendChild(novoH1);

// ==================================================
// ==> MODIFICAR ESTILOS <==
// 7. Mude a cor de fundo do body para "lightblue"
// A propriedade correta é 'backgroundColor' (camelCase), e a cor é 'lightblue'.
body.style.backgroundColor = 'lightblue';

// 8. Mude a cor do texto de todos os parágrafos para "darkgray"
for (let p of paragrafos) {
  p.style.color = 'darkgray';
}

// ==================================================
// ==> MANIPULAR ATRIBUTOS <==
// 9. Adicione uma classe "destaque" ao elemento com id "meuId"
// O ID é 'meuId', com 'I' maiúsculo.
document.getElementById('meuId').classList.add('destaque');

// 10. Adicione um atributo "title" com valor "Elemento destacado" ao mesmo elemento
// Novamente, o ID correto é 'meuId', e o valor do atributo 'title' está com um erro de digitação.
document.getElementById('meuId').setAttribute('title', 'Elemento destacado');