import React from 'react'

import menu from '../assets/menu.svg';
import search from '../assets/search.svg';
import heart from '../assets/heart.svg';
import basket from '../assets/basket.svg';
import person from '../assets/person.svg';


const Navbar = () => {
    return (
        <div
            className='flex items-center justify-between px-[4rem] py-[1rem] w-full fixed z-[3] bg-[#fff]'
            style={{
                boxShadow: '0px 8px 21px rgba(0, 0, 0, 0.16)',
            }}>
            <img src={menu} alt="menu" width={'22px'} />
            <p className="p__playfair_16-600">logo here</p>
            <div className='flex items-center'>
                <img src={search} alt="search" width={'20px'} className='mx-[1rem]' />
                <img src={heart} alt="heart" width={'20px'} className='mx-[1rem]' />
                <img src={basket} alt="basket" width={'20px'} className='mx-[1rem]' />
                <img src={person} alt="person" width={'20px'} className='ml-[1rem]' />
            </div>
        </div>
    )
}

export default Navbar