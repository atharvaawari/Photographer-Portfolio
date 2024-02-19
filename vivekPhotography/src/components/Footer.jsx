import React from 'react'
import { Link } from 'react-router-dom';
import { copyright, facebook, instagram } from '../assets/icons';


const Footer = () => {
    return (
        <section>

            <div className='padding-y max-container '>
                <div className='flex flex-col justify-center gap-y-5'>
                    <hr />
                    <button className=' text-[#F96D6D] underline text-xl mt-5'>
                        Book us now
                    </button>

                    <ul className='flex gap-2 justify-center'>
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
                    </ul>

                    <h1 className=' font-extralight text-center text-lg'>
                        Turning fleeting moments into forever memories– let me frame your love story.
                    </h1>

                    <div className='flex gap-5 justify-center'>
                        <Link className=' font-semibold text-black/60 text-xl hover:text-[#F96D6D]'>
                            Contact Us
                        </Link>
                        <Link className=' font-semibold text-black/60 text-xl hover:text-[#f57f7f]'>
                            Book Now
                        </Link>
                    </div>
                </div>
                <h1 className='font-semibold text-black/60 text-xl text-center'>
                    +91 839 066 0612
                </h1>
            </div>
            <div className='flex gap-x-0.5 items-center mx-2 my-2 font-light'>
                <img 
                src={copyright} 
                alt="copyright"
                width={20}
                height={2}
                />
                <h6>
                    copyrights. All rights are reserved.
                </h6>
            </div>

        </section>
    )
}

export default Footer