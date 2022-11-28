import dptoBuscador1 from '../images/deptos/dpto1Buscador.jpg'


const data = [
    {
        id: 1,
        image: 'https://www.eiql.com.pe/wp-content/uploads/2020/03/INTERIOR_5-Foto-scaled.jpg',
        ubicacion: "Matheu 653",
        condicion: "Venta",
        precio: 270000,
        tipo: 'Casa - Chalet'
    },
    {
        id: 2,
        image: 'https://www.roblescasascampos.com/res/Inmuebles/1650_1836344601_1260x650.jpg',
        ubicacion: "Olavarría 2356",
        condicion: "Venta",
        precio: 230000,
        tipo: 'Departamento'
    },
    {
        id: 2,
        image: 'https://images.adsttc.com/media/images/5954/c1f4/b22e/38be/e300/0100/newsletter/2015_DEPTO_JSMH_SMA_PHOTO_by_Paul_Rivera__03.jpg?1498726896',
        ubicacion: "Alsina 2455",
        condicion: "Venta",
        precio: 180000,
        tipo: 'Departamento'
    },
    {
        id: 4,
        image: 'https://www.roblescasascampos.com/res/Inmuebles/1650_623746113_1260x650.jpg',
        ubicacion: "Guemes 2103",
        condicion: "Venta",
        precio: 420000,
        tipo: 'Departamento'
    },
    {
        id: 5,
        image: 'https://www.eiql.com.pe/wp-content/uploads/2019/05/D.jpg',
        ubicacion: "Alsina 1952",
        condicion: "Venta",
        precio: 290000,
        tipo: 'Casa - Chalet'
    },
    {
        id: 6,
        image: 'https://i.pinimg.com/originals/ee/d0/6a/eed06ab1893788f47793c22bfb731655.jpg',
        ubicacion: "Alsina 2111",
        condicion: "Venta",
        precio: 190000,
        tipo: 'Departamento'
    },
    {
        id: 7,
        image: 'https://www.eiql.com.pe/wp-content/uploads/2020/03/dise%C3%B1o-y-decoracion-interior-para-casas-peru.jpg',
        ubicacion: "Gral. Roca 936",
        condicion: "Venta",
        precio: 285000,
        tipo: 'Casa - Chalet'
    },
    {
        id: 8,
        image: 'https://media.admagazine.com/photos/62324238908601a5e7e84bd3/3:2/w_3000,h_2000,c_limit/CASA-OCHO_0013.jpg',
        ubicacion: "Guemes 2236",
        condicion: "Venta",
        precio: 350000,
        tipo: 'Casa - Chalet'
    },
    {
        id: 9,
        image: 'https://www.24-horas.mx/wp-content/uploads/2021/12/shutterstock-1597511782-61c4590a3907f754699969.jpg',
        ubicacion: "Gral. Lavalle 1856",
        condicion: "Venta",
        precio: 120000,
        tipo: 'Departamento'
    },
    {
        id: 10,
        image: 'https://images.homify.com/c_fill,f_auto,q_0,w_740/v1538681178/p/photo/image/2738413/Render_Gustavo-07.jpg',
        ubicacion: "Olvarría 2678",
        condicion: "Venta",
        precio: 400000,
        tipo: 'Casa - Chalet'
    },
    {
        id: 11,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1IhKDRkwZcmXibL4O49Zw3XMnq2TwOP04oS17kEBolv5PWO6w7qIVzQ3aExzH_vgk3Y&usqp=CAU',
        ubicacion: "Formosa 652",
        condicion: "Venta",
        precio: 320000,
        tipo: 'Casa - Chalet'
    },
    {
        id: 12,
        image: 'https://casa-web.com.ar/wp-content/uploads/2013/09/decoracion-tonos-claros-para-departamento-chico.jpg',
        ubicacion: "Gascón 1565",
        condicion: "Venta",
        precio: 110000,
        tipo: 'Departamento'
    },
    {
        id: 13,
        image: 'https://revistainmueble.economistjurist.es/wp-content/uploads/sites/4/2020/12/Interiores.jpg',
        ubicacion: "Quintana 860",
        condicion: "Venta",
        precio: 330000,
        tipo: 'Casa - Chalet'
    },
    {
        id: 14,
        image: 'https://dnb2eg0emsxdz.cloudfront.net/cdn/13/images/curso-a-distancia-diseno-de-interiores_l_primaria_1_1518180177.jpg',
        ubicacion: "Alvarado 256",
        condicion: "Venta",
        precio: 350000,
        tipo: 'Casa - Chalet'
    },
    {
        id: 15,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwwXNiP4FlZTTD-4526w3lvO3jflA-RHRAk6FB5b43FVf3RxlBvj9X7_DCqku4fX4kMI&usqp=CAU',
        ubicacion: "Gascón 1236",
        condicion: "Venta",
        precio: 130000,
        tipo: 'Departamento'
    },
    {
        id: 16,
        image: 'https://mx.habcdn.com/photos/project/medium/propuesta-de-diseno-interior-en-sala-281378.jpg',
        ubicacion: "Castelli 598",
        condicion: "Venta",
        precio: 230000,
        tipo: 'Casa - Chalet'
    },
    {
        id: 17,
        image: 'https://puntodestino.com.mx/wp-content/uploads/2021/05/departamento-pequeno.jpg',
        ubicacion: "Arenales 2269",
        condicion: "Venta",
        precio: 180000,
        tipo: 'Departamento'
    },
    {
        id: 18,
        image: 'https://media-cdn.tripadvisor.com/media/vr-splice-j/05/64/7b/84.jpg',
        ubicacion: "Las Heras 2078",
        condicion: "Venta",
        precio: 110000,
        tipo: 'Departamento'
    },
    {
        id: 19,
        image: 'https://decoraideas.com/wp-content/uploads/2019/08/07-1-768x565.jpg',
        ubicacion: "Rawson 421",
        condicion: "Venta",
        precio: 310000,
        tipo: 'Casa - Chalet'
    },
    {
        id: 20,
        image: 'http://2.bp.blogspot.com/-3SPbWcYxAwQ/T7KI3_9LFyI/AAAAAAAAYLY/3e3tLDYBxoU/s1600/deptomoscu.jpg',
        ubicacion: "Tucumán 1753",
        condicion: "Venta",
        precio: 100000,
        tipo: 'Departamento'
    },
    
];

export default data;