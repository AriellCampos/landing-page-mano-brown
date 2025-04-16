// 1. Declaração de Variáveis
function declaracaoVariaveis() {
  let nome = "Ariel";
  const idade = 30;
  var cidade = "Sorocaba";
  console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`);
}

// 2. Tipos de Dados
function tiposDeDados() {
  let numero = 42;
  let texto = "Olá, mundo!";
  let booleano = true;
  let lista = [1, 2, 3];
  let objeto = { nome: "Ariel", idade: 30 };
  console.log(
    typeof numero,
    typeof texto,
    typeof booleano,
    typeof lista,
    typeof objeto
  );
}

// 3. Operadores Básicos
function operadoresBasicos() {
  let a = 10,
    b = 5;
  console.log(a + b, a - b, a * b, a / b, a % b);
}

// 4. Estruturas Condicionais
function estruturasCondicionais() {
  let idade = 18;
  if (idade >= 18) {
    console.log("Maior de idade");
  } else {
    console.log("Menor de idade");
  }
}

// 5. Laços de Repetição
function lacosDeRepeticao() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Iteração: ${i}`);
  }
}

// 6. Funções e Arrow Functions
function funcoesEArrowFunctions() {
  function soma(a, b) {
    return a + b;
  }

  const multiplica = (a, b) => a * b;

  console.log(soma(3, 4));
  console.log(multiplica(3, 4));
}

// 7. Arrays e Métodos de Arrays
function arraysEMetodos() {
  let numeros = [1, 2, 3, 4, 5];

  // MAP: cria um novo array com os valores dobrados
  console.log(
    "map:",
    numeros.map((n) => n * 2)
  );

  // FILTER: cria um novo array apenas com números maiores que 2
  console.log(
    "filter:",
    numeros.filter((n) => n > 2)
  );

  // FIND: encontra o primeiro número maior que 3
  console.log(
    "find:",
    numeros.find((n) => n > 3)
  );

  // REDUCE: soma todos os números
  console.log(
    "reduce:",
    numeros.reduce((acc, n) => acc + n, 0)
  );

  // SOME: verifica se existe algum número maior que 4
  console.log(
    "some:",
    numeros.some((n) => n > 4)
  );

  // EVERY: verifica se todos os números são maiores que 0
  console.log(
    "every:",
    numeros.every((n) => n > 0)
  );

  // SORT: ordena os números do maior para o menor
  console.log(
    "sort (decrescente):",
    [...numeros].sort((a, b) => b - a)
  );

  // INCLUDES: verifica se o número 3 está no array
  console.log("includes:", numeros.includes(3));

  // FOREACH: itera sobre cada número e imprime
  console.log("forEach:");
  numeros.forEach((n) => console.log(n));
}

// 8. Manipulação do DOM
function manipulacaoDoDom() {
  document.body.style.backgroundColor = "lightblue";
  console.log("Cor de fundo alterada!");
}

// 8.1. Manipulação do DOM - Parte 2
function principaisUsosDoDocument() {
  // Pegando um elemento pelo ID
  const titulo = document.getElementById("meuTitulo");
  console.log("Elemento por ID:", titulo);

  // Pegando elementos pela classe (retorna uma lista)
  const botoes = document.getElementsByClassName("button");
  console.log("Elementos por Classe:", botoes);

  // Pegando elementos pela tag (retorna uma lista)
  const paragrafos = document.getElementsByTagName("p");
  console.log("Elementos por Tag:", paragrafos);

  // Pegando o primeiro elemento que combinar com o seletor (ID, classe, tag, etc.)
  const primeiroBotao = document.querySelector(".button");
  console.log("Primeiro elemento por Seletor:", primeiroBotao);

  // Pegando todos os elementos que combinam com o seletor (retorna uma NodeList)
  const todosOsBotoes = document.querySelectorAll(".button");
  console.log("Todos os elementos por Seletor:", todosOsBotoes);

  // Modificando o texto de um elemento
  if (titulo) {
    titulo.innerText = "Novo Título!";
  }

  // Modificando o estilo de um botão
  if (primeiroBotao) {
    primeiroBotao.style.backgroundColor = "lightblue";
  }

  // Criando e adicionando um novo elemento
  const novoParagrafo = document.createElement("p"); // Cria um novo <p>
  novoParagrafo.innerText = "Este parágrafo foi criado dinamicamente!";
  novoParagrafo.style.color = "green"; // Estiliza o parágrafo

  // Adiciona o novo parágrafo no body
  document.body.appendChild(novoParagrafo);
}

// 9. Eventos no JavaScript
function eventosNoJavaScript() {
  document.addEventListener("click", () => {
    console.log("Página clicada!");
  });
}

// 10. Objetos e JSON
function objetosEJson() {
  let pessoa = { nome: "Ariel", idade: 30 };
  let json = JSON.stringify(pessoa);
  console.log(json);
}

// 11. LocalStorage
// É uma forma de armazenar dados no navegador que **persistem mesmo depois que a aba ou o navegador são fechados**.
// Os dados só são removidos manualmente ou pelo próprio site usando JavaScript.
function localStorageFuncoes() {
  // SET: salvar uma informação
  localStorage.setItem("nome", "Ariel");

  // GET: recuperar a informação
  console.log("LocalStorage GET:", localStorage.getItem("nome"));

  // UPDATE: atualizar é igual ao setItem, sobrescreve o valor
  localStorage.setItem("nome", "Ariel Atualizado");
  console.log("LocalStorage UPDATE:", localStorage.getItem("nome"));

  // DELETE: remover uma informação
  localStorage.removeItem("nome");
  console.log(
    "LocalStorage DELETE (após remoção):",
    localStorage.getItem("nome")
  ); // null

  // CLEAR: remover tudo do localStorage
  localStorage.setItem("temp", "valor temporário");
  localStorage.clear();
  console.log(
    "LocalStorage CLEAR (após limpar tudo):",
    localStorage.getItem("temp")
  ); // null
}

// 12. SessionStorage:
// É semelhante ao LocalStorage, mas **os dados só ficam salvos enquanto a aba do navegador estiver aberta**.
// Quando a aba é fechada, tudo é apagado automaticamente.
function sessionStorageFuncoes() {
  // SET: salvar uma informação
  sessionStorage.setItem("usuario", "Jogador1");

  // GET: recuperar a informação
  console.log("SessionStorage GET:", sessionStorage.getItem("usuario"));

  // UPDATE: atualizar é igual ao setItem também
  sessionStorage.setItem("usuario", "Jogador1 Atualizado");
  console.log("SessionStorage UPDATE:", sessionStorage.getItem("usuario"));

  // DELETE: remover uma informação
  sessionStorage.removeItem("usuario");
  console.log(
    "SessionStorage DELETE (após remoção):",
    sessionStorage.getItem("usuario")
  ); // null

  // CLEAR: remover tudo do sessionStorage
  sessionStorage.setItem("tempSession", "valor temporário");
  sessionStorage.clear();
  console.log(
    "SessionStorage CLEAR (após limpar tudo):",
    sessionStorage.getItem("tempSession")
  ); // null
}

// 13. Trabalhando com APIs (Fetch)
function trabalhandoComApis() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Erro ao buscar API:", error));
}

// 14. Trabalhando com APIs (Fetch) usando async/await
async function trabalhandoComApis() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erro ao buscar API:", error);
  }
}


// Função para explicar Promise com async/await usando o exemplo do bolo
async function pedirBolo() {
  console.log("Você pediu um bolo...");

  try {
    const resposta = await fazerBolo();
    console.log(resposta);
  } catch (erro) {
    console.error("Algo deu errado com o bolo:", erro);
  }
}

// Função que simula fazer o bolo (retorna uma Promise)
function fazerBolo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const boloPronto = true; // Troque para false para simular erro

      if (boloPronto) {
        resolve("Bolo pronto! Aqui está o seu bolo!");
      } else {
        reject("Não conseguimos fazer o bolo");
      }
    }, 2000); // Espera 2 segundos para simular o tempo de fazer o bolo
  });
}

//Criando um card dinâmico
function criarCard(data) {
  // 1. Seleciona a section onde queremos adicionar o card
  const projectsSection = document.querySelector(".projects");

  // 2. Cria o card dinamicamente
  const card = document.createElement("div");
  card.classList.add("card");

  // 3. Parte esquerda do card
  const cardLeft = document.createElement("div");
  cardLeft.classList.add("card-left");

  const title = document.createElement("h3");
  title.innerText = data.title; // Usa o título da API

  const body = document.createElement("p");
  body.innerText = data.body; // Usa o corpo da API

  const button = document.createElement("button");
  button.classList.add("secondary");
  button.innerText = "Ver Projeto";

  cardLeft.appendChild(title);
  cardLeft.appendChild(body);
  cardLeft.appendChild(button);

  // 4. Parte direita do card
  const cardRight = document.createElement("div");
  cardRight.classList.add("card-right");

  const img = document.createElement("img");
  img.src = "assets/img/racionais.png"; // Imagem padrão
  img.alt = "Imagem do cantor de rap Mano Brown";

  cardRight.appendChild(img);

  // 5. Monta o card final
  card.appendChild(cardLeft);
  card.appendChild(cardRight);

  // 6. Insere o card dentro da section
  projectsSection.appendChild(card);
}

// Função principal que chama todas as outras
function main() {
  declaracaoVariaveis();
  tiposDeDados();
  operadoresBasicos();
  estruturasCondicionais();
  lacosDeRepeticao();
  funcoesEArrowFunctions();
  manipulacaoDoDom();
  eventosNoJavaScript();
  arraysEMetodos();
  objetosEJson();
  localStorageFuncoes();
  sessionStorageFuncoes();
  trabalhandoComApis();
  pedirBolo();
}

// Executa a função principal
main();

// (function () {
//   main();
// })();
