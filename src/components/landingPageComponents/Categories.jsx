import React from 'react';

import images from '../../assets/index.js';

const categories = [
    {
        title: "Men's T-Shirts",
        image: images.person1,
        bg: "#f5a9b8"
    },
    {
        title: "Women's Wear",
        image: images.person2,
        bg: "#EDF7FB"
    },
    {
        title: "Winter Collection's",
        image: images.person3,
        bg: "#EDE3D8"
    },
    {
        title: "Hooded T-Shirts",
        image: images.person4,
        bg: "#F2E7EF"
    },
    {
        title: "Polo Neck T-Shirts",
        image: images.person5,
        bg: "#EDF7FB    "
    },
    {
        title: "Full Sleeves T-Shirts",
        image: images.person6,
        bg: "#F2E7EF"
    },
]


const Categories = () => {
    return (
        <div className='section__padding'>
            <div className='flex flex-wrap gap-[1rem]'>
                {
                    categories.map(({ title, image, bg }, i) => (
                        <div className='flex flex-col flex-1 gap-[2rem] items-center' key={i}>
                            <div
                                className={`min-w-[170px] min-h-[170px] bg-${bg} flex items-center justify-center rounded-[50%]`}
                                style={{ backgroundColor: bg }}
                            >
                                <img src={image} alt="person" className='' />
                            </div>
                            <p className='p__playfair_16-600'>{title}</p>
                        </div>
                    ))
                }
            </div>

            <div className='w-full grid gap-[30px] grid-cols-12 mt-[3rem]'>
                <div className='col-span-6 max550:col-span-12'>
                    <img src={images.dispCard1} alt="" className='w-full'/>
                </div>
                <div className='col-span-6 max550:col-span-12'>
                    <img src={images.dispCard2} alt="" className='w-full'/>
                </div>
                <div className='col-span-4 max850:col-span-6 max550:col-span-12'>
                    <img src={images.dispCard3} alt="" className='w-full'/>
                </div>
                <div className='col-span-4 max850:col-span-6 max550:col-span-12'>
                    <img src={images.dispCard4} alt="" className='w-full'/>
                </div>
                <div className='col-span-4 max850:col-span-6 max550:col-span-12'>
                    <img src={images.dispCard5} alt="" className='w-full'/>
                </div>

            </div>
        </div>
    )
}

export default Categories