document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider-track');
    const items = document.querySelectorAll('.slider-item');
    const btnNext = document.getElementById('btnNext');
    const btnPrev = document.getElementById('btnPrev');

    let counter = 0;
    const size = items.length;

    function moveSlider() {
        // Multiplicamos el índice actual por -100 para desplazar la pista
        track.style.transform = `translateX(${-counter * 100}%)`;
    }

    btnNext.addEventListener('click', () => {
        if (counter >= size - 1) {
            counter = 0; // Reinicia al primer slide
        } else {
            counter++;
        }
        moveSlider();
    });

    btnPrev.addEventListener('click', () => {
        if (counter <= 0) {
            counter = size - 1; // Va al último slide
        } else {
            counter--;
        }
        moveSlider();
    });

    // Opcional: Cambio automático cada 5 segundos
    setInterval(() => {
        btnNext.click();
    }, 5000);
});



