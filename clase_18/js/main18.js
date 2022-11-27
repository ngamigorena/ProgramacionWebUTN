//Repaso JS

//Variables

let numero = 2;
let string = "Yo soy un string " + numero;
let booleano = true;

console.log(numero);

//Bloque de codigo - sentencia

/* {
    let numero2 = 5;
    console.log(numero);
    console.log(numero2);
}

//Condicionales 
let nombreIngresado   = prompt("Ingresar nombre");

if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
    alert("Hola Ema"); 
}else{
    alert("Error: Ingresar nombre valido");
} 

//Bucles

let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}
*/
/*
//Funciones
//Cuando es algo que queremos repetir, realizarla de manera generica
//Se puede usar en cualquier parte del codigo y modificar

const suma  = (a, b) => { return a + b };
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta = (a, b) =>  a - b ;
console.log(suma(15,20));
console.log(resta(20,5));

//Objetos 

function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar();

//Arrays
const numeros  = [1, 2, 3, 4, 5];
const porDos   = numeros.map(x => x * 2);   // porDos = [2, 4, 6, 8, 10]
const masCien  = numeros.map(x => x + 100); // porDos = [102, 104, 106, 108, 110]

const nombres = ["Ana", "Ema", "Juan", "Elia"];
const lengths = nombres.map(nombre => nombre.length);//lengths = [3, 3, 4, 4]

//Lectura - SOLO LO VAMOS A LEER NO A MODIFICAR
//forEach es para arrays unicamente para recorrer el array
//al forEarch se le pueden pasar tres parametros: el argumento = valor, el indice, y la cantidad total de elementos del array
let array = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
]

array.forEach((dia, indice, semana) => {
    console.log(dia + " tiene el indice " + indice + " y los dias de la semana son: " + semana);
});

//En flecha para solo buscar el argumento
array.forEach(dia => console.log(dia));


//PARA MODIFICAR ARRAY
let nuevoArray = array.map((dia)=>{
    return "el día es " + dia; 
})
console.log(nuevoArray);

const numeros2 = [1, 2, 3, 4];
const porCinco =  numeros2.map((num) => {
    return "El nuevo numero es: " + (num * 5)
})
console.log(porCinco);

//Para FILTRAR para poner un filtro a determinadas condiciones que le digamos

const numeros3 = [2, 5, 10, 18, 25];

let numMayorSiete = numeros3.filter((n)=>{
    return n > 7;
});

console.log(numMayorSiete);


 //JSON
const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];


//Eventos del DOM
//CODIGO HTML DE REFERENCIA
<form id="formulario">
<input type="text">
<input type="number">
<input type="submit" value="Enviar">
</form>
//CODIGO JS
let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario); 

//en la variable que tomamos del DOCUMENTO por el ID le agregamos un EVENTO que tiene dos parametros, uno es lo que pretendemos que suceda y la otra es la funcion al evento

function validarFormulario(e){
e.preventDefault(); //PREVIENE que la pagina se recargue
console.log("Formulario Enviado");    
} */
