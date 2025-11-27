/* NIVEL 1: Operaciones básicas con arrays
*/

console.log ("Nivel 1");
//Crea un array de 10 posiciones y muéstralos por consola.
let tapas = ["chocos", "croquetas", "serranito", "chipiron", "chicharrones", "boquerones", "ensaladilla", "aceitunas","puntillitas","migas de pan"]
//Muestra los elementos de las posiciones 3 y 6.
console.log(tapas[3]);
console.log(tapas[6]);
console.log (tapas)
// Muestra por consola el tamaño del array.
console.length
// Añade un valor al principio del array y muéstralo.
tapas.unshift ('cabrillas')
// Añade un valor al final del array y muéstralo.
tapas.push ('solomillo whisky')
//Elimins los elementos de la posición 5 y 6 muestra el array.
tapas.slice (5, 2);
console.log ("---Array después de las eliminacinaciones---");
console.log (tapas);

/* NIVEL 2: BUSQUEDAS, TRANSFORMACIONES Y RECORRRIDOS */

//Elige un elemento y muestra su posisición (indexOf).
let elementoBuscado = "croquetas";
let posicion = tapas.indexOf(elementoBuscado);
console.log ("La posición de " + elementoBuscado + " es: " +posicion);
//Dale la vuelta al array (reverse) y muéstralo.
tapas.reverse();
console.log ("Aqui hacemos un reverse");
console.log(tapas);

//Convierte el array a un string separado por comas y muéstalo
let tapasString = tapas.join (',');
console.log ("Array convertido a String separado por comas (join): "+ tapasString);

// Separa el string anterior y vuelve a convertirlo en array (split).
let tapasArrayVuelto = tapasString.split(',');
    console.log ("String separado y vuelto a convertir a Array (split): ");
    console.log (tapasArrayVuelto);

//Recorre el array con forEach e imprime cada valor y su índice.
console.log("Recorremos el array con un forEach");
tapasArrayVuelto.forEach((valor) => {
    
    console.log(`-> TAPA NUEVA: ${valor.toUpperCase()}`);
});

/* NIVEL 3: MÉTODOS DE ORDEN SUPERIOR Y DESCONTRUCCIÓN */
/*Busca si existe un valor en el array y muéstralo (con includes y find).*/
console.log("Busca si existe un valor en el array y muéstralo (con includes y find).")
