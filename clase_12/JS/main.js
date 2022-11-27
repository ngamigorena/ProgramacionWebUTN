/* Bucles e Iteraciones 
//While
//Incremento

let i = 0;

while(i <= 10){  
    console.log("El valor de i: " + i);
    i++;
}

//Decremento

let numero = 100;

while (numero > 0){
    document.write("Te queda de saldo: " + numero, '<br>');
    numero = numero - 5;
}


let numero = 0;

do {
    console.log("Empecemos a contar: " + numero);
    numero++;
} while(numero < 10);

//ejemplo
let pasosRestantes = 100;

while (pasosRestantes > 0){
    if (pasosRestantes == 1){
        document.write("Queda el último paso por dar");
    } else {
    document.write("Solo faltan " + pasosRestantes + " pasos por caminar.", '<br>');
    }
    pasosRestantes--;
}

//For
// for (inicializacion; condicion; actualizacion)

//Basico 

for (let i = 0; i < 5; i++){
    console.log(i);
}

//Propiedad length del array
let frutas = [
    "Manzana",
    "Pera",
    "Frutilla",
    "Pera",
    "Mora",
    "Limón",
    "Kiwi"
    ];

    for (let i=0; i < frutas.length; i++){
        let fruta = frutas[i];
        console.log( fruta + " tiene " + fruta.length + " letras");
    } 


let numero = parseInt(prompt("Ingresa un número del 1 al 10"));

for (let i = 0; i <= 10; i++){
    let resultado = numero * i;
    document.write(numero + " x " + i + " = " + resultado + " ");
}

for(let i = 1; i <= 5; i++){
    //Solicitar en cada repeticion un nombre
    let ingresarNombre = prompt("Ingrese un nombre");
    //Informar el turno asignado con un nombre
    alert("Turno número " + i + " Nombre: " + ingresarNombre);
}


// Método de Arrays ForEach

let objetosMagicos = ["Varita", "Libro", "Lechuza", "Caldero"];

objetosMagicos.forEach(function(objetosMagicos){
    console.log("objeto con forEach es: ", objetosMagicos);
})

objetosMagicos.forEach((objetosMagicos)=>
console.log("lo mismo pero con funcion flecha: ", objetosMagicos));


//map lo que hace es modificar los valores del array, creado otro array con los parametros dados

const numeros = [1,2,3,4,5,6];
const numPorDos = numeros.map((x)=> x*2);

let palabras = [
    "pepe",
    "moni",
    "coki",
    "paola"
];

let palabrasArgento = palabras.map((x)=> x + " es de la familia argento");

console.log(palabrasArgento)
console.log("numero por dos: ", numPorDos);


// Find , devuelve el primer valor que devuelve los parametros dados

const numeros = [1,2,3,4,5,6];
const encontrado = numeros.find((x)=> x > 3);
console.log(encontrado);

let argento = [
    "pepe",
    "moni",
    "coki",
    "paola"
];

const encontrado2 = argento.find((x) => x === "coki");
console.log(encontrado2);

// Filter, recibe la funcion con 3 elementos y filtrar elementos seleccionados

let numeros = [2, 5, 6, 18, 201];

//let numMayoresCinco = numeros.filter((x) =>  x > 5);

let numMayoresCinco = numeros.filter((x) =>  {
    return x > 5
});

console.log(numMayoresCinco);

const numeros = [1, 5, 7, 8, 11, 13, 14, 17, 19, 20];

for (let i = 0; i < numeros.length; i++){
    console.log("los numeros del array son ", numeros[i]);
};


//for of, bucle para recorrer arrays
const numeros = [1, 5, 7, 8, 11, 13, 14, 17, 19, 20];
const result = [];


for(let elemento of numeros){
    //console.log(elemento);
    if (elemento > 9){
        console.log("el numero ", elemento, " es mayor a 9");
    } else {
        result.push(elemento);
        //result.push agrega al final el elemento que le pasemos
    }
}
console.log(result);



//Ejercicio 1
const numeros = [1, 5, 7, 8, 11, 13, 14, 17, 19, 20];
const retPar = [];
const retImp = [];

const result = numeros.map ((x) => {
    if (x % 2 == 0 ){
        console.log("El numero ", x, " es un número par.");
        retPar.push(x);
        return x + " es par";
    } else {
        console.log("El numero ", x, " es un número impar.");
        retImp.push(x);
        return x + " es impar";
    }
})
console.log(result)
;
console.log(retPar);
console.log(retImp);

//ejercicio 2

const argento = [
    "pepe",
    "moni",
    "coki",
    "paola",
    "maria elena",
    "dardo fuseneko"
];

const nombresCortos = argento.filter((x) =>{
    while (x.length < 5){
        return x;
        }
})
console.log(nombresCortos);
;

const nombresCortos1 = argento.filter((x) => x.length < 5);
console.log(nombresCortos);
*/

//Ejercicio 3
// pregunten al usuario 5 nombres y agregenlos a un array
// luego muestren solo los que sean mayores a 7 letras por alerta
/*    
let i = 0;
nomIng = [];

while (i < 5){
    const nombresIngresados = prompt("Ingrese un nombre");
    i++;
    nomIng.push(nombresIngresados);
} 

const nombreMayorSieteLetras = nomIng.filter ((x)=> x.length > 7);
alert(nombreMayorSieteLetras);


for (let i=0; i < frutas.length; i++){
    let fruta = frutas[i];
    console.log( fruta + " tiene " + fruta.length + " letras");
}  */

nomIn = [];

for (let i = 0; i < 5; i++){
    let nombreIngresado = prompt("Ingrese un nombre");
    nomIn.push(nombreIngresado);
}

const nombreMayorASieteLetras = nomIn.filter((x)=> x.length >7);
console.log(nombreMayorASieteLetras);





