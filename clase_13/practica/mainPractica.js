/* Calcular el costo total de productos y/o servicios seleccionados por el usuario.
Calcular pagos en cuotas sobre un monto determinado.
Calcular el valor final de un producto seleccionado en función de impuestos y descuentos.
Calcular el tiempo de espera promedio en relación a la cantidad de turnos registrados.
Calcular la edad promedio de las personas registradas.
Calcular la nota final de alumnos ingresados.  */


//Calcular el costo total de productos y/o servicios seleccionados por el usuario.

productoSeleccionado = [];
valorDelProducto = [];


let cantidadDeProductos = parseFloat(prompt("Ingrese la cantidad de productos a calcular el costo total"))

const valorTotalProducto = () => {
    for (let i=0; i < cantidadDeProductos; i++){
        let producto = prompt("Ingresar producto seleccionado");
        productoSeleccionado.push(producto)
        let valorProducto = parseFloat(prompt ("Ingresar el valor del producto ingresado"));
        valorDelProducto.push(valorProducto);
    }
}

valorTotalProducto();

const sumaTotalProductos = valorDelProducto.reduce ((a,b) => a + b,0);

let tabla = [productoSeleccionado,valorDelProducto];

console.table(tabla);

console.log("Los productos ingresados fueron: " + productoSeleccionado);
console.log("Con un valor respectivo de: " + valorDelProducto);
console.log("El costo total de los productos seleccionados es de: " + sumaTotalProductos);


//Calcular pagos en cuotas sobre un monto determinado.

let nombreProductoA = prompt("Ingrese el nombre del producto");
let montoAPagar = parseFloat(prompt("Ingrese el monto que desea calcular"));
let cuotas = parseFloat(prompt("Ingrese la cantidad de cuotas"));

const cuota = (a,b) => (a / b);

console.log("Para el producto: " + nombreProductoA + " , con un valor de: " + montoAPagar + " se eligieron: " + cuotas +" cuotas");
console.log("El valor de la cuota es de: " + cuota(montoAPagar,cuotas));


//Calcular el valor final de un producto seleccionado en función de impuestos y descuentos.


const impuesto = (x) => x * 0.21;
const descuento = (x) => x * 0.10;

let nombreProducto = prompt("Ingrese el producto que desea calcular su valor final");
let valorProducto = parseFloat(prompt("Ingrese el valor del producto ingresado"));

const suma = (a,b) => a + b ;
const resta = (a,b) => a - b;


console.log("El valor final del producto " + nombreProducto + " es de: " + resta(suma(valorProducto,impuesto(valorProducto)), descuento(valorProducto)) + " con un descuento de: " + descuento(valorProducto) + " pesos");


//Calcular la edad promedio de las personas registradas.

edadPersonasRegistradas = [];

let cantidadDePersonasRegistradas = parseFloat(prompt("Ingrese la cantidad de personas a registrar"));

const registroDeDatos = () => {
    for (let i=0; i < cantidadDePersonasRegistradas; i++){
        let edadPersonas = parseFloat(prompt("Ingrese edad"));
        edadPersonasRegistradas.push(edadPersonas);
    }
}

registroDeDatos();

const sumatoriaEdades = edadPersonasRegistradas.reduce((a,b) => a + b,0); 
const promedio = (a,b) => a / b;

console.log("Las edades ingresadas fueron: " + edadPersonasRegistradas);
console.log("El promedio de edad de las: " + cantidadDePersonasRegistradas + " personas ingresadas es de: " + promedio(sumatoriaEdades,cantidadDePersonasRegistradas));


//Calcular el tiempo de espera promedio en relación a la cantidad de turnos registrados.


let turnosDisponibles = 10;
let tiempoPromedio = 8;
let turnos = 0; 

const tiempoDeEspera = () =>{
    return tiempoPromedio * turnos;
}

const formatoDeHora = (x) =>{
    if (x < 60){
        return x + " minutos";
    } else if (x >= 60){
        return parseInt(x/60) + ":" + (x%60) + "hrs";
    }
}

const pedidoDeTurno = () =>{
    let nombre = prompt("Ingrese su nombre");
    let pedirTurno = prompt("¿Desea sacar un turno?");
    if (pedirTurno == "si" || pedirTurno == "SI" || pedirTurno =="Si"){
        console.log(nombre + " ha registrado un turno correctamente y su tiempo de espera es de: " + formatoDeHora(tiempoDeEspera()));
        turnos++;
    } else {
        console.log(nombre + " no estaría entendiendo que hacés por acá...");
    }
}

for (let i=0; i < turnosDisponibles; i++){
    pedidoDeTurno();
}

// Calcular la nota final de alumnos ingresados
//calculé el promedio :S , habría que poner por ejemplo 3 notas y sacar la nota final de uno?

notas = [];
nomAlu = [];

let cantidadDeAlumnos = parseFloat(prompt("Ingresar la cantidad de alumnos"));

const cargaDeAlumnos = () => {
    for(let i=0; i<cantidadDeAlumnos; i++){
        //let nombreAlumno = prompt("Ingrese el nombre del alumno que desea cargar");
        //nomAlu.push(nombreAlumno); 
        let nota = parseFloat(prompt("Ingrese la nota del Alumno"));
        notas.push(nota);
    }
}

cargaDeAlumnos();

const sumaDeNotas = notas.reduce((a,b) => a + b, 0);
const promedio2 = (a,b) => a / b;

let resultadoPromedioNotas = promedio2(sumaDeNotas,cantidadDeAlumnos);

console.log("El promedio de notas ingresadas es de: " + resultadoPromedioNotas);



