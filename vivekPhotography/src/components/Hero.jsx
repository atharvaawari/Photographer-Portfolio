import React from 'react'
import { frontImage } from '../assets/images'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { sliderData } from '../constants'

const Hero = () => {
  return (
    <>
        <div className='max-w-[1300px] h-[750px] w-full m-auto relative'>
          <div
            style={{ backgroundImage: `url(${sliderData[0].url})` }}
            className='w-full h-full bg-center bg-cover duration-500'
          ></div>

          {/* left arrow */}
          <div 
            className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
           >
            <BsChevronCompactLeft size={30} />
          </div>

          {/* right arrow  */}
          <div 
            className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
          >
            <BsChevronCompactRight size={30} />
          </div>
        </div>
      </>
      )
}

      export default Hero