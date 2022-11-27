import React from "react";
import './intro.css';
import imageCity from './city.jpg';
import CustomButton from "../button/customButton";

const Intro = ({titulo}) => {
    return(
    <div className="containerImagen">
        <img src={imageCity} className="imageCity" alt="Foto City" />
        <h1>{titulo}</h1>

        <CustomButton texto="Botón Intro"></CustomButton>
        <CustomButton color="darkblue" /* si quiero agregar algun color */ texto="Para dónde vas?"></CustomButton>
    </div>
)};

export default Intro;