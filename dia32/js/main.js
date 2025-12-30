document.addEventListener('DOMContentLoaded', () => {

    //Nivel 1

    // 1. Alternar Colores

    const colorText = document.getElementById('color-text');
    const colorButton = document.getElementById('color-button');
    colorButton.addEventListener('click', () => {
        colorText.classList.toggle('dark-mode');
    });



    // 2. Alternar Ancho-No sale :(

    const widthBox = document.getElementById('width-box');
    const widthButton = document.getElementById('width-button');
    widthButton.addEventListener('click', () => {
        widthBox.classList.toggle('wide-width');
    });

    // --- NIVEL 2 ---

    // 3. Rotar y Escalar
    const animationBox = document.getElementById('animation-box');
    const animationButton = document.getElementById('animation-button');
    animationButton.addEventListener('click', () => {
        animationBox.classList.toggle('animated');
    });
    // 4. Alternar Visibilidad (Display)
    const displayBox = document.getElementById('display-box');
    const displayButton = document.getElementById('display-button');
    displayButton.addEventListener('click', () => {
        // Display no admite transiciones, cambia instantáneamente
        displayBox.style.display = (displayBox.style.display === 'none') ? 'block' : 'none';
    });
    // 5. Opacidad-no me sale
    const opacityText = document.getElementById('opacity-text');
    const opacityButton = document.getElementById('opacity-button');
    opacityButton.addEventListener('click', () => {
        opacityText.classList.toggle('text-hidden');
    });

    // --- NIVEL 3 ---
    // 6 y 7. Celdas Aleatorias-ha sido un dolor
    const gridCells = document.querySelectorAll(".grid");
    const botonAleatorio = document.getElementById("botonAleatorio");
    let celdaAnterior = null;

    function rndNum(number) {
        return Math.floor(Math.random() * number);
    }

    botonAleatorio.addEventListener("click", () => {
        // Si hay una celda pintada, volver a blanco antes de pintar otra
        if (celdaAnterior) {
            celdaAnterior.style.backgroundColor = "white";
        }

        const rndCol = `rgb(${rndNum(256)}, ${rndNum(256)}, ${rndNum(256)})`;
        const indexRandom = rndNum(gridCells.length);
        const celdaRandom = gridCells[indexRandom];

        celdaRandom.style.backgroundColor = rndCol;
        celdaAnterior = celdaRandom;
    });

    const moveBox = document.getElementById('random-move-box');
    const moveButton = document.getElementById('move-button');

    moveButton.addEventListener('click', () => {
        const container = moveBox.parentElement;
        // Calculamos el espacio disponible restando el tamaño del div
        const maxX = container.clientWidth - moveBox.offsetWidth;
        const maxY = container.clientHeight - moveBox.offsetHeight;

        const randomX = rndNum(maxX);
        const randomY = rndNum(maxY);

        moveBox.style.left = `${randomX}px`;
        moveBox.style.top = `${randomY}px`;
    });
});