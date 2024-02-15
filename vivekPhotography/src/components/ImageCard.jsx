import React from 'react'

const ImageCard = ({url}) => {
  return (
    <div className=''>
        <img 
        src={url} 
        alt="images"
        height={250}
        width={200}
        />
    </div>
  )
}

export default ImageCard