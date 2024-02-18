import React from 'react'
import { bigImg1 } from '../assets/images'

const PhotoGallary = () => {
  return (
    <div>
        <div className='flex flex-col items-center gap-4'>
            <img className='lg:w-[900px] w-[450px] h-[300px] m-auto'
            src={bigImg1} 
            alt="bigImg1" 
            />
            <h2 className='text-4xl'>Wedding Stories</h2>
        </div>
    </div>
  )
}

export default PhotoGallary