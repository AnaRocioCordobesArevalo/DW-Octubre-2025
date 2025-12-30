document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-load');
    const contentDiv = document.getElementById('dinamic-content');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const url = btn.getAttribute('data-url');

            fetch(url)
                .then(response => {
                    if (!response.ok) throw new Error("No se pudo cargar el archivo");
                    return response.text();
                })
                .then(html => {
                    // Quitamos la animación anterior
                    contentDiv.classList.remove('fade-in');
                    
                    // Forzamos reinicio de la animación (hack de reflow)
                    void contentDiv.offsetWidth;

                    // Insertamos contenido y aplicamos animación
                    contentDiv.innerHTML = html;
                    contentDiv.classList.add('fade-in');
                })
                .catch(err => {
                    contentDiv.innerHTML = `<p style="color:red">Error: ${err.message}</p>`;
                });
        });
    });
});
