import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'




const Home = () => {


  return (
    <>
      <section className='sticky -top-6 z-10'>
      <Navbar/>
      </section>

      <section>
        <Hero/>
      </section>
    </>
  )
}

export default Home