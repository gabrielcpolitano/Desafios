let estiloOriginal = true;

document.getElementById('alterar-estilo').addEventListener('click', () => {
    document.querySelectorAll('.minha-classe').forEach(elemento => {
        if (estiloOriginal) {
            elemento.style.color = 'red';
            elemento.style.fontSize = '25px';
        } else {
            elemento.style.color = 'rgb(255, 183, 0)';
            elemento.style.fontSize = '25px';
        }
    });
    estiloOriginal = !estiloOriginal;
});

document.getElementById('toggle-classe').addEventListener('click', () => {
    document.querySelectorAll('.minha-classe').forEach(elemento => {
        if (elemento.classList.contains('novo-estilo')) {
            elemento.classList.remove('novo-estilo');
            elemento.classList.add('outro-estilo');
        } else if (elemento.classList.contains('outro-estilo')) {
            elemento.classList.remove('outro-estilo');
            elemento.classList.add('novo-estilo');
        } else {
            elemento.classList.add('novo-estilo');
        }
    });
});