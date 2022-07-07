import { useState } from 'react'
import ImageModal from '../../components/modals/ImageModal'
import CatNotFound from '../../assets/cat-not-found.jpeg'
import Rating from '../../components/Rating'
import Card from '../../components/Card'

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
    
    <Card headerTitle={cat.name}>
        <div className='flex'>
          <img src={checkImgUrl()} alt="" className="cat-img" onClick={() => showImage(checkImgUrl(), cat.id)}/>
          <div className='cat-descrip'>
            <p>Origin: <span>{cat.origin}</span></p>
            {/* <p>Temperament: <span>{cat.temperament}</span></p> */}
            <Rating ratingName={'Intelligence'} rateLevel={cat.intelligence}/>
            <Rating ratingName={'Energy Level'} rateLevel={cat.energy_level}/>
            <Rating ratingName={'Dog Friendly'} rateLevel={cat.dog_friendly}/>
            <Rating ratingName={'Stranger Friendly'} rateLevel={cat.stranger_friendly}/>
          </div>
        </div>

      {clickedImage && <ImageModal image={clickedImage} setImage={setClickedImage}/>}
    </Card>
    
  )
}

export default Cat