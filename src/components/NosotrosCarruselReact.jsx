import estilos from './NosotrosCarruselReact.module.css'
import { useState, useEffect } from 'react'
const cielo = '/img/cielo.jpg'
const nave = '/img/nave.jpg'
const lunes = '/img/lunes.jpg'
const martes = '/img/martes.jpg'
const miercoles = '/img/miercoles.jpg'
const nav = '/img/nav.jpg'

export function NosotrosCarruselReact() {
  const imagenes = [cielo, nave, lunes, martes, miercoles, nav];
  const [indiceSeleccionado, setIndiceSeleccionado] = useState(0);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenes[0]);
  const [loaded, setLoaded] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        nuevaImagenSeleccionada(indiceSeleccionado, imagenes, true);
      }, 3000);
      return () => clearInterval(interval);
    }
  });
  const nuevaImagenSeleccionada = (index, imagenes, next = true) => {
    setLoaded(false); // reset loaded state when changing image
    const condicion = next ? indiceSeleccionado < imagenes.length - 1 : indiceSeleccionado > 0;
    const nuevoIndice = next ? (condicion ? indiceSeleccionado + 1 : 0) : (condicion ? indiceSeleccionado - 1 : imagenes.length - 1);
    setIndiceSeleccionado(nuevoIndice);
    setImagenSeleccionada(imagenes[nuevoIndice]);
  };
  const previous = () => {
    nuevaImagenSeleccionada(indiceSeleccionado, imagenes, false);
  };
  const next = () => {
    nuevaImagenSeleccionada(indiceSeleccionado, imagenes, true);
  };

  return (
    <>
      <div className='flex flex-col flex-1 items-center justify-center '>


        <div className='h-[50vh] w-[60vh] flex'>
          <img onLoad={() => setLoaded(true)} className={`${estilos.foto} ${loaded ? estilos.loaded : ""}`} src={imagenSeleccionada} alt="nave de la auxiliar" />
        </div>



        <div className='flex flex-row p-4 m-auto gap-4 '>
          <button className={`${estilos.btn}`} onClick={() => { setAutoPlay(false); previous() }}>{'<'}</button>
          <button className={`${estilos.btn}`} onClick={() => { setAutoPlay(!autoPlay) }} > {autoPlay === true ? 'STOP' : 'PLAY'}</button>
          <button className={`${estilos.btn} btn`} onClick={() => { setAutoPlay(false); next() }}>{'>'}</button>
        </div >

        <div className='flex flex-row gap-4'>
          <img className='w-[222px] rounded-lg' src={imagenes[0]} alt="fabrica" />
          <img className='w-[222px] rounded-lg' src={imagenes[1]} alt="fabrica" />
          <img className='w-[222px] rounded-lg' src={imagenes[2]} alt="fabrica" />
          <img className='w-[222px] rounded-lg' src={imagenes[3]} alt="fabrica" />
          <img className='w-[222px] rounded-lg' src={imagenes[4]} alt="fabrica" />
        </div>
        <div>
          map
        </div>
      </div >
    </>
  );
}