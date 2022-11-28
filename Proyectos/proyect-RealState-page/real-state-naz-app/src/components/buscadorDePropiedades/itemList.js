import React from "react";
import './itemList.css'

const PropList = ({propList}) => {

    return(
        <>
        <div className="propListMenu">
            {propList.map(prop => (
                <div class = "cardItemList">
                    <div className='imageItemListContainer'>
                        <img src = {prop.image}  alt="Department" className="imageItemList"/>
                    </div>
                    <div>
                        <h5 className="locationItemList">{prop.ubicacion}</h5>
                    </div>
                    <div>
                        <h5 className="textItemList">{prop.tipo} en {prop.condicion}</h5>
                        <h5 className="textItemList">Valor: ${prop.precio}</h5>
                    </div>
                    <div className='btnCardItemListContainer'>
                        <button className='btnCardItemList'>Ver más</button>
                    </div>
              </div>
            ))}



        </div>
        
        
        </>



    )
};

export default PropList;
