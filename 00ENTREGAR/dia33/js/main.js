document.addEventListener('DOMContentLoaded', () => {

    // 1.1 Animación de Rotación
    const btn1 = document.getElementById("button1.1");
    const div1 = document.getElementById("div1.1");
    if (btn1) btn1.addEventListener("click", () => div1.classList.toggle("div--rotate"));

    // 1.2 Eliminar clase y cambiar color
    const btn2 = document.getElementById("button1.2");
    const p2 = document.getElementById("divParrafo");
    if (btn2) {
        btn2.addEventListener("click", () => {
            p2.classList.remove("div__p--red");
            p2.style.color = "#27ae60";
            p2.textContent = "¡Clase eliminada!";
        });
    }

    // 1.3 Alternar tamaño
    const btn3 = document.getElementById("button1.3");
    const div3 = document.getElementById("div1.3");
    if (btn3) btn3.addEventListener("click", () => div3.classList.toggle("div--large"));

    // 1.4 Generador de Divs con Float
    const btnAdd = document.getElementById("buttonAñadir");
    const container = document.getElementById("containerItems");
    const counter = document.getElementById("divCounter");
    let count = 0;

    if (btnAdd) {
        btnAdd.addEventListener("click", () => {
            count++;
            counter.textContent = count;

            const div = document.createElement("div");
            div.textContent = count;
            
            // Estilos inline según enunciado
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.float = "left";
            div.style.margin = "10px";
            div.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
            div.style.display = "flex";
            div.style.alignItems = "center";
            div.style.justifyContent = "center";
            div.style.color = "white";
            div.style.border = "1px solid black";

            container.appendChild(div);
        });
    }
});