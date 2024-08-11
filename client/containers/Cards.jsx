import React from 'react';
import Image from 'next/image';
import home_banner1 from "../../assets/banners/home-banner1.jpg";
import home_banner2 from "../../assets/banners/home-banner2.jpg";
import home_banner3 from "../../assets/banners/home-banner3.jpg";

const Cards = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3">
        <div className="">
          <Image className='rounded-sm p-4' src={home_banner1} alt='' />
        </div>

        <div className="">
          <Image className='rounded-sm p-4' src={home_banner2} alt='' />
        </div>

        <div className="">
          <Image className='rounded-sm p-4' src={home_banner3} alt='' />
        </div>

      </div>
    </div>
  )
}

export default Cards