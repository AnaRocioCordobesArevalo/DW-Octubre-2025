/* JS - General: Estructura principal del sitio bajo una IIFE para proteger el scope */
(() => {
    "use strict";

    /* -------------------------------------------------------------------------- */
    /* 1. CONSTANTES (Selección de elementos del DOM)                             */
    /* -------------------------------------------------------------------------- */
    const hamburger = document.querySelector('.hamburger');
    const menuPpal = document.querySelector('.menuppal');
    const body = document.body;
    const navLinks = document.querySelectorAll('.menuppal a');

    /* -------------------------------------------------------------------------- */
    /* 2. VARIABLES (Estado de la aplicación)                                     */
    /* -------------------------------------------------------------------------- */
    let isMenuOpen = false; // JS - Variables: Nomenclatura booleana con "is"

    /* -------------------------------------------------------------------------- */
    /* 3. FUNCIONES / HANDLERS (Lógica de eventos)                                */
    /* -------------------------------------------------------------------------- */

    /**
     * Handler para alternar la visibilidad del menú móvil
     * @param {Event} event - Objeto del evento click
     */
    const toggleMenuHandler = (event) => {
        if (event) event.preventDefault();

        // Optimización: Uso de operadores ternarios para actualizar el estado
        isMenuOpen = !isMenuOpen;

        // Gestión de clases CSS
        hamburger.classList.toggle('is-active');
        menuPpal.classList.toggle('is_active');
        
        // Bloqueo de scroll en el body si el menú está activo
        body.classList.toggle('is-active');
    };

    /**
     * Handler para cerrar el menú al hacer click en un enlace (opcional)
     */
    const closeMenuHandler = () => {
        if (isMenuOpen) {
            toggleMenuHandler();
        }
    };

    /* -------------------------------------------------------------------------- */
    /* 4. ASIGNACIONES (Event Listeners)                                          */
    /* -------------------------------------------------------------------------- */

    // JS - Funciones y Eventos: Asignación al botón hamburguesa
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenuHandler, false);
    }

    // Cerrar menú automáticamente al pulsar un enlace para mejorar UX
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenuHandler, false);
        });
    }

})();