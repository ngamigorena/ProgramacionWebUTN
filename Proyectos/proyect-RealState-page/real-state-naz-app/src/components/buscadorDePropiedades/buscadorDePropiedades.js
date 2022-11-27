import React, { useState } from "react";
import './buscadorDePropiedades.css';
import CardHeaderSection from "../cardHeaderSection/cardHeaderSection";
import data from '../data/data';
import {ButtonList} from "./buttonList";
import PropList from "./itemList";


const BuscadorDePropiedades = () => {


    const allProperties = ['Todas', ...new Set(data.map(itemList => itemList.tipo))]



    const [properties, setProperties] = useState(allProperties);
    const [propList, setPropList] = useState(data);

    const filterProperties = (property) =>{
        if (property === 'Todas'){
            setPropList(data)
            return
        }

        const filterData = data.filter(prop => prop.tipo === property);
        setPropList(filterData)
    }

    return(
        <>
        <CardHeaderSection 
            tittleHeroSection='Buscador de Propiedades'
            fraseHeroSection='dsada'
        />
        <div className='tittlePropsSale'>
            <h1>Aquí encontrarás todas las propiedaes que tenemos para negociar</h1>
        </div>
        
        <div className="btnBarItemList">
            <ButtonList properties={properties} filterProperties={filterProperties} />
        </div>
        <section className="searchBarProps">
        <div>
            <PropList propList={propList}/>
        </div>
        </section>
        </>



    )
};

export default BuscadorDePropiedades;