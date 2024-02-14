import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/Info';




const Home = () => {


  return (
    <>
      <section className='sticky -top-6 z-10'>
      <Navbar/>
      </section>

      <section className='padding'>
        <Hero/>
      </section>

      <section className='padding h-[635px] max-container'>
        <Info/>
      </section>
    </>
  )
}

export default Home