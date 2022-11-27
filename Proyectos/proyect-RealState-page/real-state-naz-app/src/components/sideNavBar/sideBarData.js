import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'navText'
  },
  {
    title: 'Venta',
    path: '/venta',
    icon: <IoIcons.IoIosContract />,
    cName: 'navText'
  },
  {
    title: 'Buscador',
    path: '/buscadorDePropiedades',
    icon: <IoIcons.IoIosSearch />,
    cName: 'navText'
  },
  {
    title: 'Institucional',
    path: '/institucional',
    icon: <IoIcons.IoIosPaper />,
    cName: 'navText'
  },
  {
    title: 'Servicios',
    path: '/servicios',
    icon: <IoIcons.IoMdPeople />,
    cName: 'navText'
  },
  {
    title: 'Contáctenos',
    path: '/contacto',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'navText'
  }
];

