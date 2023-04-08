import React, { Suspense } from 'react';


import ProductCard from '../global/ProductCard';

const LazyProductCard = React.lazy(() =>
    new Promise(resolve =>
        setTimeout(
            () => resolve(import('../global/ProductCard')),
            1500 // 3 seconds delay
        )
    )
);

const Products = ({ products, title }) => {
    return (
        <div className='section__padding min-h-[600px]'>
            <div className='w-full flex justify-start gap-[1rem] items-center'>
                <div className='border-[1px] border-[#FFC7D1] flex-1 w-full h-[2px]' />
                <h1 className="headtext__playfair">{title}</h1>
                <div className='border-[1px] border-[#FFC7D1] flex-1 w-full h-[2px]' />
            </div>
            <div className='w-full flex__center flex-wrap gap-[40px] mt-[4rem]'>
                {
                    products.map((product, i) => (
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyProductCard product={product} key={i} />
                        </Suspense>
                    ))
                }
            </div>
            <div className='w-full flex__center mt-[2rem]'>
                <button className='btn__secondary'>view all</button>
            </div>
        </div>
    )
}

export default Products