import React from 'react'

const Gallery = ({ img, brand }) => {
  return (
    <div className='gallery-item'>
        <div className='img-container'>
            <img src={img} alt="" />
        </div>
        <div>
            <p>{brand}</p>
        </div>
    </div>
  )
}

export default Gallery