const productos = [
    {
        name: "Celeron",
        modelo: "J192",
        precio: 4000,
        thumbnail: "https://s3-symbol-logo.tradingview.com/intel--600.png"
    },
    {
        name: "Pentium",
        modelo: "X4",
        precio: 10000,
        thumbnail: "https://s3-symbol-logo.tradingview.com/intel--600.png"
    },
    {
        name: "I5",
        modelo: "10000Gen",
        precio: 50000,
        thumbnail: "https://s3-symbol-logo.tradingview.com/intel--600.png"
    },
];


//Es un metodo para acceder desde el html al archivo de JS
//se lee el objeto como Property: "value";
//primero se declara: variables globales, despues las funciones, despues todos los objetos o data de interes y por ultimo el programa, el que hacemos con todo eso. 

const contenedorDeProductosHTML = document.getElementById("contenedorDeProductos");

//Template Strings, se hace con el formato html + backticks
// template = plantilla
const formulario = document.getElementById("formulario");
//llamo a elementos de html por js, mediante el dom (objeto de document)
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newProduct = {
        name: formulario.name.value,
        modelo: formulario.modelo.value,
        precio: parseFloat(formulario.precio.value),
        thumbnail: formulario.thumbnail.value,
    }
    productos.push(newProduct); // tambien puede escribirse directamente el punto push sin hacer previamente la constante
    formulario.name.value = "";
    formulario.modelo.value = "";
    formulario.precio.value = "";
    formulario.thumbnail.value = "";
    renderizarCartas(productos);
});


/* let plantilla = `<div class="carta">
                    <h2>${productos[0].name}</h2>
                    <p>Modelo: ${productos[0].modelo}</p>
                    <p>Precio: ${productos[0].precio}</p>
                </div>` 

let plantilla2 = `<div class="carta">
                    <h2>${productos[1].name}</h2>
                    <p>Modelo: ${productos[1].modelo}</p>
                    <p>Precio: ${productos[1].precio}</p>
                </div>` */

/* contenedorDeProductosHTML.innerHTML = plantilla;
contenedorDeProductosHTML.innerHTML += plantilla2; */

const crearPlantilla = (producto) =>{
    return `<div class="carta">
                <h2>${producto.name}</h2>
                <img src="${producto.thumbnail}" class="imgCard">
                <p>Modelo: ${producto.modelo}</p>
                <p>Precio: ${producto.precio}</p>
            </div>`
}

const renderizarCartas = (listaProductos) =>{
    if(listaProductos.length !== 0){
        contenedorDeProductosHTML.innerHTML = "";
        for (let producto of listaProductos){
            //se puede hacer un if para que si pasa los 20 objetos pase a la siguiente pagina 
            contenedorDeProductosHTML.innerHTML += crearPlantilla(producto)
        }
    } else{
        contenedorDeProductosHTML.innerHTML = `<h1>No existen productos en esos valores</h1>`;
    }
}
renderizarCartas(productos);

const filterProducts = (listaProductos, price) => {
    //devuelve un array con los productos filtrados
    //filter nos devuelve un array filtrado
    return listaProductos.filter((producto) => producto.precio <= price);
} 

const priceToFilterOptions = document.getElementById("priceToFilter");

priceToFilterOptions.addEventListener('change', () => {
    if(priceToFilterOptions.value !== ""){
        let precioAFiltrar = parseFloat(priceToFilterOptions.value);
        renderizarCartas(filterProducts(productos, precioAFiltrar));
    } else{
        renderizarCartas(productos);
    }
});


