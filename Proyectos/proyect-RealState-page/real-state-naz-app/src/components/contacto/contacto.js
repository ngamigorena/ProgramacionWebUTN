import React from "react";
import {useForm} from "react-hook-form";
import './contacto.css';
import whatsappLogoNegro from '../images/whatsappNegro.svg';
import emailLogoNegro from '../images/emailNegro.svg';
import locationLogoNegro from '../images/locationWhiteNegro.svg';
import CardHeaderSection from "../cardHeaderSection/cardHeaderSection";



const Contacto = () => {
const {register, handleSubmit, formState:{errors}, watch} = useForm("");
const onSubmit = (data) => {
    console.log(data);
}

    return(

        <>
        <CardHeaderSection 
        tittleHeroSection='Contáctenos'
        fraseHeroSection='dsada'
        />
        <div className="tittleContainerContact">
            <h2 className="tittleForm"> Formulario de Contacto </h2>
            <div className="textContactUs">
                <div className="pContainerContact">
                    <p>Envíenos su consulta y le responderemos a la brevedad. Si lo desea, puede dejarnos un teléfono de contacto y nos comunicaremos con Ud. gracias por elegirnos!!!</p>
                </div>
            </div>
        </div>
        <div className="formInfoContainer">
            <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
                <div className="welcomeForm"> Bienvenido {watch('nombre')}</div>
                <div className="eachLineForm">
                    <input type="text" placeholder="Nombre" {...register('nombre', {required:true, minLength:3})} />
                    {errors.nombre?.type === 'required' && <p>Debe indicar un nombre</p>}
                </div>
                <div className="eachLineForm">
                    <input type="text" placeholder="Teléfono" {...register('telefono', {minLength:10})} />
                    {errors.telefono?.type === 'required' && <p>Debe tener como mínimo 10 caractéres</p>}
                </div>
                <div className="eachLineForm">
                    <input type="text" placeholder="E-mail" {...register('email',{required:true, pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i} )} />
                    {errors.email?.type === 'pattern' && <p>El formato es incorrecto</p>}
                </div>
                <div className="eachLineMessage">
                    <input type="text" {...register('mensaje', {maxLength:200})} placeholder="Mensaje"/>
                    {errors.mensaje?.type === <p>Debe tener como máximo 200 caractéres</p>}
                </div>
                <div className="eachLineFormBtn">
                    <input /* onClick={(setSend)} */ type="submit" value="Enviar" className="btnForm"/>
                </div>
            </form>
            <section className="infoContactContact">
                <div class="listContactFootContactForm">
                    <h3 class="tittleListFootContactForm">Amigorena Propiedades</h3>
                    <ul class="listElementFootContactForm">
                        <li>
                            <img src={locationLogoNegro} alt="icon location"  id="iconLocationFoot" />
                            <p>Leandro N. Alem 762 - Mar del Plata</p>
                        </li>
                        <li>
                            <img src= {emailLogoNegro} alt="Logo Email" />
                            <a href="*"><p>ngamigorena@gmail.com</p></a>
                        </li>
                        <li>
                            <img src={whatsappLogoNegro} alt="Logo whatsapp" />
                            <p>+5492234243368</p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        </>

    )
};

export default Contacto;