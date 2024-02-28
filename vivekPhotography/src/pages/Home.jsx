import React from 'react'
import Hero from '../components/Hero';
import Info from '../components/Info';
import Cards from '../sections/Cards';
import BT from '../components/BT';
import PhotoGallary from '../components/PhotoGallary';
import Menu from '../components/Menu';


const Home = () => {

  return (
    <>
      <main >
      <section>
        <Menu/>
      </section>

      <section className='padding-y max-container '>
        <Hero/>
      </section>
      
      <section className='padding-y max-container mt-10'>
        <Info/>
      </section>
      
      <section className='padding-y max-container'>
        <Cards/>
      </section>

      <section className='padding-y max-container'>
        <BT/>
      </section>

      <section className='padding-y max-container'>
        <PhotoGallary/>
      </section>
      
      </main>
    </>
  )
}

export default Home