//Nivel 1

console.log ("Nivel 1");
console.log ("Ejemplo 1");

let a=3;
let result = 'Menor a 0';

if (a > 0){
    result = 'Mayor a 0';

}

console.log ("Ejemplo 2");

const mayorEdad = 18;
if(mayorEdad >= 18){
    console.log ("Es mayor de edad");
}else {
    console.log("Es menor de edad");
}

console.log (result);

console.log ("Ejemplo 3");

let x = 51;

if (x > 50) {
    console.log("Es mayor a 50");
} else if(x <5){
    console.log("Es menor a 5");
}else{
    console.log ("Esta entre 5 y 50");
}

/* Nivel 2 */
console.log("Nivel 2");
console.log ("Ejemplo 4");

const mascota = "perro";

switch(mascota){
    case "perro":
        console.log("Tengo un perro");
        break;
    case "gato":
        console.log ("Tengo un gato");
        break;
    case "loro":
        console.log("Tengo un loro");
        break;
    default:
        console.log("No tengo mascota");
        break;
}

console.log("Ejemplo 5");
let str= "";
for (let i = 0; i< 9; i++){
    str = str + i;
}
console.log (str);

console.log ("Ejemplo 6");

let n= 0;

while (n < 3) {
    n++;
}

console.log(n);

console.log("");

console.log ("Nivel 3");
console.log("Ejemplo 7");

let result1 = '';
let i = 0;

do{
    i = i + 1,
    result1 = result1 + i;
} while (i < 5);

console.log (result1);

console.log ("Ejemplo 8");

const array1 = ['a' , 'b' , 'c'];

array1.forEach ((element) => console.log (element));