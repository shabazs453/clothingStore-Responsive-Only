import React from 'react'

const CollectionCard = ({ title, img, bg }) => {
    return (
        <div className='flex__center relative w-[360px] h-[432px] flex-col' style={{background: bg}}>
            <div className='w-full h-full hover:opacity-[0.5] hover:scale-[0.8] tansition ease duration-150 hover:ease-in'>
                <img src={img} alt="" className='w-full h-full' />
            </div>
            <div className="gradient__bg1 absolute w-full py-[1rem] flex__center bottom-[0] cursor-pointer">
                <p className="p__playfair_20-600">
                    {title}
                </p>
            </div>
        </div>
    )
}

export default CollectionCard