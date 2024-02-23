import React from 'react'
import { groupImg9 } from '../assets/images'

const Contact = () => {
  return (
    <section>
      <div className='max-container flex gap-20 justify-center mt-10'>
        <div>
          <img
          className='px-5' 
          src={groupImg9} 
          alt="groupImg9"
          width={400}
          height={600}
          />
        </div>

        <form 
        action="submit" 
        className='flex flex-col items-center justify-center gap-5 w-[50%]'>
          <h1 className='text-4xl font-medium w-full'>
            Get in touch
          </h1>
          <div className='mt-5 w-full'>
            <label 
            htmlFor="Your-name" 
            className="block text-lg font-medium leading-6 text-gray-900">Name</label>
            <div className="mt-2.5">
              <input 
              type="text" 
              name="Name" 
              id="Name" 
              className="block w-[80%] rounded-md border-0 px-3.5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 shadow-lg" />
            </div>
          </div>
          <div className='mt-5 w-full'>
            <label 
            htmlFor="Email" 
            className="block text-lg font-medium leading-6 text-gray-900">
              Email
              </label>
            <div className="mt-2.5">
              <input 
              type="text" 
              name="first-name" 
              id="first-name" 
              className="block w-[80%] rounded-md border-0 px-3.5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 shadow-lg" />
            </div>
          </div>
          <div className='mt-5 w-full'>
            <label 
            htmlFor="Enquiry" 
            className="block text-lg font-medium leading-6 text-gray-900">Enquiry Message</label>
            <div className="mt-2.5">
              <textarea 
              type="textarea" 
              name="Enquiry" 
              id="Enquiry" 
              className="block w-[80%] rounded-md border-0 px-3.5 py-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 shadow-lg" />
            </div>
          </div>
          <div className='w-full mt-2'>
          <button
            className=' px-10 main-button mt-1 text-xl'>
            Submit
          </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact