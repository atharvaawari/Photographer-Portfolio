import React from 'react';
import { facebook, instagram, logo, search } from '../assets/icons';
import { Link, useNavigate } from 'react-router-dom';
import {menuList} from '../constants/index'
import Hamburger from 'hamburger-react'
import Menu from './Menu';

function Navbar() {
    const navigate = useNavigate();

    // const openMenu = function() {

    // }

    return (
        <>
        <header className='sm:sticky -top-3 bg-white w-full z-10 nav-container px-5'>
            <nav className=' flex lg:flex-row w-full justify-between py-8 items-center'>
                <div className='flex justify-self-center'>
                    <Link to="/">
                        {/* <img
                            src={menu}
                            alt="menu"
                            width={30}
                            height={10}
                        /> */}
                        <Hamburger
                        
                        onToggle={toggle=> {
                            if(toggle){
                                // openMenu
                                
                            } else{
                                // closeMenu
                            }
                        }}

                        />
                    </Link>
                </div>

                <div>
                    <Link to="/">
                        <img
                            className='ml-12 '
                            src={logo}
                            alt='logo'
                            width={117}
                            height={20}
                            onClick={()=> navigate("/home")}
                        />
                    </Link>
                </div>

                <ul className='flex gap-2'>
                    <li>
                        <Link to="/facebook">
                            <img
                                src={facebook}
                                alt="fb"
                                width={23}
                                height={5}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to="/instagram">
                            <img
                                src={instagram}
                                alt="Insta"
                                width={23}
                                height={5}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to="/search">
                            <img
                                src={search}
                                alt="search"
                                width={23}
                                height={5}
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Navbar