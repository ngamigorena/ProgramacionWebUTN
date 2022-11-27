import React from "react";
import './card.css';

const Card = ({image, location, condition, price}) => {

    return (

    <div className="cardContainer">
        <div className="imageContainer">
            <img src={image} alt=''/>
        </div>
        <div className="cardContent">
            <div className="cardLocation">
                <h5>{location}</h5>
            </div>
            <div className="cardCondition">
                <h5>{condition}</h5>
            </div>
            <div className="cardPrice">
                <h4>{price}</h4>
            </div>
        </div>
        <div className="btnCard">
            <button>
                <a>Ver más</a>
            </button>
        </div>
    </div>
    
)
};

export default Card;