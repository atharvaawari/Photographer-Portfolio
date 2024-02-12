import React from 'react'
import {frontImage} from '../assets/images'

const Hero = () => {
  return (
    <section className='max-container'>
      <img 
      src={frontImage} 
      alt="Image not Loded yet due to slow internet connection" 
      />
    </section>
  )
}

export default Hero