import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
import imageDpto1 from '../images/dpto1/departamento-img1.jpg';
import imageDpto2 from '../images/dpto2/departamento2-1.jpg';
import imageDpto3 from '../images/dpto4/dpto4-1.jpg';

const CarouselBoot = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className='carouContainer'>
        <Carousel className="carouGeneral" activeIndex={index} onSelect={handleSelect} data-interval="false" data-keyboard="true">
        <Carousel.Item className="carouEachContainer">
            <img
            className="imageCarou"
            src={imageDpto1}
            alt="First slide"
            />
            <Carousel.Caption className="textCarou">
            <div className='textCarouContainer'>
                <h3>Departamento - Venta</h3>
                <p>Ubicado en zona Aldrey, digno de ver</p>
                <div className='btnCardPropTipoContainer'>
                    <button className='btnCardPropTipo'>Ver más</button>
                </div>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouEachContainer">
            <img
            className="imageCarou"
            src={imageDpto2}
            alt="Second slide"
            />

            <Carousel.Caption className="textCarou">
            <div className='textCarouContainer'>
                <h3>Casa - Venta</h3>
                <p>Moderna construcción con estilo minimalista</p>
                <div className='btnCardPropTipoContainer'>
                    <button className='btnCardPropTipo'>Ver más</button>
                </div>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouEachContainer">
            <img
            className="imageCarou"
            src={imageDpto3}
            alt="Third slide"
            />

            <Carousel.Caption className="textCarou">
            <div className='textCarouContainer'>
                <h3>Departamento - Venta</h3>
                <p> Ubicado en la zona de Alem tenemos esta moderna propiedad </p>
                <div className='btnCardPropTipoContainer'>
                    <button className='btnCardPropTipo'>Ver más</button>
                </div>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </section>
    );
}

export default CarouselBoot;