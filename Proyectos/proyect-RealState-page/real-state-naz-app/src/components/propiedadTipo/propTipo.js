import React from 'react';
import './propTipo.css';

const PlantillaPropTipo = (propTipo) =>{

  return (    
    <div class = "cardPropTipo">
      <div className='imagePlanPropTipoContainer'>
        <img src = {propTipo.image}  className="imagePlanPropTipo"/>
      </div>
      <div>
        <h5 className="locationPlanPropTipo">{propTipo.ubicacion}</h5>
      </div>
      <div>
        <h5 className="textPlanPropTipo">Se encuentra en: {propTipo.condicion}</h5>
        <h5 className="textPlanPropTipo">Valor: ${propTipo.precio}</h5>
      </div>
      <div className='btnCardPropTipoContainer'>
        <button className='btnCardPropTipo'>Ver más</button>
      </div>
    </div>

  )
}

export default PlantillaPropTipo;