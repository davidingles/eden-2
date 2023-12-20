import estilos from './NosotrosCarruselReact.module.css'
import { useState, useEffect } from 'react'
const cielo = '/img/cielo.jpg'
const nave = '/img/nave.jpg'
const lunes = '/img/lunes.jpg'

/**
 * Componente de carrusel de imágenes para la sección "Nosotros".
 */
export function NosotrosCarruselReact() {
  /**
   * Arreglo de imágenes para el carrusel.
   * @type {string[]}
   */
  const imagenes = [cielo, nave, lunes];

  /**
   * Índice de la imagen seleccionada actualmente.
   * @type {number}
   */
  const [indiceSeleccionado, setIndiceSeleccionado] = useState(0);

  /**
   * Imagen seleccionada actualmente.
   * @type {string}
   */
  const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenes[0]);

  /**
   * Estado de carga de la imagen.
   * @type {boolean}
   */
  const [loaded, setLoaded] = useState(true);

  /**
   * Estado de reproducción automática del carrusel.
   * @type {boolean}
   */
  const [autoPlay, setAutoPlay] = useState(true);

  /**
   * Hook de efecto para la reproducción automática del carrusel.
   */
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        nuevaImagenSeleccionada(indiceSeleccionado, imagenes, true);
      }, 3000);
      return () => clearInterval(interval);
    }
  });

  /**
   * Cambia la imagen seleccionada en el carrusel.
   * @param {number} index - Índice de la imagen actualmente seleccionada.
   * @param {string[]} imagenes - Arreglo de imágenes del carrusel.
   * @param {boolean} next - Indica si se debe seleccionar la siguiente imagen (true) o la anterior (false).
   */
  const nuevaImagenSeleccionada = (index, imagenes, next = true) => {
    setLoaded(false); // reset loaded state when changing image
    const condicion = next ? indiceSeleccionado < imagenes.length - 1 : indiceSeleccionado > 0;
    const nuevoIndice = next ? (condicion ? indiceSeleccionado + 1 : 0) : (condicion ? indiceSeleccionado - 1 : imagenes.length - 1);
    setIndiceSeleccionado(nuevoIndice);
    setImagenSeleccionada(imagenes[nuevoIndice]);
  };

  /**
   * Muestra la imagen anterior en el carrusel.
   */
  const previous = () => {
    nuevaImagenSeleccionada(indiceSeleccionado, imagenes, false);
  };

  /**
   * Muestra la siguiente imagen en el carrusel.
   */
  const next = () => {
    nuevaImagenSeleccionada(indiceSeleccionado, imagenes, true);
  };

  return (
    <>
      <div className='flex flex-col flex-1'>


        <div className='h-[50vh] '>
          <img onLoad={() => setLoaded(true)} className={`${estilos.foto} ${loaded ? estilos.loaded : ""}`} src={imagenSeleccionada} alt="nave de la auxiliar" />
        </div>



        <div className='flex flex-row p-2 m-auto gap-2'>
          <button className={`${estilos.btn} btn`} onClick={() => { setAutoPlay(false); previous() }}>{'<'}</button>
          <button className={`${estilos.btn} btn`} onClick={() => { setAutoPlay(false); next() }}>{'>'}</button>
        </div >



      </div >
    </>
  );
}