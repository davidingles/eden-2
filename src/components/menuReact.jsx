import React, { useState, useEffect } from 'react';
import estilos from './menuReact.module.css';
import { IconHome, IconContact } from './icons/IconHome';

const menu = [

  {
    title: 'Inicio',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Nosotros',
    icon: 'us',
    link: '/nosotros',
  },
  {
    title: 'Servicios',
    icon: 'services',
    link: '/servicios',
  },
  {
    title: 'Contacto',
    icon: 'contact',
    link: '/contacto',
  },
  {
    title: 'Catálogo',
    icon: 'catalogo',
    link: '/catalogo',
  },
]

const MenuReact = () => {
  const [currentPage, setCurrentPage] = useState('/');

  useEffect(() => {
    setCurrentPage(window.location.pathname)
  }, [])

  return (
    <ul>
      <li className='flex flex-col flex-1 justify-center items-start'>
        {menu && menu.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={estilos.mena}
            style={{ ...estilos, color: currentPage === item.link ? 'red' : '' }}
          >

            {item.title}

            {item.icon === 'us' && <IconHome />}
            {item.icon === 'home' && <IconHome />}
            {item.icon === 'services' && <IconHome />}
            {item.icon === 'contact' && <IconContact />}
            {item.icon === 'catalogo' && <IconHome />}

          </a>
        ))}

      </li>
    </ul>

  );
};

export default MenuReact;

