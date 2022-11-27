/*  //Funciones

function saludar(nombre, apellido, edad){
    //let nombre = prompt("Ingrese su nombre");
    //alert("Hola " + nombre); 
    console.log("Hola " + nombre + " " + apellido + " " + "Edad: " + edad);
}

saludar('Manu', 'Ginobilli', 41)
saludar('Luifa', 'Scola', 40)
saludar('Lancha','Delfino',40)
saludar('Fabri', 'Oberto', 45)
saludar('Chapu', 'Nocioni', 41)

function misDatos (nombre2, apellido2, serieFavorita){
    console.log("Hola mi nombre es " + nombre2 + " " + apellido2 + " " + "y mi serie favorita es " + serieFavorita);
}

misDatos('Nazareno', 'Amigorena', 'The Big Bang Theory');

//Valores de Retorno

function multiplicar(num1, num2){
    let num3 = 10;
    return (num1 + num2) * 3;
}

let resultado = multiplicar(2,5);
console.log("El resultado es: " + resultado);

function cantidadDeLetras (nombreIngresado){
    let nombreAMostrar = prompt("Ingrese un nombre");
    console.log(nombreIngresado.length);
}

cantidadDeLetras();

//Ejemplo anterior resuelto por Yanel

function getLargoNombre (nombre){
    return nombre.length;
}
//primero armamos la función y despues le marcamos de donde queremos que los parametros se metan

let nombreLength = getLargoNombre(prompt("Ingrese nombre"));
console.log('La cantidad de caracteres del nombre es de: '+ nombreLength);

function sumarEdad (edad){
    let num = 1;
    return edad + num;
}

console.log(sumarEdad(4));
console.log(num); // no se puede acceder a num porque es una variable local + scope local

let num = 1;
function sumarEdad (edad){
    return edad + num;
}

console.log(sumarEdad(4));
console.log(num); // variable global num porque lo tengo por fuera de mi funcion


//Funciones anónimas
//Generalmente asignadas como constantes

const suma = function(a, b){
    return a+ b;
}

console.log(suma(18,20));

const suma = function(a, b){return a+ b};
console.log(suma(18,20));


//funcion flecha
const resta = (a, b) => a - b;
console.log(resta(38, 20));


const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const iva = x => x * 0.21;

let precioProducto = 500;
let precioDescuento = 50;

//Calculamos el precioProducto + IVA - precioDescuento

let nuevoValorProducto = resta((suma(precioProducto, iva (precioProducto))),precioDescuento);
console.log(nuevoValorProducto);


// propiedades son las caracteristicas y metodos son las funciones que realiza 
//En JS utilizamos objetos, los objetos tienen metodos y propiedades, para acceder al DOM aplicamos document, que va a ser el objeto general, todo lo que tenemos ahi, y para buscar los objetos tenemos el document.queryselector y otro similar que s getElementBy...

let encabezado = document.querySelector('h1');
console.log(encabezado.innerText);

let textoEnH2 = document.querySelectorAll('h2');
console.log(textoEnH2);

let texto = document.querySelector('.texto');
console.log(texto.innerHTML);
*/












