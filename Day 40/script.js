let progress = 0;

function increaseProgress() {
    if (progress < 100) {
        progress += 10;
        const progressBar = document.getElementById('progress-bar');
        progressBar.style.width = progress + '%';
        progressBar.innerHTML = progress + '%';
    }
}

// Controle de Fluxo (Estruturas Condicionais):
    // Utiliza uma estrutura condicional if para verificar se a variável progress é menor que 100 antes de aumentar seu valor.

// Manipulação de Variáveis:
    // A variável progress é incrementada em 10 a cada vez que a função é chamada, representando o aumento do progresso.

// DOM (Document Object Model):
    // Utiliza document.getElementById('progress-bar') para selecionar o elemento HTML com o ID progress-bar. Isso permite manipular esse elemento diretamente via JavaScript.

// Estilização Inline:
    // Modifica o estilo inline do elemento selecionado, especificamente a propriedade width, para refletir o progresso atualizado em porcentagem (progress + '%').

// Manipulação de Conteúdo:
    // Atualiza o conteúdo interno (innerHTML) do elemento progress-bar para exibir a porcentagem atual de progresso.