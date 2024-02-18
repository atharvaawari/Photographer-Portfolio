import React from 'react'
import { photosBlog } from '../constants'
import ImageCard from '../components/ImageCard'


const Cards = () => {
  return (
    <>
      <div className='flex justify-center px-2 w-full h-full lg:justify-center sm:items-center'>
      <div className='grid grid-cols-2 gap-y-8 gap-x-2 lg:max-w-[600px] sm:max-w-full lg:grid-cols-5 '>
        {photosBlog.map((photo, id) => (
          <ImageCard
            key={id}
            url={photo.url}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default Cards