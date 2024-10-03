import React from 'react';
import Image from 'next/image';

const Cards = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3">
        <div className="">
          <Image className='rounded-sm p-4' src="/assets/banners/home-banner1.jpg" alt='' />
        </div>

        <div className="">
          <Image className='rounded-sm p-4' src="/assets/banners/home-banner2.jpg" alt='' />
        </div>

        <div className="">
          <Image className='rounded-sm p-4' src="/assets/banners/home-banner3.jpg" alt='' />
        </div>

      </div>
    </div>
  )
}

export default Cards