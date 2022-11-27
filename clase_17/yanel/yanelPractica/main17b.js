//1 - Crear una función htmlPersonaje() que reciba tres parámetros: personaje, foto, casa y devuelva un HTML individual con esos datos concatenados

//2 - Hacer una llamada a la API de Harry Potter usando fetch y mostrar en consola lo que nos devuelve. 

//3 - Con la función creada mostrar en el documento la lista de personajes.

//4 - Crear una hoja CSS y añadirle estilo a la lista de personajes.

const main = document.querySelector('main');

fetch('https://hp-api.herokuapp.com/api/characters/students')
    .then(response => response.json())
    .then(
        personajes => {
            personajes.forEach(personaje => {
                let infoPersonaje = document.createElement('article');
                infoPersonaje.innerHTML = htmlPersonajes(personaje.name, personaje.image, personaje.house);
                main.appendChild(infoPersonaje);
        });
    }); 

/* fetch('https://hp-api.herokuapp.com/api/characters/students')
.then(response => response.json())
.then(json =>{
    json.map(function(personaje){
        document.write(htmlPersonajes(personaje.name, personaje.image, personaje.house));
    })
}); */


function htmlPersonajes(personaje, foto, casa){
    let html = `<h2 class = "nombre">${personaje}</h2>
                <h3>${casa}</h3>
                <div class = "imagen">
                <img src = "${foto}" alt = "foto ${personaje}"> </div>`;
    return html;
}