import React from "react";
import './recentHouse.css';
import Card from "../card/card";
import imageHouse1 from '../images/casa1/casa1-2.jpg';
import imageHouse2 from '../images/casa2/casa2-1.jpg';
import imageHouse3 from '../images/casa3/casa 3-1.jpg';
import imageHouse4 from '../images/casa4/casa4-2.jpg';
import imageHouse5 from '../images/casa5/casa5-2.jpg';

const RecentHouse = () => {


    return(
        <section className="recentHouseContainer">
        <h3 className="rhTittle">Casas - Chalets</h3>
        <div className="cardContenidoContainerHouse">
            <Card
                image={imageHouse1}
                location='Alvear 2430'
                condition='Venta'
                price='u$s 235000'
            />
            <Card
                image={imageHouse2}
                location='Quintana 856'
                condition='Venta'
                price='u$s 230000'
            />
            <Card
                image={imageHouse3}
                location='Lavalle 3600'
                condition='Venta'
                price='u$s 285000'
            />
            <Card
                image={imageHouse4}
                location='Castelli 650'
                condition='Venta'
                price='u$s 280000'
            />
            <Card
                image={imageHouse5}
                location='Rodriguez Peña 760'
                condition='Venta'
                price='u$s 210000'
            />
        </div>

    </section>




    )
};


export default RecentHouse;