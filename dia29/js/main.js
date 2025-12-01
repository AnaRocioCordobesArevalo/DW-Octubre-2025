
//Nivel 1

function mostrarPares1a100() {
    for (let i = 2; i <= 100; i += 2) {
        console.log(i);
    }
}

// Para usarla:
mostrarPares1a100();

//Nivel 2

function dibujarCuadrado() {
    for (let i = 0; i < 4; i++) {
        let text = '*';
        for (let j = 0; j < 4; j++) {
            text += '*';
        }
        console.log(text);
    }
}

// Para usarla:
dibujarCuadrado();

function dibujarCuadradoHueco5x5() {
    for (let fila = 0; fila < 5; fila++) {
        let linea = '';
        for (let columna = 0; columna < 5; columna++) {
            // Condición para saber si estamos en un borde
            if (fila === 0 || fila === 4 || columna === 0 || columna === 4) {
                linea += '*';
            } else {
                linea += ' '; // Espacio para el hueco
            }
        }
        console.log(linea);
    }
}

// Para usarla:
dibujarCuadradoHueco5x5();