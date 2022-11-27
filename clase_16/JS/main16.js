// Clase 16: DOM - Eventos

//Seleccionar elementos del DOM

let miBoton = document.getElementById("boton");
//console.log(miBoton);

// Determinar el evento a escuchar sobre el elemento (Primera forma)
miBoton.addEventListener('click', respuestaClick);

//Respuesta al evento
function respuestaClick (){
    console.log("Respuesta a evento"); //Estamos REFERENCIANDO a la funcion no invocando
}

miBoton.addEventListener('click', respuestaClick2);

function respuestaClick2 () {
    console.log("otro manejador");
}

// Tambien podemos usar las propiedades ON (Segunda forma / no se usa tanto)
miBoton.onclick = () =>{
    console.log("Hola desde manejador onclick");
}

//el eventlistener podemos generar varias respuestas en cambio el onclick es solo una accion

//Tercera forma que no se usa mucho pero puede aparecer
//<input type="button" value="CLICK2" onclick="alert('Respuesta 3');"> se hace directamente en el HTML

// Ejemplo de creación dinámica de nodos

class Producto{
    constructor(id, nombre, precio){
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}

//Instanciar objetos y asociar array
const productos = [];
productos.push(new Producto(1, "Dona", 60));
productos.push(new Producto(2, "Pan", 460));
productos.push(new Producto(3, "Torta", 560));
productos.push(new Producto(4, "Leche", 760));

// Recorro el array para crear un nodo por valor en el array

for (const producto of productos){
    let divProducto = document.createElement("div");

divProducto.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                        <h4> Precio: ${producto.precio}</h4>
                        <button id = '${producto.id}' class = 'btnCompra'> Comprar </button>`;

document.body.appendChild(divProducto); // Agrego un nuevo hijo a body para que lo muestre en el HTML
}

//Seleccionar botones generados por clases

let botones = document.getElementsByClassName('btnCompra');
//console.log(botones);

for (const boton of botones) {
    boton.addEventListener('click', function(){
        let seleccion = productos.find(producto => producto.id == this.id); //poner producto o x seria lo mismo
        console.log("el producto seleccionado es " + seleccion.nombre);
    })
}

let miFormulario = document.getElementById("registroProducto");

miFormulario.onsubmit = (e) => {
    e.preventDefault();
    //Si usamos THIS en la arrow function no obtenemos el objeto del evento, obtenemos el contexto global del objeto que es windows
    console.log(this);
    //en equivalencia podemos usar e.target para obtener el objeto asociado al evento
    console.log(e.target);

    //y con e.target.id obtenemos el evento id de forma equivalente a this.id
    console.log(e.target.id);

    //Obtenemos los inputs hijos del formulario
    const inputs = miFormulario.children;

    //Instanciamos un objeto usando los values de cada input
    productos.push(new Producto (0,inputs[0].value, inputs[1].value));
    console.log(productos);
}

