import React from 'react';

import CollectionCard from '../global/CollectionCard';
import images from '../../assets/index';

const collections = [
    {
        title: 'Streetwear Collection',
        img: images.collection1,
        bg: '#DC143C',
    },
    {
        title: 'Striped T-Shirts',
        img: images.collection2,
        bg: '#EE82EE',
    },
    {
        title: 'Round Neck T-Shirts',
        img: images.collection3,
        bg: '#3DCE65',
    },
    {
        title: 'Printed T-Shirts',
        img: images.collection4,
        bg: '#20B2AA',
    },
    {
        title: 'Oversized T-Shirts',
        img: images.collection5,
        bg: '#FF69B4',
    },
    {
        title: 'Half Sleeves T-Shirts',
        img: images.collection6,
        bg: '#FFFF00',
    },
]

const Collections = () => {
  return (
    <div className='section__padding flex__center flex-wrap gap-[30px]'>
        {
            collections.map(({title, img, bg}, i) => (
                <CollectionCard  title={title} img={img} bg={bg} key={i}/>
            ))
        }

    </div>
  )
}

export default Collections