// ----------- D&D API -----------
async function obtenerRaza(nombreRaza) {
    const url = `https://www.dnd5eapi.co/api/2014/races/${nombreRaza}`;
    try {
        const respuesta = await fetch(url);
        if (respuesta.ok) return await respuesta.json();
    } catch (error) {
        console.error("Error en D&D:", error);
    }
    return null;
}

document.getElementById("buttonSearchRace").addEventListener("click", async () => {
    const race = document.getElementById("razaDD").value.trim().toLowerCase();
    if (!race) return;

    const datos = await obtenerRaza(race);
    if (!datos) return;

    const resDiv = document.getElementById("resultadosDD");
    resDiv.style.display = "block";
    
    document.getElementById("pAlignment").textContent = `Alineamiento: ${datos.alignment}`;
    document.getElementById("pSize").textContent = `Tamaño: ${datos.size}`;
    document.getElementById("pSpeed").textContent = `Velocidad: ${datos.speed}`;
});

// ----------- FAKESTORE API -----------
document.getElementById("buttonSearchProduct").addEventListener("click", async () => {
    const cat = document.getElementById("categories-select").value;
    if (!cat) return;

    try {
        const res = await fetch(`https://fakestoreapi.com/products/category/${cat}`);
        const datos = await res.json();
        
        const resDiv = document.getElementById("resultadosStore");
        resDiv.innerHTML = "";
        resDiv.style.display = "block";

        datos.forEach(item => {
            const card = document.createElement("div");
            card.style.borderBottom = "1px solid #ddd";
            card.innerHTML = `
                <p><strong>${item.title}</strong></p>
                <img src="${item.image}" style="width:50px">
            `;
            resDiv.appendChild(card);
        });
    } catch (e) { console.error(e); }
});

// ----------- POKEAPI -----------
document.getElementById("buttonPokeSearch").addEventListener("click", async () => {
    const id = document.getElementById("pokeID").value.trim();
    const name = document.getElementById("pokeName").value.trim();
    const query = name || id;

    if (!query) return;

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
        if (!res.ok) throw new Error("No encontrado");
        const datos = await res.json();

        const resDiv = document.getElementById("resultadosPoke");
        resDiv.style.display = "block";

        document.getElementById("pNombre").textContent = `Nombre: ${datos.name}`;
        document.getElementById("pId").textContent = `ID: ${datos.id}`;
        document.getElementById("imgSprite").src = datos.sprites.front_default;
        document.getElementById("imgSpriteShiny").src = datos.sprites.front_shiny;
    } catch (e) { alert("Pokemon no encontrado"); }
});