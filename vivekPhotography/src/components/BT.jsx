import React from 'react'
import { useNavigate } from 'react-router-dom'

const BT = () => {
  const navigate = useNavigate();
  return (
    <div className=' flex flex-col gap-5 items-center'>
        <button 
        onClick={()=> navigate("/bookusnow")}
        className='main-button'>
            Book Your Date Now
        </button>
        <h2 className='text-black text-xl'>Explore more about us</h2>
    </div>
  )
}

export default BT