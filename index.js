const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de estilo orientado a objetos.",
        "Um sistema operacional.",
        "Um tipo de café especial.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Ele verifica se um elemento HTML está visível.",
        "Ele retorna o tipo de dado de uma expressão.",
        "Ele adiciona dois números.",
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variável myVar;",
        "myVar = variável;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Uma função que retorna um valor booleano.",
        "Um tipo de dado que armazena uma coleção de elementos.",
        "Uma estrutura de controle condicional.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Ele atribui um valor a uma variável.",
        "Ele verifica se dois valores são iguais em valor e tipo.",
        "Ele adiciona dois números e verifica se são iguais.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Uma variável que armazena um valor numérico.",
        "Um tipo de dado que armazena uma lista de valores.",
        "Um bloco de código reutilizável que executa uma tarefa específica.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de comentar uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "'Comentário",
        "<!-- Comentário -->",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um tipo de dado que armazena informações sobre o documento HTML.",
        "Um padrão de design para criar interfaces de usuário.",
        "Uma interface de programação que permite interagir com documentos HTML.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Ele seleciona o primeiro elemento de um documento HTML que corresponde a um seletor CSS especificado.",
        "Ele adiciona um evento de clique a um elemento HTML.",
        "Ele altera o estilo de um elemento HTML.",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma variável global em JavaScript?",
      respostas: [
        "Uma variável que só pode ser acessada dentro de uma função específica.",
        "Uma variável que pode ser acessada de qualquer lugar em um programa.",
        "Uma variável que armazena múltiplos valores.",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    // Clona o conteúdo do modelo (template)
    const quizItem = template.content.cloneNode(true)
    // Define o texto do elemento <h3> no conteúdo clonado como a pergunta atual
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
    // Itera sobre as respostas de cada pergunta
    for (let resposta of item.respostas) {
      // Clona o elemento <dt> dentro do conteúdo clonado
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      //  Define o texto do elemento <span> no <dt> clonado como a resposta atual
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      // Adiciona o elemento <dt> clonado (com a resposta) ao conteúdo clonado
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  
  }