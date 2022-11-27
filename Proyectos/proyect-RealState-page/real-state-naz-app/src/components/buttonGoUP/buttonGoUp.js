import React from "react";
import './buttonGoUp.css';
import { useEffect, useState } from "react";
import * as FaIcons from 'react-icons/fa';

const GoUpButton = () => {

    const [goTopButton, setGoTopButton] = useState(false);

    useEffect (()=> {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                setGoTopButton(true)
            } else{
                setGoTopButton(false)
            }
        })
    })

    const scrollUp = () => {
        window.scrollTo ({
            top:0,
            behavior: "smooth"
        })
    }


    return(
        <>
        <div className="btnGoUpContainer">
        {goTopButton && (
            <FaIcons.FaArrowAltCircleUp className="btnGoUp" onClick={scrollUp} />)}
        </div>
        </>





    )
};

export default GoUpButton;