import estilos from './NosotrosCarruselReact.module.css'
import { useState, useEffect } from 'react'
const cielo = '/img/cielo.jpg'
const nave = '/img/nave.jpg'
const lunes = '/img/lunes.jpg'

export function NosotrosCarruselReact() {
  const imagenes = [cielo, nave, lunes]
  const [indiceSeleccionado, setIndiceSeleccionado] = useState(0)
  const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenes[0])
  const [loaded, setLoaded] = useState(false)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        nuevaImagenSeleccionada(indiceSeleccionado, imagenes, true)
      }, 2000);
      return () => clearInterval(interval);
    }
  })

  const nuevaImagenSeleccionada = (index, imagenes, next = true) => {
    setLoaded(false) // reset loaded state when changing image
    // setTimeout(() => {
    const condicion = next ? indiceSeleccionado < imagenes.length - 1 : indiceSeleccionado > 0;
    const nuevoIndice = next ? (condicion ? indiceSeleccionado + 1 : 0) : (condicion ? indiceSeleccionado - 1 : imagenes.length - 1);
    setIndiceSeleccionado(nuevoIndice)
    setImagenSeleccionada(imagenes[nuevoIndice])
    // }, 500);
  }

  const previous = () => {
    nuevaImagenSeleccionada(indiceSeleccionado, imagenes, false)
  }
  const next = () => {
    nuevaImagenSeleccionada(indiceSeleccionado, imagenes, true)
  }

  return (
    <>
      <div className='flex flex-col justify-center'>
        <div>
          <img onLoad={() => setLoaded(true)} className={`${estilos.foto} ${loaded ? estilos.loaded : ""}`} src={imagenSeleccionada} alt="nave de la auxiliar" />
        </div>
        <div className='flex flex-row p-2 m-auto gap-2'>
          <button className={`${estilos.btn} btn`} onClick={() => { setAutoPlay(false); previous() }}>{'<'}</button>
          <button className={`${estilos.btn} btn`} onClick={() => { setAutoPlay(false); next() }}>{'>'}</button>
        </div >
      </div >
    </>
  )
}