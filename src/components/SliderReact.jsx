import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


const images = [
  {
    original: 'img/cielo.jpg',
    thumbnail: 'img/cielo.jpg',
  },
  {
    original: 'img/nav.jpg',
    thumbnail: 'img/nav.jpg',
  },
  {
    original: 'img/nave.jpg',
    thumbnail: 'img/nave.jpg',
  },
  {
    original: 'img/cielo.jpg',
    thumbnail: 'img/cielo.jpg',
  },
  {
    original: 'img/cielo.jpg',
    thumbnail: 'img/cielo.jpg',
  },
  {
    original: 'img/cielo.jpg',
    thumbnail: 'img/cielo.jpg',
  },
]
export function SliderReact() {

  return (
    <ImageGallery items={images}
    // showPlayButton={true}
    // showFullscreenButton={true}
    // showBullets={true}
    // showThumbnails={true}
    // showNav={true}
    // autoPlay={true}
    // slideDuration={1000}
    // slideInterval={3000}
    // thumbnailPosition={'bottom'}
    // sizes={'100%'}
    // useTranslate3D
    />
  )
}
