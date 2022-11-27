import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = ({tituloPagina, color}) => {
    return(

        <nav style={{backgroundColor: color}}>
            <h1>{tituloPagina}</h1>
            <ul>
                <li>
                    <NavLink to="/blue">
                        Ir a modo azul
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/green">
                        Ir a modo verde
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/elementos">
                        Ir al Contenido
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contacto">
                        Contacto
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/ejemplo">
                        Ejemplo
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/personajes">
                        Personajes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        Volver al inicio
                    </NavLink>
                </li>
            </ul>
        </nav>



    )
}


export default Navbar;
