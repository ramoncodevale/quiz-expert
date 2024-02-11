const perguntas = [
    {
      pergunta: "Qual time venceu a Copa Libertadores em 1990?",
      respostas: [
        "Boca Juniors",
        "São Paulo",
        "Nacional"
      ],
      correta: 1
    },
    {
      pergunta: "Quem ganhou a Liga dos Campeões da UEFA em 1991?",
      respostas: [
        "Barcelona",
        "Bayern de Munique",
        "Estrela Vermelha"
      ],
      correta: 2
    },
    {
      pergunta: "Qual equipe conquistou a Copa Intercontinental em 1992?",
      respostas: [
        "São Paulo",
        "Manchester United",
        "Barcelona"
      ],
      correta: 0
    },
    {
      pergunta: "Quem foi o campeão da Copa Libertadores em 1993?",
      respostas: [
        "Cruzeiro",
        "Vasco da Gama",
        "São Paulo"
      ],
      correta: 2
    },
    {
      pergunta: "Qual time venceu a Liga dos Campeões da UEFA em 1994?",
      respostas: [
        "Juventus",
        "Ajax",
        "Milan"
      ],
      correta: 1
    },
    {
      pergunta: "Quem ganhou a Copa Intercontinental em 1995?",
      respostas: [
        "Independiente",
        "Boca Juniors",
        "Real Madrid"
      ],
      correta: 2
    },
    {
      pergunta: "Qual equipe conquistou a Copa Libertadores em 1996?",
      respostas: [
        "River Plate",
        "Boca Juniors",
        "Cruzeiro"
      ],
      correta: 1
    },
    {
      pergunta: "Quem foi o vencedor da Liga dos Campeões da UEFA em 1997?",
      respostas: [
        "Manchester United",
        "Real Madrid",
        "Juventus"
      ],
      correta: 1
    },
    {
      pergunta: "Qual clube ganhou a Copa Intercontinental em 1998?",
      respostas: [
        "Real Madrid",
        "Milan",
        "São Paulo"
      ],
      correta: 0
    },
    {
      pergunta: "Quem ganhou a Copa Libertadores em 1999?",
      respostas: [
        "River Plate",
        "Boca Juniors",
        "São Paulo"
      ],
      correta: 1
    }
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