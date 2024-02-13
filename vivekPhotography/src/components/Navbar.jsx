import React from 'react';
import { facebook, instagram, logo, menu, search } from '../assets/icons';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className=' sticky -top-3 bg-white w-full z-10'>
            <nav className='flex justify-between justify-items-center px-[120px] py-10'>
                <div className='flex justify-self-center'>
                    <Link to="/">
                        <img
                            src={menu}
                            alt="menu"
                            width={25}
                            height={10}
                        />
                    </Link>
                </div>

                <div>
                    <Link to="/">
                        <img
                            className=' items-center'
                            src={logo}
                            alt='logo'
                            width={117}
                            height={20}
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
    )
}

export default Navbar