//Pedir dos numeros al usuario y sumarlos

/*function suma (num1, num2){
    return (num1 + num2);
}

let num1 = parseFloat(prompt("Ingrese un numero"));
let num2 = parseFloat(prompt("Ingrese un numero"));

let result = suma(num1,num2);

console.log(result); 

//esto es primitivo y lo que hace es guardar en un espacio de la memoria la variable
//una vez declarada la función en la variable que declaro para invocar a la función le doy los parametros que quiero que el usuario ingrese

let result = suma(parseFloat(prompt("Ingrese un numero")),parseFloat(prompt("Ingrese un numero")));

console.log(result);


const sumar = (a,b) => a + b;

let result = suma(parseFloat(prompt("Ingrese un numero")),parseFloat(prompt("Ingrese un numero")));

console.log(result);


function devolverMayor (a, b){
    if (a>b){
        return a;
    }
    else if (a===b){
        return "Los numeros ingresados son iguales";
    }
    else{
        return b;
    }
}


const sumar = (a,b) => a + b;
let result = sumar(parseFloat(prompt("Ingrese un numero")),parseFloat(prompt("Ingrese un numero")));
console.log(result);
*/

// calcular el tiempo de espera promedio en relación a la cantidad de turnos registrados

/*const calcularTiempoPromedio = () =>{
    return turnos * tiempoPromedio;
}

//recibe un numero, si es menor a 60 devuelve numero + min, si es mayor a 60 devuelve numero + hr
const darFOrmatoDeHora = (tiempo) =>{
    if(tiempo < 60){
        return tiempo + "min";
    } else if (tiempo >= 60){
        return parseInt(tiempo/60) + ":" + (tiempo%60) + "hr";
    }
}

let tiempoPromedio = 10;
let turnos = 7;

const sacarTurno = () =>{
    let nombre = prompt("Ingresu su nombre");
    let quiereSacarTurno = prompt("Desea sacar un turno?");
        if (quiereSacarTurno == "si" || quiereSacarTurno == "Si" || quiereSacarTurno == "SI"){
            alert(nombre + " tiene turno para dentro de " + darFOrmatoDeHora(calcularTiempoPromedio()));
            turnos++;
        } else{
            alert("Que tenga buen día");
        }
}

Calcular el costo total de productos y/o servicios seleccionados por el usuario.
Calcular pagos en cuotas sobre un monto determinado.
Calcular el valor final de un producto seleccionado en función de impuestos y descuentos.
Calcular el tiempo de espera promedio en relación a la cantidad de turnos registrados.
Calcular la edad promedio de las personas registradas.
Calcular la nota final de alumnos ingresados. 

//Calcular el costo total de productos y/o servicios seleccionados por el usuario.

nombreDelServicio = [];
valorServicio = [];

let cantidadDeServiciosAIngresar = parseFloat(prompt("Ingrese la cantidad de servicios que desea cargar al sistema"));

const sumaCostoTotalDeServicios = () =>{
    for (let i = 0; i < cantidadDeServiciosAIngresar; i++){
    let servicio = prompt("Ingrese un servicio");
    nombreDelServicio.push(servicio);
    let valorDelServicio = parseFloat(prompt("Ingrese el valor del servicio previo"));
    valorServicio.push(valorDelServicio);
    }
}

sumaCostoTotalDeServicios();

const valorTotal = valorServicio.reduce((a,b) => a + b,0);

console.log("Ingresó al sistema " + cantidadDeServiciosAIngresar + " servicios. Los mismos son: " + nombreDelServicio);
console.log("El valor de cada servicio respectivamente es de: " + valorServicio);
console.log("El importe a pagar por el total de los servicios del mes es de: " + valorTotal);


//Calcular pagos en cuotas sobre un monto determinado.

let montoAPagar = parseFloat(prompt("Ingrese el monto que desea calcular"));
let cantidadDeCuotas = parseFloat(prompt("Ingrese la cantidad de cuotas que va a realizar"));

const cuota = (a,b) => (a/b);
let result = cuota(montoAPagar,cantidadDeCuotas); 

console.log("El valor de cada cuota será de: " + result);


//Calcular el valor final de un producto seleccionado en función de impuestos y descuentos.

const suma = (a,b) => a + b;
const resta = (a,b) => a - b;

const impuesto = x => x * 0.21;
const descuento = x => x * 0.10;

let producto = parseFloat(prompt("Ingrese el valor del producto"));

let valorDelProductoFinal = resta((suma(producto,impuesto(producto))),descuento(producto));

console.log("El valor final del producto es: " + valorDelProductoFinal);


//Calcular la edad promedio de las personas registradas.

edadPersonasRegistradas = [];
let cantidadDeRegistros = parseFloat(prompt("Ingrese la cantidad de personas a registrar"));

const registroEdad = () => {
    for(let i=0; i < cantidadDeRegistros; i++){
        let registroDeEdades = parseFloat(prompt("Ingrese su edad"));
        edadPersonasRegistradas.push(registroDeEdades);
    }
}

registroEdad();

const sumaTotalDeEdades = edadPersonasRegistradas.reduce((a,b) => a + b,0);

const promedio = (a,b) => a / b;
let resultadoPromedioDeEdades = promedio(sumaTotalDeEdades,cantidadDeRegistros);

console.log("El promedio de las edades ingresadas es de: " + resultadoPromedioDeEdades + " años.");


// Calcular la nota final de alumnos ingresados
//calculé el promedio :S  

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
const promedio = (a,b) => a / b;

let resultadoPromedioNotas = promedio(sumaDeNotas,cantidadDeAlumnos);

console.log("El promedio de notas ingresadas es de: " + resultadoPromedioNotas);
*/
//Calcular el tiempo de espera promedio en relación a la cantidad de turnos registrados.

let tiempoPromedio = 5;
let cantidadDeTurnos = 0;
let turnosMaximo = 20;

const tiempoPromedioDeEspera = () =>{
    return cantidadDeTurnos * tiempoPromedio;
}

const formatoDeTiempo = (x) => {
    if (x < 60){
        return x + " minutos";
    } else if (x >= 60){
        return parseInt(x/60) + ":" + (x%60) + " hrs";
    }
}

const sacarTurno = () =>{
    let nombre = prompt("Ingrese su nombre")
    let quiereSacarTurno = prompt("¿Quiere sacar un turno?");
    if (quiereSacarTurno == "Si" || quiereSacarTurno == "si" || quiereSacarTurno == "SI"){
        console.log(nombre + " su turno es el número " + cantidadDeTurnos + " y tiene de espera alrededor de " + formatoDeTiempo(tiempoPromedioDeEspera()) + " de espera.");
        cantidadDeTurnos++;
    }else{
        console.log("No estaría entendiendo que haces acá, pero bueno...");
    }
}

for (let i=0; i<turnosMaximo; i++){
    sacarTurno();
}










