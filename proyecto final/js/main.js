(() => {
    "use strict";

    const hamburger = document.querySelector('.hamburger');
    const menuPpal = document.querySelector('.menuppal');
    const body = document.body;

    let isMenuOpen = false; // JS - Variables: Nomenclatura booleana

    const toggleMenuHandler = (event) => {
        if (event) event.preventDefault();
        
        isMenuOpen = !isMenuOpen;

        // Gestión de clases CSS para activar animaciones
        hamburger.classList.toggle('is-active');
        menuPpal.classList.toggle('is_active');
        body.classList.toggle('is-active'); 
    };

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenuHandler, false);
    }

    /* --- Lógica del Carrusel (Añadir aquí si tienes sliderTrack) --- */
    const track = document.getElementById('sliderTrack');
    if (track) {
        // Aquí iría el código del counter y btnNext/btnPrev 
    }

})();

/*CARRUSEL*/


document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carouselTrack');
    const items = document.querySelectorAll('.carousel-item');
    const btnNext = document.getElementById('btnNext');
    const btnPrev = document.getElementById('btnPrev');

    if (!track || items.length === 0) return; // Evita errores si el elemento no existe

    let counter = 0;
    const totalItems = items.length;

    /**
     * Función para actualizar el desplazamiento y la accesibilidad
     */
    const updateCarousel = () => {
        
        track.style.transform = `translateX(-${counter * 100}%)`;
        
        
        btnNext.setAttribute('aria-expanded', 'true');
    };

    
    btnNext.addEventListener('click', () => {
        counter = (counter + 1) % totalItems;
        updateCarousel();
    });

    btnPrev.addEventListener('click', () => {
        counter = (counter - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    /* Control de intervalos
     * Es buena práctica limpiar intervalos o permitir que el usuario los detenga.
     */
    let autoPlay = setInterval(() => {
        btnNext.click();
    }, 5000);

    // Detener el auto-play cuando el usuario interactúa.
    const stopAutoPlay = () => clearInterval(autoPlay);
    btnNext.addEventListener('mouseenter', stopAutoPlay);
    btnPrev.addEventListener('mouseenter', stopAutoPlay);
});


