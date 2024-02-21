import React from 'react'
import { book1 } from '../assets/images'

const Book = () => {
  return (
    <>
      <section className='max-container px-5'>
        <div className='flex justify-center max-w-[] max-h-[600px]'>
          <img
            src={book1}
            alt="bigImage"
            width={900}
          />
        </div>

        <div className='padding-y max-container mt-10'>
          <h1 className='font-light text-2xl'>
            Be the star in your own story
          </h1>
          <hr className='mt-5' />
          <h2 className='mt-5 text-lg font-extralight'>
            Hello, from Atharva photography! <br />
            This form will take you few minutes  to fill in .
          </h2>
          <h2 className='mt-5 text-lg font-extralight'>
            Tell us about yourself and your event, and we’ll get back to you shortly :)
          </h2>
          <hr className='mt-5' />

          <h1 className=' font-normal text-4xl mt-5'>Tell us about yourself</h1>

          <div className='mt-5'>
            <label htmlFor="Your-name" className="block text-sm font-medium leading-6 text-gray-900">Your Name</label>
            <div className="mt-2.5">
              <input type="text" name="first-name" id="first-name" className="block w-[50%] rounded-md border-0 px-3.5  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-lg" />
            </div>
          </div>

          <div className='mt-5'>
            <label htmlFor="Email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div className="mt-2.5">
              <input type="email" name="first-name" id="first-name" className="block w-[50%] rounded-md border-0 px-3.5  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 shadow-lg" />
            </div>
          </div>

          <div className='mt-5'>
            <label htmlFor="Phone Number" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
            <div className="mt-2.5">
              <input type="Number" name="first-name" id="first-name" className="block w-[30%] rounded-md border-0 px-3.5  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 shadow-lg" />
            </div>
          </div>

          <div className='mt-5'>
            <label htmlFor="City Name" className="block text-sm font-medium leading-6 text-gray-900">City Name</label>
            <div className="mt-2.5">
              <input type="text" name="first-name" id="first-name" className="block w-[30%] rounded-md border-0 px-3.5  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 shadow-lg" />
            </div>
          </div>

          <div className='mt-5'>
            <label htmlFor="Wedding location address" className="block text-sm font-medium leading-6 text-gray-900">Wedding Location Address</label>
            <div className="mt-2.5">
              <input type="text" name="first-name" id="first-name" className="block w-[40%] rounded-md border-0 px-3.5  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 shadow-lg" />
            </div>
          </div>

          <div className='mt-5'>
            <label htmlFor="Requirements" className="block text-sm font-medium leading-6 text-gray-900">Requirements</label>
            <div className="mt-2.5">
              <input type="textarea" name="first-name" id="first-name" className="block w-[35%] h-[80px] rounded-md border-0 px-3.5  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 shadow-lg" />
            </div>
          </div>

          <div className='mt-5'>
            <label htmlFor="Requirements" className="block text-sm font-medium leading-6 text-gray-900">What event do you want to invite us?</label>
            <div className="mt-2.5">
              <input type="textarea" name="first-name" id="first-name" className="block w-[40%] rounded-md border-0 px-3.5  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 shadow-lg" />
            </div>
          </div>

          <div className='mt-5'>
            <label htmlFor="Refrence" className="block text-sm font-medium leading-6 text-gray-900">Refrence of</label>
            <div className="mt-2.5">
              <input type="textarea" name="first-name" id="first-name" className="block w-[40%] rounded-md border-0 px-3.5  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 shadow-lg" />
            </div>
          </div>

          <button
            className='main-button mt-10 w-[40%]'
          >
            Submit
          </button>
        </div>

      </section>
    </>
  )
}

export default Book