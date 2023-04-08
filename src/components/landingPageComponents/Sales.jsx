import React from 'react';

import SalesCard from '../global/SalesCard';
import QuarterCircle from '../global/QuarterCircle';
import images from '../../assets/index';

const Sales = () => {
  return (
    <div className='section__padding relative'>
      <div className='flex gap-[2rem] max850:flex-col'>
        <SalesCard img={images.diamond} offer={'85%'} bg={'#CCCEA7'} />
        <SalesCard img={images.discount} offer={'75%'} bg={'#D6BEBE'} />
      </div>
      <QuarterCircle right={0} bottom={0}  />
    </div>
  )
}

export default Sales