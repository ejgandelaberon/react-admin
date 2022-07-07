import { FaTimes } from 'react-icons/fa'

const ImageModal = ({image, setImage}) => {
  const dismissModal = () => {
    setImage(null)
  }
  return (
    <div className='fixed top-0 left-0 right-0 w-full h-full flex items-center bg-sky-900/90 z-[100]' onClick={dismissModal}>
      <img src={image} alt="" className='block max-w-[60%] max-h-[80%] mt-[60px] m-auto shadow-2xl cursor-zoom-out'/>
      <span className='absolute top-5 right-5 text-3xl text-black z-[999] cursor-pointer'>
        <FaTimes/>
      </span>
    </div>
  )
}

export default ImageModal