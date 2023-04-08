import React from 'react'

const SalesCard = ({ img, offer, bg }) => {
    return (
        <div className='flex-1 flex__center flex-col py-[2rem]' style={{background: bg}}>
            <div className='w-full flex__center'>
                <img src={img} alt="img" />
            </div>
            <div className='w-full flex__center my-[2rem]'>
                <h3 className='p__playfair_36-600'>Hurry Up!</h3>
            </div>
            <div className='w-full flex__center'>
                <h1 className='headtext__playfair_84-600'>{offer} OFF</h1>
            </div>
            <div className='w-full flex__center mt-[1.5rem] mb-[1rem]'>
                <p className='p__playfair_36-600'>Sale</p>
            </div>
            <div className='w-full flex__center'>
               <button className='btn__primary'>Shop Now</button>
            </div>
        </div>
    )
}

export default SalesCard