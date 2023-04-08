import React from 'react';

import headerbg from '../../assets/headerbg.png'

const Header = () => {
  return (
    <div className='w-full h-max flex items-center justify-center bg-[var(--color-grey)]'> 
        <img src={headerbg} alt="banner" className='2xl:w-[1446px] max1150:w-full max-h-[600px] object-fit' />
    </div>
  )
}

export default Header