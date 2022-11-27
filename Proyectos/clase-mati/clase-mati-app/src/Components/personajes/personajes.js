import React, { useEffect, useState } from "react";
import './personajes.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Personajes = () => {

    const [personajes, setPersonajes] = useState([]);

    useEffect (() =>{
    fetch("https:hp-api.herokuapp.com/api/characters")
        .then((response) => response.json())
        .then((personajes) => setPersonajes(personajes))
    });

    return(
        <>
        <h1>Aca van los personajes</h1>
        <Container>
        {personajes?
            <Row>
                {personajes.map((personaje,index) => (
                <Col sm={4} key={index}>
                <img style={{width: "40%"}} src={personaje.image} alt="personaje" />
                <h3>{personaje.name}</h3>
                <p>{personaje.house}</p>
                </Col>
                ))}
                
            </Row>
        : <div> Cargando personajes... </div>}
        </Container>
        </>
    )
};

export default Personajes; 