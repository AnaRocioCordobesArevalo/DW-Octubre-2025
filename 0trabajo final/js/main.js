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
        // Aquí iría el código del counter y btnNext/btnPrev que vimos antes
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


/*CARRITO*/

const cartToggle = document.getElementById('cart-toggle');
const cartDropdown = document.getElementById('cart-dropdown');

cartToggle.addEventListener('click', (e) => {
    e.preventDefault();
    cartDropdown.classList.toggle('is-open');
});

// Lógica básica de ejemplo para añadir productos
let count = 0;
function addToCart() {
    count++;
    document.getElementById('cart-count').innerText = count;
    // Aquí podrías añadir lógica para insertar el nombre del producto en el <ul>
}

// Ejemplo: Si tienes botones en el catálogo con la clase .btn-buy
document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', addToCart);
});

/*Eliminar productos del carrito
function eliminarDelCarrito(index) {
    // Elimina 1 elemento en la posición 'index'
    cartItems.splice(index, 1);
    
    // Refresca la interfaz
    actualizarInterfazCarrito();
}


/* TIENDA*/

// Variables del carrito
const cartCountElement = document.getElementById('cart-count');
const cartItemsList = document.getElementById('cart-items-list');
const cartTotalElement = document.getElementById('cart-total-price');

let cartItems = [];
let totalAmount = 0;

// Función para añadir al carrito
document.querySelectorAll('.btn-add-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const name = e.target.getAttribute('data-name');
        const price = parseFloat(e.target.getAttribute('data-price'));

        // Añadir a la lista lógica
        cartItems.push({ name, price });
        
        actualizarInterfazCarrito();
    });
});

function actualizarInterfazCarrito() {
    // 1. Limpiar lista actual
    cartItemsList.innerHTML = '';
    
    // 2. Si está vacío, mostrar mensaje
    if (cartItems.length === 0) {
        cartItemsList.innerHTML = '<li class="empty-msg">El carrito está vacío</li>';
    } else {
        // 3. Renderizar cada producto
        cartItems.forEach((item, index) => {
            const li = document.createElement('li');
            li.style.display = 'flex';
            li.style.justifyContent = 'space-between';
            li.style.marginBottom = '10px';
            li.innerHTML = `
                <span>${item.name}</span>
                <span>${item.price.toFixed(2)}€</span>
            `;
            cartItemsList.appendChild(li);
        });
    }

    // 4. Actualizar contador y total
    cartCountElement.innerText = cartItems.length;
    totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);
    cartTotalElement.innerText = `${totalAmount.toFixed(2)}€`;
}