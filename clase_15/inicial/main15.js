//Ejemplo setInterval
//Funcion para que nos muestre la hora


const meses = new Array ("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
const diaEnLetras = new Array ("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");

function mostrarHora(){
    let reloj = document.getElementById("reloj");
    let hora = new Date();
    reloj.innerHTML = hora.toLocaleTimeString();
}

let cronometro = setInterval(mostrarHora,1000);


function mostrarDia(){
    let dia = document.getElementById("dia");
    let diaDeLaSemana = new Date();
    dia.innerHTML = diaEnLetras[diaDeLaSemana.getDay()];
    dia.innerHTML += " " + diaDeLaSemana.getDate();
    dia.innerHTML += " de " + meses[diaDeLaSemana.getMonth()];
    dia.innerHTML += " de " + diaDeLaSemana.getFullYear();
}

mostrarDia();

