const vehiculos = [];
const imagenes = [];
const contenedorHTML = document.getElementById("contenedor");


const URLSWAPI = "https://swapi.dev/api/vehicles/";
const URLHPAPI = "https://hp-api.herokuapp.com/api/characters"

const crearPlantilla = (vehiculo) =>{
    return `<div class="carta">
                <h2>${vehiculo.name}</h2>
                <img src = ${vehiculo.image}>
                <a href = ${vehiculo.image}> Link to </a>
                <p>Modelo: ${vehiculo.model}</p>
                <p>Precio: ${vehiculo.cost_in_credits}</p>
            </div>`
}

const renderizarVehiculos = (listaVehiculos) =>{
    if(listaVehiculos.length !== 0){
        contenedorHTML.innerHTML = "";
        for (let vehiculo of listaVehiculos){
            //se puede hacer un if para que si pasa los 20 objetos pase a la siguiente pagina 
            contenedorHTML.innerHTML += crearPlantilla(vehiculo)
        }
    } else{
        contenedorHTML.innerHTML = `<h1>No existen productos en esos valores</h1>`;
    }
}



fetch(URLSWAPI)
    .then(response =>  response.json())
    //then(json => console.log(json.results))
    //.then(responseJS => responseJS.resulsts)
    .then(responseJS =>{
        responseJS.results.forEach((vehiculo) => vehiculos.push(vehiculo))
        
        fetch(URLHPAPI)
            .then(response => response.json())
            .then(data => {
                console.log(data[1].image)
                for (let i = 0; i < vehiculos.length; i++) {
                    imagenes.push(data[i].image)          
                }
                for (let i = 0; i < vehiculos.length; i++) {
                    vehiculos[i].image = imagenes[i];
                }
                renderizarVehiculos(vehiculos);
        });
    });

