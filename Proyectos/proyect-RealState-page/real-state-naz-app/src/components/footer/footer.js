import React from "react";
import './footer.css';
import playIcon from '../images/play-icon.svg';
import whatsappLogo from '../images/whatsapp.svg';
import emailLogo from '../images/email.svg';
import locationLogo from '../images/locationWhite.svg';



const Footer = () => {

    return(

        <footer class="footContainer">
            <div class="footSecContainer">
                <div class="mainFootSec">
                    <div class="logoSpace">

                    </div>
                    <div class="listOptionsFoot">
                        <h3 class="tittleListFoot">Links</h3>
                        <ul class="listElementFoot">
                            <li><a href=""></a><img src={playIcon} alt="icon" /> Venta</li>
                            <li><a href=""></a><img src={playIcon} alt="icon" /> Alquiler</li>
                            <li><a href=""></a><img src={playIcon} alt="icon" /> Temporario</li>
                            <li><a href=""></a><img src={playIcon} alt="icon" /> Tasación</li>
                        </ul>
                    </div>
                    <div class="listContactFoot">
                        <h3 class="tittleListFoot">Contáctenos</h3>
                        <ul class="listElementFoot">
                            <li><img src={locationLogo} alt="icon location"  id="iconLocationFoot" />
                                <p>Leandro N. Alem 762 - Mar del Plata</p>
                            </li>
                            <li>
                                <img src= {emailLogo} alt="Logo Email" />
                                <a href=""><p>ngamigorena@gmail.com</p></a>
                            </li>
                            <li><img src={whatsappLogo} alt="Logo whatsapp" />
                                <p>+5492234243368</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
            <div class="nameCreator">
                <h5>Desarrolado by Naz </h5>
            </div>
        </footer>


    )
};

export default Footer;