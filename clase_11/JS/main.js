/* Condicionales, operadores y Arrays 

let grupo = []; //vacio

let mascotas = ["perro", "gato", "conejo"]; //string

let numeros = [1, 2, 3, 4]; //numero

let verdades = [true, false]; //booleano

let persona = [32131, "pepe", true];

let resultado = [
    ["perro", "pepe"],
    [1,2,4]
]; //Array de arrays

let datos = ["dato", 'dato2', 'dato3'];
console.log(datos[2]); 
*/

//propiedad length

/* let colorMascotas = [
    ['perro', 'marron', 'negro', 'rojo'],
    ['gato', 'blanco','gris'],
    ['pez', 'anaranjado']
];
//cantidad de arrays
console.log(colorMascotas.length);
//acceso a posicion elegida
console.log(colorMascotas[0][1]);
//cantidad de caracteres de una determinado elemento
console.log(colorMascotas[2][1].length);

let tarea = ['pepe', 'moni', 'paola', 'coki', 'dardo'];
console.log(tarea);
console.log(tarea.length);
console.log(tarea[0]);

let lista = ["banana"];
let entrada = prompt("Ingrese su articulo");
let elemento = entrada;

if (elemento === lista){
    alert("tu articulo esta en la lista");
}
    else {
    alert("tu elemento no esta en la lista");} */


//Condicionales
//Sin operador ternario

/* let edad1 = 19;
let esMayorEdad1;

if (edad1>18){
    esMayorEdad1 = true;
}   else {
    esMayorEdad1 = false;
} */

// Operador condicional ternario

/* let edad = 17;

let esMayorEdad = edad > 18 ? true : false;

console.log("es mayor de edad? " + esMayorEdad); 

let nombre = "Pepito";
let edad = 16;

edad > 18 ? console.log (nombre + " es mayor de edad") : console.log(nombre + " no es mayor de edad");


//practica condicionales
//crear lista

let lista = ["harina","papas", "manzanas","jugo", "chocolate"];

//prompt

let articulo = prompt ("¿Qué articulo desea agregar a la lista?");

//incluir elementos en un array y evaluar si ya se encuentra en la lista
//armar condicional

if (lista.includes(articulo)){
    alert(articulo + " ya está en la lista");
} else {
    lista.push(articulo);
    alert("La lista es: " + lista);
}
*/

//switch

/* let color = prompt("Ingrese un color");

switch (color){
    case "rosa": 
        alert("Es Kimberly");
        break; // debe cortarse para que no siga leyendo
    case "negro":
        alert("Es Zack");
        break;
    case "amarillo":
        alert("Es Trini");
        break;
    case "azul":
        alert("Es Billy");
        break;
    case "rojo":
        alert("Es Jason");
        break;
    break
    default:
        alert("No es un Power Ranger");
} */


/* console.log(new Date().getDay());

let numeroDia = new Date().getDay();

switch (numeroDia){
    case 0:
    alert("Es domingo");
    break;
    case 1:
    alert("Es lunes");
    break;
    case 2:
    alert("Es martes");
    break;
    case 3:
    alert("Es miercoles");
    break;
    case 4:
    alert("Es jueves");
    break;
    case 5:
    alert("Es viernes");
    break;
    case 6:
    alert("Es sabado");
    break;
    break;
    default:
    alert("Estás en otra dimensión");
} */

//se puede autodefinir una variable:

/* let numeroDia = new Date().getDay();

switch (numeroDia){
    case 0:
        dia = "Domingo";
    break;
    case 1:
        dia = "Lunes";
    break;
    case 2:
        dia = "Martes";
    break;
    case 3:
        dia = "Miercoles";
    break;
    case 4:
        dia = "Jueves";
    break;
    case 5:
        dia = "Viernes";
    break;
    case 6:
        dia = "Sabado";
    break;
    break;
    default:
        dia = "Estas en otra dimensión amegoh";
}

console.log("Hoy es " + dia);
alert(dia) */

//Creá un algoritmo que solicite al usuario uno o más valores ingresados por prompt(), compare las entradas y, en función de ciertas condiciones, muestre por consola o alert() el resultado según los valores ingresados y las condiciones cumplidas.
//Ejemplo:
//Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.
//Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta o un mensaje por consola;.
//Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.

/* let valorEntrada1 = prompt("Ingrese un número");
let valorEntrada2 = prompt("Ingrese un número");
let valorEntrada3 = prompt("Ingrese un número");

if (valorEntrada1 > 1000)  {
    alert("El número ingresado " + valorEntrada1 + " es mayor a 1000");
    } else if (valorEntrada2 > 1000){
    alert("El número ingresado  " + valorEntrada2 + " es mayor a 1000");
        } 
        else if (valorEntrada3 > 1000){
        alert("El número ingresado " + valorEntrada3 + "  es mayor a 1000");
        }
            else {
            alert("El número es menor a 1000");
            } */



/* switch (valorEntrada1){
    case valorEntrada1:
    alert ("El número ingresado " + valorEntrada1 + " es mayor a 1000");

} */

//Condicionales y operadores
/* Consigna
Usando el método  prompt pedile al usuario que ingrese un número. 

Definí 3 caminos:
Si el número es mayor a 10.
Si el número es menor o igual a 10.
Si no es un número.

En cada camino, usá el método document.write para dejar un mensaje según la elección. */

//Ejercicio 2
/* let entrada = parseInt(prompt("Ingrese un número"));

if (entrada > 10) {
    document.write("El número ingresado es mayor a 10");
    }
    else if (entrada <= 10) {
        document.write("El número ingresado es menor o igual a 10");
        }
        else {
            document.write("No es un número lo que ingreso");
        } */
/*
let valorEntrada1 = parseFloat(prompt("Ingrese un número"));
/*  let valorEntrada2 = prompt("Ingrese un número");
let valorEntrada3 = prompt("Ingrese un número"); 

if (valorEntrada1 > 1000)  {
    alert("El número ingresado " + valorEntrada1 + " es mayor a 1000");
    }
        else if (valorEntrada1 < 1000){
        alert("El número ingresado " + valorEntrada1 + "  es menor a 1000");
        }
            else if (valorEntrada1 = 1000){
                alert("El número ingresado es 1000");
            } 
valorEntrada1 > 1000 ? alert("es mayor a 1000") : alert("es menor a 1000");
*/

let textEntrada = prompt('Ingrese una palabra');
if (textEntrada === 'Hola' || textEntrada === 'hola'){
    console.log("El usuario está saludando");
} else {
    console.log("puso cualquier cosa")
}


let numEntrada = prompt ("Ingrese un número");
if (10 <= numEntrada <= 50 ){
    alert("su número está entre 10 y 50");
} else {
    alert("su número está por fuera del rango esperado");
}