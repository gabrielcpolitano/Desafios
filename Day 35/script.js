function alterarSrc() {
  // Seleciona o elemento da imagem pelo ID
  const imagem = document.getElementById('minhaImagem');
  
  // Verifica a imagem atual e altera o valor do atributo src
  if (imagem.src.includes('image.png')) {
      imagem.src = 'image1.png';
  } else {
      imagem.src = 'image.png';
  }
}

function criarTextoSobreImagem() {
  // Seleciona o elemento de texto sobre a imagem pelo ID
  const texto = document.getElementById('textoSobreImagem');
  
  // Altera a propriedade display para mostrar o texto
  texto.style.display = 'block';
  if (texto.textContent === "🌍hello world🌍") {
    texto.textContent = "👓Somente a pratica leva a perfeição.👓";

  } else if (texto.textContent === "👓Somente a pratica leva a perfeição.👓") {
    texto.textContent = "🏆Parabéns🏆"

  } else {
    texto.textContent = "🌍hello world🌍"
  }
}

document.getElementById('meuBotao').addEventListener('mouseover', function() {
  this.style.backgroundColor = '#ff6347'
})

document.getElementById('meuBotao').addEventListener('mouseout', function() {
  this.style.backgroundColor = '#1CAF50'
})