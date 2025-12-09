
//Nivel 1: Interacción básica con el DOM y BOM
let nuevaVentana = null;

function abrirVentana (){
    nuevaVentana = window.open ('https://flexboxfroggy.com/#es');
    const outputElement = document.getElementById ('output-message');
}
function cerrarVentana(){
    if (nuevaVentana && !nuevaVentana.closed){
        nuevaVentana.close();
    } else{
        window.close();
        
    }
}
function moverVentana(){
    window.moveTo (0,0);
}
function redimensionarVentana(){
    window.resizeTo (600, 400);
}
function cambiarUbicacion (){
    const confirmacion = window.confirm("¡Esto te llevará a Wikipedia! ¿Continuar?");
    if (confirmacion) {
        
        window.location.assign('https://es.wikipedia.org/wiki/Browser_Object_Model');
}
}




// Nivel 2: Manipulación Dinámica de Contenido


// 1. Obtener todos los divs con la clase 'box'
const boxes = document.querySelectorAll('.box');
// 2. Obtener el botón por su ID
const changeNumbersButton = document.getElementById('changeNumbersBtn');

/**
 * Genera un número aleatorio entre 1 y 100.
 * @returns {number} Número aleatorio.
 */
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}


function changeNumbers() {
    boxes.forEach(box => {
        const newNumber = getRandomNumber();
        // Asigna el nuevo número al contenido (texto) del div
        box.textContent = newNumber; 
    });
}

// 3. Añadir el escuchador de eventos al botón del Nivel 2

if (changeNumbersButton) {
    changeNumbersButton.addEventListener('click', changeNumbers);
}



// Nivel 3: Calculadora Interactiva


// 1. Obtener todos los elementos de la calculadora por su ID
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const calculateButton = document.getElementById('calculateBtn');
const resultSpan = document.getElementById('result');

/**
 * Función que realiza la operación matemática y actualiza el resultado en la web.
 */
function calculate() {
    // Obtener valores y convertirlos a números de punto flotante
    const number1 = parseFloat(num1Input.value);
    const number2 = parseFloat(num2Input.value);
    const operator = operatorSelect.value;
    let result;

    // Validación básica
    if (isNaN(number1) || isNaN(number2)) {
        resultSpan.textContent = "Error: Introduce números válidos.";
        return;
    }

    // Lógica principal: Switch para manejar las diferentes operaciones
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            // Manejar la división por cero
            if (number2 === 0) {
                resultSpan.textContent = "Error: División por cero.";
                return;
            }
            result = number1 / number2;
            break;
        default:
            resultSpan.textContent = "Error: Operador no válido.";
            return;
    }

    // Mostrar el resultado (toFixed(2) para que muestre hasta 2 decimales)
    resultSpan.textContent = result.toFixed(2);
}

// 2. Añadir el escuchador de eventos al botón de calcular del Nivel 3
if (calculateButton) {
    calculateButton.addEventListener('click', calculate);
}