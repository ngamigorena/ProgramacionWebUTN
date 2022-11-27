/* Boton desplegable del menu en pantallas pequeñas */
const ham = document.querySelector(".ham");
const enlaces = document.querySelector(".menuHorizontalDes");

ham.addEventListener('click',()=>{
    enlaces.classList.toggle('activado');
});

/* Carga de Propiedades de elemento destacado */
const dptoDestacados = [
    {
        thumbnail: "/projectNazMartillero/images/dpto1/departamento-img1.jpg",
        ubicacion: "Sarmiento 2552",
        condicion: "Venta",
        precio: 150000,
    },
    {
        thumbnail: "/projectNazMartillero/images/dpto2/departamento2-1.jpg",
        ubicacion: "Olavarría 2356",
        condicion: "Venta",
        precio: 230000
    },
];

const contenedorDeDptosDestacadoHTML = document.getElementById('contenedorDeDptosDestacado');

let plantillaDptoDestacados = `<div class = "cartaDpto">
                                    <img src = ${dptoDestacados[0].thumbnail}>
                                    <h3><img src="./images/ge.svg" alt="icon location"  id="iconLocation"> | ${dptoDestacados[0].ubicacion}</h3>
                                    <p>Se encuentra en ${dptoDestacados[0].condicion}</p>
                                    <p class = "textVenta">Valor: $ ${dptoDestacados[0].precio}</p>
                                </div>`

let plantillaDptoDestacados2 = `<div class = "cartaDpto">
                                <img src = ${dptoDestacados[1].thumbnail}>
                                <h3><img src="./images/ge.svg" alt="icon location" id="iconLocation"> | ${dptoDestacados[1].ubicacion}</h3>
                                <p>Se encuentra en ${dptoDestacados[1].condicion}</p>
                                <p class = "textVenta">Valor: $ ${dptoDestacados[1].precio}</p>
                            </div>`

contenedorDeDptosDestacadoHTML.innerHTML = plantillaDptoDestacados;
contenedorDeDptosDestacadoHTML.innerHTML += plantillaDptoDestacados2;

const crearPlantilla = (dptoDestacado) =>{
    return `<div class = "cartaDpto">
                <img src = ${dptoDestacados.thumbnail}>
                <h3><img src="./images/ge.svg" alt="icon location"  id="iconLocation"> | ${dptoDestacados.ubicacion}</h3>
                <p>Se encuentra en: ${dptoDestacados.condicion}</p>
                <p>Valor: ${dptoDestacados.precio}</p>
            </div>`
}

/* Botones del slider */

/* const buttonBack = document.getElementById('butBack')
const buttonForward = document.getElementById('butForward');


buttonBack.addEventListener('click', respuestaClickBack);
buttonForward.addEventListener('click', respuestaClickBack); */


/* Intento de barra de busqueda filtrando diferentes selectores  */

var availableProperties = [
    {
        thumbnail: "/projectNazMartillero/images/casa1/casa1-1.jpg",
        tipoDePropiedad: "Casa",
        ubicacion: "Mendoza 2444",
        condicion: "Venta",
        ambientes: 5,
        precio: 350000,
    },
    {
        thumbnail: "/projectNazMartillero/images/dpto4/dpto4-1.jpg",
        tipoDePropiedad: "Departamento",
        ubicacion: "Las Heras 1456",
        condicion: "Alquiler",
        ambientes: 4,
        precio: 95000,
    },
    {
        thumbnail: "/projectNazMartillero/images/casa2/casa2-1.jpg",
        tipoDePropiedad: "Departamento",
        ubicacion: "Gascón 1565",
        condicion: "Venta",
        ambientes: 3,
        precio: 120000,
    },
    {
        thumbnail: "/projectNazMartillero/images/dpto3/dpto3-1.jpg",
        tipoDePropiedad: "Departamento",
        ubicacion: "Tucumán 2280",
        condicion: "Alquiler",
        ambientes: 2,
        precio: 85000,
    }
]; 

availableProperties.forEach(element => {
    
});

/* Constructor de propiedades disponibles */
/*
function availableProperties(thumbnail, tipoDePropiedad, ubicacion, condicion, ambientes, precio){
    this.thumbnail = thumbnail;
    this.tipoDePropiedad = tipoDePropiedad;
    this.ubicacion = ubicacion;
    this.condicion = condicion;
    this.ambientes = ambientes;
    this.precio = precio;
}

const dptpAvailable1 = new availableProperties ("/projectNazMartillero/images/casa1/casa1-1.jpg", "Casa", "Mendoza 2444", "Venta", 5, 350000);
const dptpAvailable2 = new availableProperties ("/projectNazMartillero/images/dpto4/dpto4-1.jpg", "Departamento", "Las Heras 1456", "Alquiler", 4, 95000);
const dptpAvailable3 = new availableProperties ("/projectNazMartillero/images/casa2/casa2-1.jpg", "Departamento", "Gascón 1565", "Venta", 3, 120000);
const dptpAvailable4 = new availableProperties ("/projectNazMartillero/images/dpto3/dpto3-1.jpg", "Departamento", "Tucumán 2280", "Alquiler", 2, 85000);
*/

/* Search Bar Options */
let templateOpcionesDeBusqueda = [];

let searchBtn = document.getElementById('searchBtN');

searchBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    let oper = document.getElementById('operacion').value;
    let tipProp = document.getElementById('tipoDePropiedad').value;
    let ambien = document.getElementById('ambientes').value;
    let barraBusqueda = document.getElementById('searchPropBar').value;
    templateOpcionesDeBusqueda.push(oper);
    templateOpcionesDeBusqueda.push(tipProp);
    templateOpcionesDeBusqueda.push(ambien);
    templateOpcionesDeBusqueda.push(barraBusqueda);
/*     filterAvailableProperties(oper); */
    alert(templateOpcionesDeBusqueda) /*aca iria la funcion que me lleva a imageFilterd desde imageFilteredHTML */
});

/* Function filter throw an array of properties */
/* Leer y recorrer el array buscando las condiciones indicadas */
/* Para cada objeto que tenga en la palabra condicion: "Venta" en mi array availableProperties me lo imprima en el html en la section de imageFiltered 
deberia poder comparar el array templateOpcionesDeBusqueda con la "Base de datos" availableProperties y los que coincidan se imprimen en la seccion*/


/* let imageFilteredHTML = document.getElementById('imageFiltered');

availableProperties.forEach(()=>{

    return availableProperties[i].condicion;
}); */





/* function filterAvailableProperties(){
    availableProperties.forEach((propertie)=>{
    imageFilteredHTML = "";
        if(availableProperties.oper === availableProperties.condicion){
            return imageFilteredHTML.innerHTML = propertie;
        }
})
}; */





/* const createCardDptoAvailable = (availablePropertie)=>{
    return `<div class = "cardavailablePropertie">
                <img src = ${availablePropertie.thumbnail}>
                <h3><img src="./images/ge.svg" alt="icon location"  id="iconLocation"> | ${availablePropertie.ubicacion}</h3>
                <p>Se encuentra en: ${availablePropertie.condicion}</p>
                <p>Valor: ${availablePropertie.precio}</p>
            </div>`
}

const rendCardDptoAvailable = (availablePropertiesList) => {
    if (availablePropertiesList.lenght != 0){
        imageFilteredHTML.innerHTML = "";
        for(let availablePropertie of availablePropertiesList){
            imageFilteredHTML.innerHTML += rendCardDptoAvailable(availablePropertie);
        }
    } else{
        imageFilteredHTML.innerHTML = `<h1>No hay propiedades con las caracteristicas seleccionadas en este momento`;
    }
}

rendCardDptoAvailable(availableProperties); */

/* let imageFilteredHTML = document.getElementById('imageFiltered');

const createCardDptoAvailable = (availablePropertie)=>{
    return `<div class = "cardavailablePropertie">
                <img src = ${availablePropertie.thumbnail}>
                <h3><img src="./images/ge.svg" alt="icon location"  id="iconLocation"> | ${availablePropertie.ubicacion}</h3>
                <p>Se encuentra en: ${availablePropertie.condicion}</p>
                <p>Valor: ${availablePropertie.precio}</p>
            </div>`
}

const rendCardDptoAvailable = (availablePropertiesList) => {
    if (availablePropertiesList.lenght != 0){
        imageFilteredHTML.innerHTML = "";
        for(let availablePropertie of availablePropertiesList){
            imageFilteredHTML.innerHTML += rendCardDptoAvailable(availablePropertie);
        }
    } else{
        imageFilteredHTML.innerHTML = `<h1>No hay propiedades con las caracteristicas seleccionadas en este momento`;
    }
}

rendCardDptoAvailable(availableProperties);

const filterDpto = (availablePropertiesList, oper)=>{
        return availablePropertiesList.filter((availablePropertie)=>availablePropertie.condicion = oper);
};

const filterAvailableProperties = templateOpcionesDeBusqueda;

filterAvailableProperties.addEventListener = ('change', ()=>{
    if(filterAvailableProperties.value !== ""){
        let condicionAObtener = filterAvailableProperties.value;
        rendCardDptoAvailable(filterDpto(availableProperties, condicionAObtener));
    } else {
        rendCardDptoAvailable(availableProperties);
    };
}); */








/* for of de las prop + condiciones + push al selectedProp = innerHTML 
propiedades dis - selecprop*/
