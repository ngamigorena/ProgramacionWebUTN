import React from "react";
import './servicios.css';
import CardHeaderSection from "../cardHeaderSection/cardHeaderSection";
import * as IoIcons from 'react-icons/io';


const Servicios = () => {
    return(
        <>
        <CardHeaderSection 
        tittleHeroSection='Nuestros Servicios'
        fraseHeroSection='dsada'
        />
        <section className="serviceContainer">
            <div className="serviceContainerText">
                <h1 className="tittleH"><IoIcons.IoIosArrowForward/> Nuestra Visión</h1>
                <div className="pContainer">
                    <p>Es nuestro deseo y compromiso brindar en tiempo y forma, un servicio diferenciado y eficiente, acompañados por profesionales experimentados en las distintas áreas, para así lograr que el producto a comercializar sea considerado “distinguido” por el mercado, con el objetivo final de satisfacer a nuestros clientes y desarrollistas agregando valor en cada nueva propuesta.</p>
                </div>
            </div>
            <div className="serviceContainerText">
                <h1 className="tittleH"><IoIcons.IoIosArrowForward/> Nuestra Misión</h1>
                <div className="pContainer">
                    <p>Buscamos otorgar un servicio personalizado con el objetivo de cuidar el patrimonio de nuestros clientes asesorándolos con profesionalismo, criterio y conocimiento del mercado inmobiliario. Es por eso que nuestro slogan es “Entendemos el valor de su patrimonio”.</p>
                </div>
            </div>
            <div className="intermediateTittle">
                <h1 className="tittleH">Nuestra Propuesta</h1>
            </div>
            <div className="serviceContainerText">
                <h1 className="tittleH"><IoIcons.IoIosArrowForward/> Para el Vendedor</h1>
                <div className="pContainer">
                    <p>Su inmueble será valuado no solo teniendo en cuenta los parámetros tradicionales, sino también considerando su potencial, y al mismo tiempo su difusión será llevada adelante por medio de las últimas herramientas de comunicación.</p>
                    <p className="tittleInP">PRIMER CONTACTO:</p>
                    <div>
                    <p>- Ya sea de forma personal en nuestra oficina, vía telefónica o digital, lo atenderemos de forma inmediata, escuchando su necesidad o ideal por el cual se comunica con nosotros.</p>
                    <p>- Conociendo la ubicación de la propiedad y estando está dentro de nuestro marco de influencia, le comunicamos nuestra forma de trabajo.</p>
                    <p>- Según el tipo de propiedad por la cual solicita nuestro servicio concretaremos una reunión o una visita, solicitando los documentos que demuestren su titularidad y bajo su conocimiento de que la propiedad será ofrecida solo con autorización de venta exclusiva y colocación de cartel de ser posible.</p>
                    </div>
                    <p className="tittleInP">ANÁLISIS PREVIO:</p>
                    <p>- Antes de visitar su propiedad se hará un informe donde se obtendrán los datos catastrales de la misma, la plancheta junto con las dimensiones del lote y superficie cubierta.
                    - Sumado a esto se verificará el distrito urbano donde se encuentra emplazado y se evaluará su potencial y posibles usos, desarrollando un estudio de factibilidad de construcción de acuerdo a sus indicadores.</p>
                    <p className="tittleInP">TASACIÓN:</p>
                    <p>- En la visita o reunión se le explicarán los resultados del informe mencionado, que sumados a la experiencia de las últimas operaciones realizadas y propiedades ofrecidas en la zona darán como resultado el valor estimado para su propiedad. Como así también las distintas posibilidades de ofrecimiento o usos posibles.</p>
                    <p className="tittleInP">TOMA Y OFRECIMIENTO DE LA PROPIEDAD:</p>
                    <div>
                    <p>- De estar de acuerdo con el valor estimado y nuestra forma de trabajo, se le solicitará la firma de una autorización de venta exclusiva con los documentos adjuntos que acrediten su titularidad o poder de representación. La exclusividad será para representarlos, lo que no infiere en que sea ofrecida por nosotros a los demás colegas. De esta manera nos aseguramos de defender su patrimonio pero sin dejar de lado ningún potencial cliente.</p>
                    <p>- Aseguramos el ser ofrecida a todos nuestros clientes y círculo de influencia, ser publicada y darle visualización mediante nuestra página web, portales inmobiliarios de mayor posicionamiento en el mercado (tanto nacional como internacional) y redes sociales.</p>
                    <p>- Para esto contamos con un fotógrafo profesional que asistirá a documentar la propiedad, dos drones en la empresa manejados por personal de nuestro Staff para registrar su propiedad desde los mejores puntos, camara y sistema matterport para realizar un tour virtual que le dará a los interesados una idea completamente real llegando a realizar una visita únicamente con el potencial comprador. Por último personal de marketing y comunicación realizará una descripción adecuada para su propiedad y junto al material gráfico lo expondrá de la mejor manera.</p>
                    <p>- Será ofrecida y visitada por personal calificado de nuestra empresa que acompañara a los interesados o potenciales compradores. Todos nuestros agentes son profesionales o se encuentran en formación.</p>
                    </div>
                    <p className="tittleInP">RESERVA Y CONCRECIÓN DE LA OPERACIÓN:</p>
                    <div>
                        <p>- Como nuestro lema indica “Entendemos el valor de su patrimonio”. Defenderemos el valor, al igual que se le indicará si la oferta propuesta es razonable o viable. De igual manera se lo asesorará en todo lo que necesite ya sea en materia impositiva o notarial.</p>
                        <p>- Se lo acompañara presencialmente en la firma de la escritura.</p>
                    </div>
                </div>
            </div>
            <div className="serviceContainerText">
                <h1 className="tittleH"><IoIcons.IoIosArrowForward/> Para el Comprador</h1>
                <div className="pContainer">
                    <p>Lo acompañaremos en todo el proceso, desde la búsqueda del inmueble que desea, hasta la finalización de la operación, siempre asesorándolo en lo que necesite, ya sea en aspectos impositivos, de arquitectura y demás inquietudes.</p>
                    <p className="tittleInP">PRIMER CONTACTO:</p>
                    <p>- Ya sea de forma personal en nuestra oficina, vía telefónica o digital, lo atenderemos de forma inmediata, escuchando su necesidad o ideal por el cual se comunica con nosotros.</p>
                    <p className="tittleInP">ASESORAMIENTO PROFESIONAL:</p>
                    <div>
                        <p>- Si su consulta es por una propiedad puntual, solicitaremos conocer por qué medio conoció su ofrecimiento. De esta manera sabremos a que información pudo acceder y la completaremos.</p>
                        <p>- De ser de su agrado todo lo dispuesto en cuanto a información, material gráfico y valor estimado, nuestro agente estará a su disposición para poder coordinar, de acuerdo a su agenda y disponibilidad, una visita.</p>
                        <p>- Si la propiedad no resultara de su agrado, nuestro personal realizará una búsqueda de acuerdo a sus necesidades y estilo determinado, tanto en nuestro propio stock como en lo ofrecido por otros colegas, buscando poder encontrar lo que desea.</p>
                        <p>- Si su consulta inicial fuera solicitando asesoramiento profesional, exponiendo sus necesidades y anhelos, nuestros comerciales se encargaran de hacer la búsqueda pertinente y mostrarle o mandarle el material digital para hacer una primera aproximación. De esta manera podremos definir con mayor exactitud su pedido, para luego coordinar una reunión en nuestra oficina y realizar los tours virtuales de aquellas que le interesaran para finalmente si llegar a concretar las visitas de a las propiedades que cumplan con todas sus expectativas.</p>
                        <p>- Asesoramiento en cuanto a posibles reformas, soluciones constructivas, de diseño o funcionales, para lograr visualizar el potencial de la propiedad evaluada y como resultado pueda ser la buscada.</p>
                    </div>
                    <p className="tittleInP">RESERVA Y CONCRECIÓN DE LA OPERACIÓN:</p>
                    <div>
                        <p>- Se asesorará en cuanto a la oferta a presentar, logrando el valor más conveniente.</p>
                        <p>- Se lo asesorará en todo lo que necesite ya sea en materia impositiva o notarial.</p>
                        <p>- Se lo acompañara presencialmente en la firma de la escritura.</p> 
                    </div>
                </div>               
            </div>
        </section>
        </>



    )
};

export default Servicios;