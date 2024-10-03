import React from 'react';
import Image from 'next/image';

const Electroniccards = () => {
  return (
    <div className="bg-card-bg p-8 mt-12 mb-12">
      <div className="grid">
        <div className="md:col-span-8">
          <div className="flex">
            <div className=""> <Image src="/assets/banners/home-banner.jpg" alt='' /> </div>
            <div className="">
              <h2 className="">Amazing Sunglasses<br />
                <span className="">Get 40% off on selected items</span></h2>
            </div>
            <div className="">
              <div className="text">NEW</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="">
            <div className=""> <Image src="/assets/banners/home-banner4.jpg" alt='' /> </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Electroniccards