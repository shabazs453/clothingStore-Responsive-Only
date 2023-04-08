import React from 'react';

import images from '../../assets/index';

const Banner = ({banner}) => {
  return (
    <div className='w-full'>
        <img src={banner} alt="banner" className='w-full' />
    </div>
  )
}

export default Banner