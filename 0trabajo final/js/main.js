document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menuPpal = document.querySelector('.menuppal');
    const body = document.body;

    function toggleMenu(event) {
        // Alternar clases activas
        hamburger.classList.toggle('is-active');
        menuPpal.classList.toggle('is_active');
        
        // Bloquear el scroll del body al abrir el menú
        body.classList.toggle('is-active');

        // Evitar comportamiento por defecto si es necesario
        if (event) event.preventDefault();
    }

    // Evento de click
    hamburger.addEventListener('click', toggleMenu, false);

    // Cerrar menú si se hace click en un enlace del menú móvil
    const menuLinks = document.querySelectorAll('.menuppal a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuPpal.classList.contains('is_active')) {
                toggleMenu();
            }
        });
    });
});