import React from 'react';
import { facebook, instagram, logo, menu, search } from '../assets/icons';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className='sm:sticky -top-3 bg-white w-full z-10 nav-container '>
            <nav className='flex items-center sm:justify-between sm:py-10 justify-end'>
                <div className='flex justify-self-center'>
                    <Link to="/">
                        <img
                            src={menu}
                            alt="menu"
                            width={30}
                            height={10}
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