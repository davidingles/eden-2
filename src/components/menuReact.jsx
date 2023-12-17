import React, { useState, useEffect } from 'react';
import estilos from './menuReact.module.css';
import { IconHome, IconContact, IconCatalogo, IconServices, IconNosotros } from './icons/IconHome';

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
    <li className='flex flex-col bordeRojo'>
      {menu && menu.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={estilos.mena}
          style={{ ...estilos, color: currentPage === item.link ? 'red' : '' }}
        >

          <div className={estilos.menadiv} style={{ marginLeft: '3rem', display: 'flex' }} >{item.title}</div>
          <div
            className={estilos.hover}
            style={{ display: 'flex', flex: '1', justifyContent: 'end', marginRight: '3rem' }}>
            {item.icon === 'us' && <IconHome />}
            {item.icon === 'home' && <IconNosotros />}
            {item.icon === 'services' && <IconServices />}
            {item.icon === 'contact' && <IconContact />}
            {item.icon === 'catalogo' && <IconCatalogo />}
          </div>

        </a>
      ))
      }

    </li >

  );
};

export default MenuReact;

