document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetPanel = tab.getAttribute('aria-controls');

            // Actualizar estado de los botones
            tabs.forEach(t => {
                t.setAttribute('aria-selected', 'false');
                t.setAttribute('tabindex', '-1');
            });
            tab.setAttribute('aria-selected', 'true');
            tab.setAttribute('tabindex', '0');

            // Mostrar/Ocultar paneles
            tabPanels.forEach(panel => {
                if (panel.id === targetPanel) {
                    panel.removeAttribute('hidden');
                } else {
                    panel.setAttribute('hidden', '');
                }
            });
        });
    });
});



