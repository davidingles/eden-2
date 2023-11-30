import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
function SliderReact() {
  const images = [
    {
      original: 'img/cielo.jpg',
      thumbnail: 'img/cielo.jpg',
    },
    {
      original: 'img/nav.jpg',
    },
    {
      original: 'img/nave.jpg',
    },
    {
      original: 'img/cielo.jpg',
    },
    {
      original: 'img/cielo.jpg',
    },
    {
      original: 'img/cielo.jpg',
    },
  ]
  return (
    <div style={{ width: '88%', margin: 'auto' }}>
      <ImageGallery items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        showBullets={true}
        showThumbnails={true}
        showNav={true}
        autoPlay={true}
        slideDuration={1000}
        slideInterval={3000}

      />
    </div>
  )

}
export default SliderReact;