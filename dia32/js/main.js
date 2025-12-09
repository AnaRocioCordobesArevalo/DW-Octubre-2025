document.addEventListener('DOMContentLoaded', () => {

    // --- Nivel 1: Cambios simples con eventos y Transiciones ---

    // 1. Alternar Colores de Texto y Fondo con Transición
    const colorText = document.getElementById('color-text');
    const colorButton = document.getElementById('color-button');
    // Establecer modo inicial (usaremos light-mode como clase inicial)
    colorText.classList.add('light-mode');

    colorButton.addEventListener('click', () => {
        // Alternar entre las clases 'light-mode' y 'dark-mode'
        if (colorText.classList.contains('light-mode')) {
            colorText.classList.remove('light-mode');
            colorText.classList.add('dark-mode');
        } else {
            colorText.classList.remove('dark-mode');
            colorText.classList.add('light-mode');
        }
    });

    // 2. Alternar Ancho con Transición
    const widthBox = document.getElementById('width-box');
    const widthButton = document.getElementById('width-button');
    // width-box ya tiene el ancho inicial en CSS (20vw)-no funciona

    widthButton.addEventListener('click', () => {
        // Alternar la clase 'wide-width' (que tiene 80vw)
        widthBox.classList.toggle('wide-width');
    });

    // --- Nivel 2: Animaciones y visibilidad ---

    // 3. Rotar y Escalar (Animación/Transformación)
    const animationBox = document.getElementById('animation-box');
    const animationButton = document.getElementById('animation-button');

    animationButton.addEventListener('click', () => {
        // Alternar la clase 'animated' (que aplica rotate y scale)
        animationBox.classList.toggle('animated');
    });

    // 4. Alternar Visibilidad (display: none/block)
    const displayBox = document.getElementById('display-box');
    const displayButton = document.getElementById('display-button');

    displayButton.addEventListener('click', () => {
        // Alternar la propiedad 'display' directamente.
        // NOTA: display: none/block es un cambio inmediato, no se puede transicionar.
        if (displayBox.style.display === 'none') {
            displayBox.style.display = 'block'; // Mostrar
        } else {
            displayBox.style.display = 'none'; // Ocultar
        }
    });

    // 5. Alternar Opacidad del Texto
    const opacityText = document.getElementById('opacity-text');
    const opacityButton = document.getElementById('opacity-button');
    // opacityText ya tiene la opacidad inicial en CSS (1)-No funciona

    opacityButton.addEventListener('click', () => {
        // Alternar la clase 'text-hidden' (que tiene opacity: 0)
        opacityText.classList.toggle('text-hidden');
    });

});



