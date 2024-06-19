        // Função para clonar imagem
        const cloneButton = document.getElementById('clone-button');
        cloneButton.addEventListener('click', function() {
            const originalImage = document.getElementById('original-image');
            const clonedImage = originalImage.cloneNode(true);
            clonedImage.classList.add('toggle-visibility');
            const cloneDestination = document.getElementById('clone-destination');
            cloneDestination.appendChild(clonedImage);
        });

        // Função para mover elemento
        const moveButton = document.getElementById('move-button');
        moveButton.addEventListener('click', function() {
            const elementToMove = document.getElementById('element-to-move');
            const container1 = document.getElementById('container1');
            const container2 = document.getElementById('container2');

            if (container1.contains(elementToMove)) {
                container2.appendChild(elementToMove);
            } else {
                container1.appendChild(elementToMove);
            }
        });

        // Função para alternar visibilidade das imagens
        const toggleVisibilityButton = document.getElementById('toggle-visibility-button');
        toggleVisibilityButton.addEventListener('click', function() {
            const images = document.querySelectorAll('.toggle-visibility');
            images.forEach(function(image) {
                if (image.style.visibility === 'hidden') {
                    image.style.visibility = 'visible';
                } else {
                    image.style.visibility = 'hidden';
                }
            });
        });