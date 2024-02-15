import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Cards from '../sections/Cards';


const Home = () => {

  return (
    <>
      <section className='padding'>
        <Hero/>
      </section>

      <section className='padding max-container mt-10'>
        <Info/>
      </section>
      
      <section className='padding max-container'>
        <Cards/>
      </section>
    </>
  )
}

export default Home