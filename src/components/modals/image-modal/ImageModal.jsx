import { FaTimes } from 'react-icons/fa'

const ImageModal = ({image, setImage}) => {
  const dismissModal = () => {
    setImage(null)
  }
  return (
    <div className='image-overlay' onClick={dismissModal}>
      <img src={image} alt="" className='cursor-zoom-out'/>
      <span>
        <FaTimes/>
      </span>
    </div>
  )
}

export default ImageModal