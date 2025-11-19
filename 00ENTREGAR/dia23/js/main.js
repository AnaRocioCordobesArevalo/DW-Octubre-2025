


const ej1_1 = document.querySelector("#ej1_1");
ej1_1.textContent = "Contenido del ejercicio 1.1"; //Inserta un texto.


//Ejercicio 1.2
const ej1_2 = document.querySelector("#ej1_2");
ej1_2.style.color = "blue"; // Cambia de color el texto a rojo



//Ejercicio 1.3

const ej1_3 = document.querySelector("#ej1_3");
const changeRed = document.querySelector("#changeRed");
const changeBlue = document.querySelector("#changeBlue");


changeRed.addEventListener("click", () => {
    ej1_3.style.color = "red";
});
changeBlue.addEventListener("click", () => {
    ej1_3.style.color = "blue";
});

// Ejercicio 2     Variables y Constantes


const PI = 3.14;
let radio = 5;

function areaCirculo (r){
    return PI * r * r;
}

console.log("Area del círculo con radio " + radio + ":" + areaCirculo(radio));

console.log(areaCirculo);

//Ejercicio 3
const ej3 = document.querySelector("#ej3");

function clickHandler (){
    alert ("Boton clickeado");
}
ej3.addEventListener ("click", clickHandler);