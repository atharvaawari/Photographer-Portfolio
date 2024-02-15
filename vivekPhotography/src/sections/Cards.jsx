import React from 'react'
import { photosBlog } from '../constants'
import ImageCard from '../components/ImageCard'


const Cards = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='grid grid-cols-2 gap-y-2 gap-x-2 lg:max-w-[600px] lg:grid-cols-5 justify-center'>
        {photosBlog.map((photo, id) =>(
            <ImageCard 
            key={id}
            url={photo.url} 
            />
        ) )}
    </div>
    </div>
  )
}

export default Cards