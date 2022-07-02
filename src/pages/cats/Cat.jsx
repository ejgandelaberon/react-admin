import { useState } from 'react'
import ImageModal from '../../components/image-modal/ImageModal'
import CatNotFound from '../../assets/cat-not-found.jpeg'

const Cat = ({cat}) => {
  const [clickedImage, setClickedImage] = useState()

  const checkImgUrl = () => {
    if(!cat.image) return CatNotFound
    if(Object.keys(cat.image).length === 0) return CatNotFound
    return cat.image.url
  }

  const showImage = (imageUrl) => {
    setClickedImage(imageUrl)
  }

  return (
    <div className="card">
      <header>
        Cat Breed Information
      </header>

      <div className="card-content">
        <div className='flex'>
          <img src={checkImgUrl()} alt="" className="cat-img" onClick={() => showImage(checkImgUrl(), cat.id)}/>
          <div className='cat-descrip'>
            <p>Breed: <span>{cat.name}</span></p>
            <p>Origin: <span>{cat.origin}</span></p>
            <p>Temperament: <span>{cat.temperament}</span></p>
          </div>
        </div>
      </div>

      {clickedImage && <ImageModal image={clickedImage} setImage={setClickedImage}/>}
    </div>
    
  )
}

export default Cat