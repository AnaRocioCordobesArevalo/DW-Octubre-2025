// ==========================================================
// NIVEL 1: OBJETOS Y PROPIEDADES
// ==========================================================

console.log("--- NIVEL 1: OBJETOS Y PROPIEDADES ---");

// 1. Crea un objeto alumno
const alumno = {
    nombre: 'Elena',
    apellido: 'Rodríguez',
    edad: 25,
    curso: 'Desarrollo Web'
};

// Accede a cada propiedad y muéstrala por consola
console.log("Acceso directo a propiedades:");
console.log(`Nombre: ${alumno.nombre}`);
console.log(`Apellido: ${alumno.apellido}`);
console.log(`Edad: ${alumno.edad}`);
console.log(`Curso: ${alumno.curso}`);

// 2. Desestructura el objeto
console.log("\nDesestructuración de objeto:");
const {
    nombre,
    apellido,
    edad,
    curso
} = alumno;
console.log(`Nombre (desestructurado): ${nombre}`);
console.log(`Apellido (desestructurado): ${apellido}`);

// 3. Añade un método al objeto
alumno.nombreCompleto = function() {
    console.log(`Nombre completo (método): ${this.nombre} ${this.apellido}`);
};

// Llama al nuevo método
alumno.nombreCompleto();


// ==========================================================
// NIVEL 2: OPERADORES SPREAD Y REST
// ==========================================================

console.log("\n--- NIVEL 2: OPERADORES SPREAD Y REST ---");

// 1. Crea una copia de un objeto usando el operador spread (...)
const alumnoCopia = {
    ...alumno,
    edad: 26 // Modificamos la edad en la copia para demostrar que es una copia independiente
};
console.log("Copia de objeto (Spread):", alumnoCopia);
console.log("Objeto original:", alumno);

// 2. Junta varios arrays en uno solo usando spread
const frutas = ['manzana', 'pera'];
const verduras = ['zanahoria', 'lechuga'];
const legumbres = ['lentejas'];

const alimentos = [...frutas, ...verduras, ...legumbres, 'arroz'];
console.log("Arrays unidos (Spread):", alimentos);

// 3. Crea una función que acepte un número indefinido de argumentos y devuelva su suma (operador rest)
function sumarTodo(...numeros) {
    console.log("Argumentos recibidos (Rest):", numeros);
    return numeros.reduce((acumulador, actual) => acumulador + actual, 0);
}

const resultadoSuma = sumarTodo(10, 20, 5, 2);
console.log("Suma de argumentos (Rest):", resultadoSuma);

// 4. Extrae parte de un array o de un objeto usando rest en la desestructuración
const [primero, segundo, ...restoArray] = alimentos;
console.log("Resto de array (Rest en desestructuración):", restoArray); // Muestra ['zanahoria', 'lechuga', 'lentejas', 'arroz']

const {
    nombre: nombreAlumno,
    edad: edadAlumno,
    ...otrosDatos
} = alumno;
console.log("Otros datos de alumno (Rest en desestructuración):", otrosDatos); // Muestra {apellido: 'Rodríguez', curso: 'Desarrollo Web', nombreCompleto: ƒ}


// ==========================================================
// NIVEL 3: MANIPULACIÓN DEL DOM (BÁSICO)
// ==========================================================

console.log("\n--- NIVEL 3: MANIPULACIÓN DEL DOM ---");

// 1. Cambiar el contenido de un <p>
const parrafo = document.getElementById('parrafo-a-cambiar');
parrafo.textContent = "¡El contenido del párrafo ha sido cambiado con JavaScript!";

// 2. Crear una etiqueta <ul> y añadirle un <li>
const listaVacia = document.getElementById('lista-vacia');

// Crear y añadir el primer <li>
const nuevoItem1 = document.createElement('li');
nuevoItem1.textContent = "Primer elemento añadido con JS";
listaVacia.appendChild(nuevoItem1);

// Crear y añadir un segundo <li>
const nuevoItem2 = document.createElement('li');
nuevoItem2.innerHTML = "<strong>Segundo</strong> elemento";
listaVacia.appendChild(nuevoItem2);


// 3. Cambiar el color de un elemento cuando se haga clic en él
const divCambiaColor = document.getElementById('div-cambia-color');

// Función para cambiar el color
function cambiarColor() {
    // Usamos toggle para añadir/quitar la clase 'clicked'
    divCambiaColor.classList.toggle('clicked');
    
    // También podemos cambiar el estilo directamente:
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    divCambiaColor.style.backgroundColor = randomColor;
}

// Añadir el 'event listener'
divCambiaColor.addEventListener('click', cambiarColor);


// 4. Eliminar un elemento del DOM al pulsar un botón
const botonEliminar = document.getElementById('boton-eliminar');
const elementoAeliminar = document.getElementById('elemento-a-eliminar');

botonEliminar.addEventListener('click', () => {
    // Verificamos si el elemento todavía existe
    if (elementoAeliminar) {
        elementoAeliminar.remove(); // Método más moderno
        console.log("Elemento eliminado del DOM.");
        // Opcional: Deshabilitar el botón para evitar errores
        botonEliminar.textContent = "Elemento Eliminado";
        botonEliminar.disabled = true;
    }
});


// 5. Crear un contador que se incremente cada vez que haces clic en un botón
const botonIncrementar = document.getElementById('boton-incrementar');
const contadorDisplay = document.getElementById('contador-display');
let contador = 0;

botonIncrementar.addEventListener('click', () => {
    contador++; // Incrementamos la variable
    contadorDisplay.textContent = contador; // Actualizamos el contenido del <span>
    console.log(`Contador actual: ${contador}`);
});



