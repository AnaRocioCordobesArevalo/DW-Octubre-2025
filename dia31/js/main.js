document.addEventListener('DOMContentLoaded', (event) => {
    
    // --- 1. Cambiar el color de fondo de los elementos de la lista ---
    const elementosLista = document.querySelectorAll('#lista li');

    elementosLista.forEach((li, index) => {
        // Alternamos el color de fondo para distinguirlos
        li.style.backgroundColor = (index % 2 === 0) ? '#a2cffe' : '#bfedc7';
    });


    // --- 2. Añadir un emoji al final del texto de cada párrafo ---
    const parrafos = document.querySelectorAll('.parrafo');

    parrafos.forEach(p => {
        // Concatenamos el emoji al contenido existente
        p.textContent += ' 👍'; 
    });


    // --- 3. Cambiar el texto de todos los botones ---
    const botones = document.querySelectorAll('button');

    botones.forEach(boton => {
        // Reemplazamos el texto completo del botón
        boton.textContent = '¡Texto Cambiado!';
    });
    
});