import React from "react";
import './contenido.css';
import CarouselBoot from "../carousel/carousel";

const PropDestacadas = () => {

    return(
        <section className="propDestacadas">
            <h1 className="tittleSecPropDes">Propiedades Destacadas </h1>
            <CarouselBoot />

        </section>
    )
};

export default PropDestacadas;