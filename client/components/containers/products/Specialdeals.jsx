import React from 'react';
import Image from 'next/image';

const data = [
  {
    image: "/assets/products/p4.jpg",
    name: "Floral Print Shirt",
    price: "450",
  },
  {
    image: "/assets/products/p5.jpg",
    name: "Floral Print Shirt",
    price: "450",
  },
  {
    image: "/assets/products/p6.jpg",
    name: "Floral Print Shirt",
    price: "450",
  },
  // {
  //   image: p8,
  //   name: "Floral Print Shirt",
  //   price: "450",
  // },
  // {
  //   image: p7,
  //   name: "Floral Print Shirt",
  //   price: "450",
  // },
]

const Specialdeals = () => {
  return (
    <div className="bg-card-bg p-8 m-4">
      <h3 className="main-title">Special Deals</h3>
      <div className="grid grid-rows-3">

        {data?.map((item, i) => (
          <div className="flex m-4">
            <div className="">
                <a href="#" className=''> <Image src={item?.image} height={300} width={150} alt="" /> </a>
            </div>
            <div className="ml-4">
              <h3 className=""><a className='text-base text-font-color no-underline' href="#">{item?.name}</a></h3>
              <div className="font-semibold"> <span className=""> $ {item?.price} </span> </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Specialdeals