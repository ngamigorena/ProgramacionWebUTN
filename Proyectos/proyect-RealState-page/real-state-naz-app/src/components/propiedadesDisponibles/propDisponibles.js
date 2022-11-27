import React, { useState } from "react";
import './propDisponibles.css';

const PropiedadesDisponibles = () => {

    const [propiedades, setPropiedades] = useState(listaDePropiedades);
    const listaDePropiedades = [
        {   valor: 250000, 
            ubicacion:"Playa Grande", 
            condicion:"Venta", 
            id:1},
        {   valor: 200000, 
            ubicacion:"Playa Grande", 
            condicion:"Venta", 
            id:2},
        {   valor: 450000, 
            ubicacion:"Guemes", 
            condicion:"Venta", 
            id:3}
    ];

    setPropiedades(listaDePropiedades);

    return(

        <section className="itemListContainer">
            {propiedades.map((propiedad) => (
                <div>{propiedad.valor}</div>
            ))}
        </section>


    )
};

export default PropiedadesDisponibles;