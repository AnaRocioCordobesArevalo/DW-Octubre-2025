//Ejercicio 2

const textCopy = document.querySelector('#textCopy');
const botonText = document.querySelector ('#botonText');
const textParagraph = document.querySelector ('#textParagraph');


botonText.addEventListener('click', () =>{
    textParagraph.textContent = textCopy.value;
    console.log(textCopy.value)
})


//Ejercicio 3


/document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('calculadoraForm');
    const input1 = document.getElementById('num1');
    const input2 = document.getElementById('num2');
    const resultadoP = document.getElementById('resultado');

    
    form.addEventListener('submit', function(event) {
        
        event.preventDefault(); 

        
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);

        
        const suma = num1 + num2;

        
        resultadoP.textContent = `La suma es: ${suma}`; 
    });
}); 

