import React from 'react'
import Hero from '../components/Hero';
import Info from '../components/Info';
import Cards from '../sections/Cards';


const Home = () => {

  return (
    <>
      <main >
      <section className='padding-y max-container '>
        <Hero/>
      </section>

      <section className='padding-y max-container mt-10'>
        <Info/>
      </section>
      
      <section className='padding-y max-container'>
        <Cards/>
      </section>
      </main>
    </>
  )
}

export default Home