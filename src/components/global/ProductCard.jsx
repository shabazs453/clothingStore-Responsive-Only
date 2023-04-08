import React from 'react';

import images from '../../assets/index';
import './ProductCard.css';


const ProductCard = ({ product }) => {
    return (
        <div className='w-[264px] flex flex-col '>
            <div className='w-full h-[412px] relative flex__center product__container'>
                <div className='w-full full product_img  '>
                    <img src={product.image} alt="" className='w-full h-full' />
                </div>
                <div className='absolute w-full flex__center gap-[1rem]  product__actions'>
                    <div className='flex__center p-[1rem] bg-[#fff] rounded-full'>
                        <img src={images.cart} alt="cart" className='w-[22px] h-[22px] text-[var(--color-red)]' />
                    </div>
                    <div className='flex__center p-[1rem] bg-[#fff] rounded-full'>
                        <img src={images.heart2} alt="heart" className='w-[22px] h-[22px] text-[var(--color-red)]' />
                    </div >
                    <div className='flex__center p-[1rem] bg-[#fff] rounded-full'>
                        <img src={images.share} alt="share" className='w-[22px] h-[22px] text-[var(--color-red)]' />
                    </div>

                </div>
            </div>
            <div className='w-full px-[2rem] mt-[1rem]'>
                <p className="p__montserrat_14-400">{product.title}</p>
            </div>
            <div className='w-full flex__center flex-row gap-[1rem] my-[1rem] '>
                <p className='p__montserrat_18-700'>{product.currentPrice}</p>
                <p className='p__montserrat_red'>{product.originalPrice}</p>
            </div>
            <div className='flex__center gap-[1rem]'>
                <div className='flex__center border border-[#E6E6E6] h-[36px] w-[36px]'>
                    <p className='p__montserrat_14-500'>S</p>
                </div>
                <div className='flex__center border border-[#E6E6E6] h-[36px] w-[36px]'>
                    <p className='p__montserrat_14-500'>M</p>
                </div>
                <div className='flex__center border border-[#E6E6E6] h-[36px] w-[36px]'>
                    <p className='p__montserrat_14-500'>L</p>
                </div>
                <div className='flex__center border border-[#E6E6E6] h-[36px] w-[36px]'>
                    <p className='p__montserrat_14-500'>XL</p>
                </div>
                <div className='flex__center border border-[#E6E6E6] h-[36px] w-[36px]'>
                    <p className='p__montserrat_14-500'>XXL</p>
                </div>
            </div>

        </div>
    )
}

export default ProductCard