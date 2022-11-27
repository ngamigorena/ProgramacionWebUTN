import React from "react";
import './recentDpto.css';
import Card from "../card/card";
import imageDptoR1 from '../images/dpto5/dpto5-1.jpg';
import imageDptoR2 from '../images/dpto6/dpto6-1.jpg';
import imageDptoR3 from '../images/dpto7/dpto7-1.jpg';

const RecentDpto = () => {


    return(
        <section className="recentDptoContainer">
            <h3 className="rdTittle">Departamentos</h3>
            <div className="cardContenidoContainerDpto">
                <Card
                    image={imageDptoR1}
                    location='Mitre 1600'
                    condition='Venta'
                    price='u$s 320000'
                />
                <Card
                    image={imageDptoR2}
                    location='La Rioja 200'
                    condition='Venta'
                    price='u$s 199000'
                />
                <Card
                    image={imageDptoR3}
                    location='Aristobulo del Valle 3400 '
                    condition='Venta'
                    price='Consulte'
                />
            </div>

        </section>

    )
};


export default RecentDpto;