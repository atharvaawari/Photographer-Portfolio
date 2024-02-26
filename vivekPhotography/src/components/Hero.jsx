import React, { useState, useEffect } from 'react'
// import { frontImage } from '../assets/images'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { sliderData } from '../constants';
// import {RxDotFilled} from 'react-icons/rx';

const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect( ()=>{
    const timer = setTimeout(()=>{
      if(currentIndex === sliderData.length-1) {
        setCurrentIndex(0)
      } else{
        setCurrentIndex(currentIndex + 1)
      }
    },3000)

    return() => clearTimeout(timer)
  },[currentIndex])

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === sliderData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  

  return (

    <>
      <div className='lg:w-[1300px] lg:h-[700px] w-[450px] h-[300px] m-auto px-2 '>
        <div
          style={{ backgroundImage: `url(${sliderData[currentIndex].url})`}}
          className='w-full h-full bg-center bg-cover duration-500'
        ></div>

        {/* left arrow */}
        <div
          className='absolute top-[27rem] -translate-x-0 translate-y-[100%] left-[9.5%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
        >
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* right arrow  */}
        <div
          className='absolute top-[27rem] -translate-x-0 translate-y-[100%] right-[8%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
        >
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className='flex top-0 justify-start gap-0.2'>
          {sliderData.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='w-[120px] h-[80px] cursor-pointer hover:scale-105 transition-all '>
              <img src={slide.url} alt="images" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Hero