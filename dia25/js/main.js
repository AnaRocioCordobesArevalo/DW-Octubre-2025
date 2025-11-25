// NIVEL 1: OBJETOS Y PROPIEDADES
console.log(" NIVEL 1: OBJETOS Y PROPIEDADES ");
const alumno ={
    nombre: 'Maria',
    apellido: 'Garcia',
    edad: 25,
    curso: 'Desarrollo Web'

};

console.log ("Acceso directo a propiedades");
console.log ('Nombre '+ alumno.nombre);
console.log ('Apellido ' + alumno.apellido);
console.log ('Edad: ' + alumno.edad);
console.log ('Curso ' + alumno.curso);

//2. Desestrcuturado el objeto
console.log ("Desestructuracion de objeto: ");
const{
    nombre,
    apellido,
    edad,
    curso
}= alumno;
console.log(`Nombre (desestructurado): ${nombre}`);
console.log(`Apellido (desestructurado): ${apellido}`); /* Está línea me da error */

//3. Añadde un método al objeto
alumno.nombreCompleto = function (){
    console.log(["Nombre completo (método):", this.alumno, this.apellido].join (""));
};
alumno.nombreCompleto();

//NIVEL 2: OPERADORES SPREAD Y REST 

console.log(" NIVEL 2: OPERADORES SPREAD Y REST");

// 1. Crea una copia de un objeto usando el operador spread (...)
const alumnoCopia = {
    ...alumno,
    edad: 26 // Modificamos la edad en la copia para demostrar que es una copia independiente, Repasar esta parte
};
console.log("Copia de objeto (Spread):", alumnoCopia);
console.log("Objeto original:", alumno);

// 2. Junta varios arrays en uno solo usando spread
const frutas = ['manzana', 'pera'];
const verduras = ['zanahoria', 'lechuga'];
const legumbres = ['lentejas'];

const alimentos = [...frutas, ...verduras, ...legumbres, 'arroz'];
console.log("Arrays unidos (Spread):", alimentos);

// 3. Crea una función que acepte un número indefinido de argumentos y devuelva su suma (operador rest)/ Repasar
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
console.log("Otros datos de alumno (Rest en desestructuración):", otrosDatos); 


/* NIVEL 3: MANIPULACION DEL DOM */

console.log ("NIVEL 3: MANIPULACION DEL DOM" );

// 1.Cambiar el contenido de un <p>
const parrafo = document.getElementById ('parradfo-a-cambiar');
parrafo.textContent = ""
