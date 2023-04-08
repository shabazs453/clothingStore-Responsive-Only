import React from 'react';

import QuarterCircle from '../global/QuarterCircle';
import images from '../../assets/index';

const Subscription = () => {
    return (
        <div className='relative flex__center section__padding'>

            <div className="flex__center flex-col bg-[var(--color-red)] section__padding w-full ">
                <h1 className='headtext__playfair' style={{ color: '#fff' }}>Subscribe to get updates on exciting offers
                    & deals</h1>
                <div className='flex__center w-[645px] max1024:w-full mt-[1.5rem] max650:flex-col'>
                    <input type="email" placeholder='Enter your email' style={{color:'#fff'}} className='self-stretch flex-auto bg-[var(--color-lightRed)] px-[1rem] max650:py-[0.7rem]' />
                    <button className='btn__tertiary max650:mt-[2rem]'>Subscribe</button>
                </div>
            </div>

            <QuarterCircle top={0} left={0} rotate={'180deg'} />

        </div>
    )
}

export default Subscription