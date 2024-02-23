import React from 'react'
import { bigImg1, bigImg2 } from '../assets/images'
import { PhotoGallaryblog } from '../constants';
import Photoblog from './Photoblog';
import { logo } from '../assets/icons';
import { useNavigate } from 'react-router-dom';

const PhotoGallary = () => {

    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center gap-10'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-4xl'>Wedding Stories</h2>
        <img className='lg:w-[630px] lg:h-auto w-[450px] h-[300px] m-auto'
          src={bigImg1}
          alt="bigImg1"
        />
      </div>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 max-w-[630px] text-center gap-x-8 gap-y-6'>
        {PhotoGallaryblog.map((photo, text) => (
          <Photoblog
            key={text}
            text={photo.text}
            url={photo.url}
          />
        ))}
      </div>
      <div className='flex flex-col items-center gap-4'>
        <img className='lg:w-[630px] lg:h-auto w-[450px] h-[300px] m-auto'
          src={bigImg2}
          alt="bigImg2"
        />
        <h2 className='text-4xl'>Pre Wedding Stories</h2>
      </div>

      <div className=' flex flex-col gap-3 items-center mt-5'>
        <h2 className='text-black text-xl'>For more details</h2>
        <button 
        onClick={()=>navigate("/contact")}
        className='main-button'>
          Contact Us
        </button>
        <div className='mt-6'>
          <img src={logo} alt="logo" />
        </div>
      </div>
      
    </div>

  )
}

export default PhotoGallary