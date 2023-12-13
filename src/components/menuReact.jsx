import React, { useState, useEffect } from 'react';
import estilos from './MenuReact.module.css';
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
    <div>
      <nav>
        <ul>
          {menu && menu.map((item, index) => (
            <li key={index} style={estilos} className='flex flex-row flex-1 justify-center items-center'>
              <a
                href={item.link}
                style={{ ...estilos, color: currentPage === item.link ? 'red' : '' }}
              >

                {item.title}

              </a>
              {item.icon === 'us' && <IconHome />}
              {item.icon === 'home' && <IconHome />}
              {item.icon === 'services' && <IconHome />}
              {item.icon === 'contact' && <IconContact />}
              {item.icon === 'catalogo' && <IconHome />}

            </li>
          ))}

        </ul>

      </nav>

    </div >
  );
};

export default MenuReact;

