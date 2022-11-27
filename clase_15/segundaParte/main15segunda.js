//Clase 15: Manipulación del DOM 

/* console.log(document); //Vemos el objeto document
console.dir(document); //Podemos acceder a mayor información

console.log(document.head);
console.dir(document.body); 

//Métodos para obtener un nodo del DOM

let titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.innerHTML);//Vemos el html o texto interno, puede verse como .innetText

let nombre = "Cosme Fulanito";
titulo.innerHTML = "Hola " + nombre; // Modificar el DOM de manera dinámica

let parrafos = document.getElementsByClassName("parrafos");
console.log(parrafos);

let parrafosTag = document.getElementsByTagName("p");
console.log(parrafosTag);

// Ejemplo de modificación Select Dinámico

const categorias = [];

// 1 - solicitar una entrada al usuario

let entrada = prompt("Ingrese categoría \n (Escribir 'ESC' para salir)");

//Si la entrada es distinta a "ESC" en cada repetición cargar una categoría

while (entrada.toUpperCase() != "ESC"){
    //Incluir la categoría en el array
    categorias.push(entrada.toUpperCase());

    //solicitar una nueva categoría
    entrada = prompt("Ingrese categoría \n (Escribir 'ESC' para salir)");
}

console.log(categorias);

//Obtenemos el elemento 

let miSelect = document.getElementById("select");

for (const categoria of categorias ){
    miSelect.innerHTML += "<option>" + categoria + "</option>";
}
*/

//Creacion de un nuevo nodo

let titulo1 = document.createElement("h2"); // creo el nodo
titulo1.innerHTML = "Hola desde JS"; //defino el contenido

document.body.appendChild(titulo1);

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
                        <h4> Precio: ${producto.precio}</h4>`;

document.body.appendChild(divProducto); // Agrego un nuevo hijo a body para que lo muestre en el HTML
}
