/* alt + 96 backticks */
 
//let numero  = 23;
//let numero2 = 13;
//let texto = "23";
//let texto2 = "texto 2";

//document.write(numero == numero2);
/* == es que es igual */

//document.write(numero != numero2);
/* != desigual */

//document.write(texto==numero);
/* si es igual en cuanto a contenido, no distingue tipo */

//document.write(texto===numero);
/* === si es estrictamente igual tanto contenido como tipo de dato */

//document.write(numero != texto);
/* != */

//document.write(texto!== numero);
/* !== estrictamente desigual */

//let resultado = numero > numero2;
//document.write(resultado);
/* > < >= <= */ 
/* let valor = true;
let valor2 = true;

let resultado = valor && valor2;
/* seria como un si y solo si 

let resultado2 = valor || valor2;
/* or si una de las dos condiciones se cumple, es verdadero 

let resultado3 = !valor;
/* not logico, lo que se hace al agregar el !, es modificar el valor que te da de resultado, solo funciona con true o false, entonces te pone la condicion inversa 

document.write(true&&true);
/* solo acepta valor booleanos por lo que si uno y el otro es verdadero va a dar true 

let num1 = 12;
let num2 = 24;

afirmacion1 = num1 < num2;
afirmacion2 = num1 != num2;

document.write(afirmacion1 && afirmacion2); 

//let pc2 = ["NazPC", "Intel Core I7", "16GB", "1TB"];

let pc = {
    nombre: "NazPC",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio: "1TB",
};

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram= pc["ram"];
let espacio = pc["espacio"];

let frase = `El nombre de mi pc es: ${nombre} <br> 
             El procesador de mi pc es: ${procesador} <br> 
             La memoria ram es de: ${ram} <br> 
             El espacio del disco es de: ${espacio}`;

document.write(frase);

//while

let numero = 0;

while (numero < 10){
    numero++;
    document.write(numero);
}

//do while

let numero = 0;

do {
    numero++;
    document.write (numero);
} while (numero < 7);


//sentencia break, puede usarse para que busque un determinado dato en una base de datos y cuando lo encuentre deje de buscar

let numero = 0;

while(numero < 1000){
    numero++;
    document.write(numero);
    if (numero == 10){
        break;
    }
}


// tiene tres partes: la declaracion, la condicion y la iteracion(aumento o decremento)

//puede declararse e inicializarse en el mismo bucle
//puede declararse afuera
// let i= 20; y luego se pone (i; i<6; i++)

for (let i = 0; i<20; i++ ){
    if (i == 6){
        //break;
        continue;//salta la sentencia que uno quiere que no se guarde
    }
 document.write(i + " ");
};


//for i y for of
//recorren el array y uno guarda en la variable la posicion el in, y el otro el valor de la posicion que es el of

let animales = ["gato", "perro", "mangoose"];

for (animal in animales){
    document.write(animal + " ");
    document.write(animales[animal] + " ");
    document.write(animales[2]+ " ");
}
//for in te devuelve la posicion en la que esta el elemento pero si añido el array me sale lo que esta en la posicion

for (animal of animales){
    document.write(animal + " ");
}
*/

let array1 = ["boca", "river","san lorenzo"];
let array2 = ["aldosivi", "alvarado", array1];

for (let array in array2){
    if(array == 2){
        for(let array of array1){
            document.write(array +" ");
        }
    }else {
        document.write(array2[array]+ " "); 
    }

}

