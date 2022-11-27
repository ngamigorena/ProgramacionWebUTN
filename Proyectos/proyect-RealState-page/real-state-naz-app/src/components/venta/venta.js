import React from 'react';
import PlantillaPropTipo from '../propiedadTipo/propTipo';
import './venta.css';
import CardHeaderSection from '../cardHeaderSection/cardHeaderSection';


const PropEnVenta = () => {

    const propiedades = [
        {
            image: 'https://www.roblescasascampos.com/res/Inmuebles/129016_129015_1650_2004281104_750x450.jpg',
            ubicacion: "Sarmiento 2552",
            condicion: "Venta",
            precio: 150000,
        },
        {
            image: 'https://www.roblescasascampos.com/res/Inmuebles/1650_1836344601_1260x650.jpg',
            ubicacion: "Olavarría 2356",
            condicion: "Venta",
            precio: 230000
        },
        {
            image: 'https://www.roblescasascampos.com/res/Inmuebles/1650_860306688_1260x650.jpg',
            ubicacion: "Olavarría 2356",
            condicion: "Venta",
            precio: 230000
        },
        {
            image: 'https://www.roblescasascampos.com/res/Inmuebles/1650_623746113_1260x650.jpg',
            ubicacion: "Olavarría 2356",
            condicion: "Venta",
            precio: 230000,
        }
    ];

    return (
    <>
    <CardHeaderSection 
        tittleHeroSection='Propiedades en Venta'
        fraseHeroSection='dsada'
    />
    <div className='tittlePropsSale'>
        <h1>Nuestra Selección de Propiedades Disponibles para Comprar</h1>
    </div>
    <section className='salePropsContainer'>
        
        {propiedades.map((propTipo)=>{
            return(
                <PlantillaPropTipo
                image={propTipo.image}
                ubicacion={propTipo.ubicacion}
                condicion={propTipo.condicion}
                precio={propTipo.precio}/>
        )})}

    </section>
    </>
    )
};

export default PropEnVenta;