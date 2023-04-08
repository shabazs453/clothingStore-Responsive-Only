import React from 'react'

import images from '../assets/index';

const Footer = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex items-start flex-wrap justify-between section__padding w-full'>
                <div className='flex flex-col items-center justify-start w-[360px] mt-[2rem]'>
                    <div className='w-full'>
                        <p className='p__montserrat_14-500 ' style={{
                            lineHeight: '28px',
                        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries....</p>
                    </div>
                    <div className='w-full flex items-center justify-start mt-[1rem] gap-[1rem]'>
                        <img src={images.facebook} alt="facebook" className='w-[46px] h-[46px] cursor-pointer hover:scale-[0.9] transition delay-150 ease hover:ease-in' />
                        <img src={images.twitter} alt="twitter" className='w-[46px] h-[46px] cursor-pointer hover:scale-[0.9] transition delay-150 ease hover:ease-in' />
                        <img src={images.instagram} alt="instagram" className='w-[46px] h-[46px] cursor-pointer hover:scale-[0.9] transition delay-150 ease hover:ease-in' />
                        <img src={images.linkedin} alt="linkedin" className='w-[46px] h-[46px] cursor-pointer hover:scale-[0.9] transition delay-150 ease hover:ease-in' />
                        <img src={images.pinterest} alt="pinterest" className='w-[46px] h-[46px] cursor-pointer hover:scale-[0.9] transition delay-150 ease hover:ease-in' />
                    </div>
                </div>

                <div className='flex flex-col w-[220px] mt-[2rem]'>
                    <h3 className='p__playfair_18-600'>ONLINE SHOPPING</h3>
                    <div className='mt-[2rem]'>
                        <p className="p__montserrat_14-500 mb-[1rem] cursor-pointer">Men's T-Shirts</p>
                        <p className="p__montserrat_14-500 mb-[1rem] cursor-pointer">Women's Wear</p>
                        <p className="p__montserrat_14-500 mb-[1rem] cursor-pointer">Winter Collections</p>
                        <p className="p__montserrat_14-500 mb-[1rem] cursor-pointer">Hooded T-Shirts</p>
                        <p className="p__montserrat_14-500 cursor-pointer">Streetwear Collections</p>
                    </div>
                </div>

                <div className='flex flex-col w-[220px] mt-[2rem]'>
                    <h3 className='p__playfair_18-600'>CUSTOMER POLICIES</h3>
                    <div className='mt-[2rem]'>
                        <p className="p__montserrat_14-500 mb-[1rem] cursor-pointer">About Us</p>
                        <p className="p__montserrat_14-500 mb-[1rem] cursor-pointer">Terms and Conditions</p>
                        <p className="p__montserrat_14-500 mb-[1rem] cursor-pointer">Shipping and Returns Policy</p>
                        <p className="p__montserrat_14-500 mb-[1rem] cursor-pointer">Cancellations and Refund Policy</p>
                        <p className="p__montserrat_14-500 cursor-pointer">Contact Us</p>
                    </div>
                </div>

                <div className='flex flex-col w-[320px] mt-[2rem]'>
                    <h3 className='p__playfair_18-600'>STORE INFORMATION</h3>
                    <div className='mt-[2rem] flex flex-col '>
                        <div className='flex flex-row items-start mb-[2rem] cursor-pointer'>
                            <img src={images.location} alt="location" />
                            <p className="p__montserrat_14-500 ml-[1rem]">Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. </p>
                        </div>
                        <div className='flex flex-row items-start mb-[2rem] cursor-pointer'>
                            <img src={images.phone} alt="location" />
                            <p className="p__montserrat_14-500 ml-[1rem]">Call Us: 1234567890</p>
                        </div>
                        <div className='flex flex-row items-start mb-[2rem] cursor-pointer'>
                            <img src={images.email} alt="location" />
                            <p className="p__montserrat_14-500 ml-[1rem]">Email Us: info@yourmail.com </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex__center bg-[var(--color-footerbg)] py-[2rem]'>
                <p className='p__montserrat_14-500' style={{color:'#fff'}}>©2022-23 Powered By dummy team</p>
            </div>

        </div>
    )
}

export default Footer