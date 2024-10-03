import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className="bg-card-bg p-8 m-4 rounded-md">
      <div className="grid grid-flex-col">
        <div className="grid items-center">
          <Image src="/assets/testimonials/member1.png" alt="Image" className='rounded-full mt-4 mb-4' height={100} width={100} />
          <div className="text-center text-base"><em>"</em> Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.<em>"</em></div>
          <div className="grid text-center mt-4 mb-4"><span className='text-xl font-medium'>John Doe </span>Abc Company </div>
        </div>

        {/* <div className="grid items-center">
          <Image src={member2} alt="Image" className='rounded-full mt-4 mb-4' height={100} width={100} />
          <div className="text-center text-base"><em>"</em> Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.<em>"</em></div>
          <div className="grid text-center mt-4 mb-4"><span className='text-xl font-medium'>John Doe </span>Abc Company </div>
        </div>

        <div className="grid items-center">
          <Image src={member3} alt="Image" className='rounded-full mt-4 mb-4' height={100} width={100} />
          <div className="text-center text-base"><em>"</em> Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.<em>"</em></div>
          <div className="grid text-center mt-4 mb-4"><span className='text-xl font-medium'>John Doe </span>Abc Company </div>
        </div> */}

      </div>
    </div>
  )
}

export default Testimonials