import React, { useEffect, useState } from "react";


const Ejemplo = () => {
    let texto = "texto información..................."
    const[nombre, setNombre] = useState('Hermione');
    const cambiarNombre = () =>{
        setNombre ('Harry');
    }

    const [count, setCount] = useState (0);

    const [info, setInfo] = useState ('');

    useEffect(() =>
        console.log("El componente ha cambiado de estado")
    );

    useEffect (() => {
        document.title = `Has hecho click ${count} veces`}
    );

    return(
        <div>
            <h2> Ejemplos </h2>
            <h3>{nombre}</h3>
            {/* <button onClick={()=> setNombre ('Harry')}> Cambiar Nombre</button> */}
            <button onClick={cambiarNombre}>Cambiar Nombre</button>
            <button onClick={()=> setInfo(texto)}> Mostrar Texto</button>
            <p>{info}</p>
        <div>
            <span> El contador {count} </span>
            <button onClick={()=> setCount (count - 1)}> Decrementar contador </button>
            <button onClick={()=> setCount (count + 1)}> Incrementar contador </button>
        </div>

        </div>



    )
}

export default Ejemplo; 