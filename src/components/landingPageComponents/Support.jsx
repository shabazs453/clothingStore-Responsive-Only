import React from 'react';

import images from '../../assets/index';
import QuarterCircle from '../global/QuarterCircle';

const Support = () => {
    return (
        <div className='flex__center w-full bg-[#F5F4F2] py-[2rem] relative'>
            <div className='flex items-center justify-between flex-wrap 2xl:w-[1200px] h-max px-[6rem] w-full'>
                <div className='flex flex-col items-center justify-start min-w-[213px] my-[2rem]'>
                    <img src={images.returnPolicy} alt="return policy" />
                    <p className='p__montserrat_16-500 mt-[1.5rem]'>7 Days Return</p>
                </div>

                <div className='h-[100px] border-[1px] border-[#FFC7D1]' />

                <div className='flex flex-col items-center justify-start min-w-[213px] my-[2rem]'>
                    <img src={images.qualityCheck} alt="Quality Check" />
                    <p className='p__montserrat_16-500 mt-[1.5rem]'>Quality Products</p>
                </div>

                <div className='h-[100px] border-[1px] border-[#FFC7D1]' />

                <div className='flex flex-col items-center justify-start min-w-[213px] my-[2rem]'>
                    <img src={images.wallet} alt="Payments" />
                    <p className='p__montserrat_16-500 mt-[1.5rem]'>Safe Payment</p>
                </div>

                <div className='h-[100px] border-[1px] border-[#FFC7D1]' />

                <div className='flex flex-col items-center justify-start min-w-[213px] my-[2rem]'>
                    <img src={images.helpline} alt="Helpline" />
                    <p className='p__montserrat_16-500 mt-[1.5rem]'>24x7 Helpline</p>
                </div>
            </div>
            <QuarterCircle  top={0} right={0} rotate={'270deg'}/>
            <QuarterCircle  bottom={0} left={0} rotate={'90deg'}/>
        </div>
    )
}

export default Support