import React from "react";
import './institucional.css';
import imageCustomerService from '../images/atencionAlCliente.jpg';
import realStateOffice from '../images/realStateOffice.jpg';
import CardHeaderSection from "../cardHeaderSection/cardHeaderSection";

const Institucional = () => {
    return(
        <>
        <CardHeaderSection 
        tittleHeroSection='Institucional'
        fraseHeroSection='dsada'
        />
        <section className="instContainer">  
            <h2 className="instTittle">Acerca de Nosotros</h2>
            <div className="imgTxtContainer">
                <div className="imageRSOContainter">
                    <img src={realStateOffice} className="imageRealStateOffice" alt="Real State Office Image"/>
                </div>
                <div className="textContainer">
                    <p>En el año 2022 Amigorena Propiedades inicia sus actividades en la gestión inmobiliaria, con la inauguración de su oficina, situada en la calle Leandro N. Alem 762, de la ciudad de Mar del Plata.</p>
                    <p>De esta manera, se pone en marcha un proyecto al que le dedicamos el mayor esfuerzo para satisfacer sus necesidades, ya sea de compra, alquilar, administrar, realizar una tasación y asesorar en cuanto inversiones.</p>
                    <p>Desarrollamos una cobertura integral de servicios inmobiliarios, en la ciudad de Mar del Plata, ya que trabajamos sostenidamente con el compromiso de alcanzar las expectativas que satisfagan exitosamente las demandas de nuestros clientes. Debido a eso dentro del rubro inmobiliario somos reconocidos por nuestra excelencia profesional y nuestro liderazgo.</p>
                </div>
            </div>
        </section>
        <section className="instAtCliente">
            <h2 className="instTittle">Atención al Ciente</h2>
            <div className="imgTxtContainer">
                <div className="imageCustomServiceContainer">
                    <img src={imageCustomerService} className="imageCustService" alt="Image Client" />
                </div>
                <div className="textContainer">
                    <p>Realizamos un continuo seguimiento a nuestros clientes. Contando con un equipo de Atención al Cliente trabajando para atender sus necesidades y garantizarle a usted el mejor negocio inmobiliario.</p>
                    <p>Ofrecemos una página web dinámica y muy fácil de usar, donde usted podrá encontrar rápidamente desarrollos inmobiliario, propiedades en venta y alquiler.</p>
                    <p>Sin otro particular, los saluda Atte. Nazareno Amigorena | CEO y TITULAR de Amigorena Propiedades</p>
                </div>
            </div>
        </section>
        </>
    )
};

export default Institucional;