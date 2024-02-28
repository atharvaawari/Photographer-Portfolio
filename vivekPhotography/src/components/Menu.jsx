import React from 'react'
import { menuList } from '../constants'

const Menu = () => {
  return (
    <div>
        <div className=' bg-black/20 h-screen w-[15%] fixed z-40 top-0 left-[122px]'>
            {menuList.map((item, index)=>{
                <li key={index}>{menuList}</li>
            } )}
        </div>
    </div>
  )
}

export default Menu