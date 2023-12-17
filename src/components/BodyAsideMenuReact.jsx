import { useState, useEffect } from 'react';
import { Counter } from '@/components/Counter.jsx';

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



export default function BodyAsideMenuReact() {
	const [currentPage, setCurrentPage] = useState('/');
	useEffect(() => {
		setCurrentPage(window.location.pathname)
	}, [])
	return (
		<div className="body-aside-menu">
			<h2>BodyAsideMenuReact</h2>
			<Counter

				transition:name="dav"
				transition:persist
			/>
			<div>
				{
					menu && menu.map((item, index) => (
						<div
							key={index}
						>
							{currentPage === item.link && <div>{item.title}</div>}

						</div>
					))
				}
			</div>
		</div>
	);
}