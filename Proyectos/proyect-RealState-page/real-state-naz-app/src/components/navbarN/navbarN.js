import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNavbar from "../sideNavBar/sideNavBar";
import './navbarN.css';

const NavbarN = () =>{

  return (

  <nav className="navbarN">
    <h3 className="logoNavBar">Naz Real State</h3>
      <ul className="navLinksN">
        <li>
          <Link to="/home" className="home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/venta" className="salePropNavBar">
            Venta
          </Link>
        </li>
        <li>
          <Link to="/buscadorDePropiedades" className="searchPropNavBar">
            Buscador de Propiedades
          </Link>
        </li> 
        <li>
          <Link to="/institucional" className="institucionalNavBar">
            Institucional
          </Link>
        </li>
        <li>
          <Link to="/servicios" className="serviceNavBar">
            Servicios
          </Link>
        </li>
        <li>
          <Link to="/contacto" className="contactNavBar">
            Contáctenos
          </Link>
        </li>
      </ul>
      <SideNavbar />
  </nav>

  )
}

export default NavbarN;
