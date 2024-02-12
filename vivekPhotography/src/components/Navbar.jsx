import React from 'react'
import { facebook, instagram, logo, menu, search } from '../assets/icons'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header className='max-container py-5'>
            <nav className='flex justify-between'>
                <div>
                    <Link to="/">
                        <img
                            src={menu}
                            alt="menu"
                            width={25}
                            height={25}
                        />
                    </Link>
                </div>

                <div>
                    <Link to="/">
                        <img
                            src={logo}
                            alt='logo'
                            width={130}
                            height={20}
                        />
                    </Link>
                </div>

                <ul className='flex gap-5'>
                    <li>
                        <Link to="/facebook">
                            <img
                                src={facebook}
                                alt="fb"
                                width={30}
                                height={20}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to="/instagram">
                            <img
                                src={instagram}
                                alt="Insta"
                                width={30}
                                height={20}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to="/search">
                            <img
                                src={search}
                                alt="search"
                                width={30}
                                height={20}
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar