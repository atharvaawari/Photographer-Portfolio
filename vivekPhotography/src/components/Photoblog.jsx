import React from 'react'

const Photoblog = ({ url, text }) => {
    return (
        <div className='flex flex-col '>
            <img
                    src={url}
                    alt="images"
                    // height={250}
                    width={300}
                />
                <h2 className='text-2xl'>
                    {text}
                </h2>
        </div>
    )
}

export default Photoblog