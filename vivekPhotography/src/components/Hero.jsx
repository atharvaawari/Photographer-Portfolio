import React, { useState } from 'react'
import { frontImage } from '../assets/images'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { sliderData } from '../constants';
import {RxDotFilled} from 'react-icons/rx';

const Hero = () => {

  const [currentIndex, setCurrentIndex ] = useState(0)

  const prevSlide = ()=> {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderData.length -1 : currentIndex - 1;
    setCurrentIndex(newIndex);  
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex ===sliderData.length -1 ;
    const newIndex = isLastSlide ? 0 : currentIndex +1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex( slideIndex )
  }

  return (

    <>
        <div className='max-w-[1300px] h-[750px] w-full m-auto relative'>
          <div
            style={{ backgroundImage: `url(${sliderData[currentIndex].url})` }}
            className='w-full h-full bg-center bg-cover duration-500'
          ></div>

          {/* left arrow */}
          <div 
            className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
           >
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>

          {/* right arrow  */}
          <div 
            className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
          >
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>

          <div className='flex top-0 justify-start gap-0.2'>
            {sliderData.map( (slide, slideIndex) =>(
              <div 
               key={slideIndex}
               onClick={()=> goToSlide(slideIndex)}
               className='w-[120px] h-[80px] cursor-pointer hover:scale-105 transition-all '>
                <img src={slide.url} alt="images"  />
              </div>
            ) )}
          </div>

        </div>
      </>
      )
}

      export default Hero