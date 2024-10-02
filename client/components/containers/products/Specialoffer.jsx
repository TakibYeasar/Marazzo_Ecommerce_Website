import React from 'react';
import Image from 'next/image';
import p4 from "../../../../assets/products/p4.jpg";
import p5 from "../../../../assets/products/p5.jpg";
import p6 from "../../../../assets/products/p6.jpg";
import p7 from "../../../../assets/products/p7.jpg";
import p8 from "../../../../assets/products/p8.jpg";
import p11 from "../../../../assets/products/p11.jpg";
import p13 from "../../../../assets/products/p13.jpg";
import p15 from "../../../../assets/products/p15.jpg";

const data = [
  {
    image: p4,
    name: "Floral Print Shirt",
    price: "450",
  },
  {
    image: p5,
    name: "Floral Print Shirt",
    price: "450",
  },
  {
    image: p6,
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
  // {
  //   image: p11,
  //   name: "Floral Print Shirt",
  //   price: "450",
  // },
  // {
  //   image: p13,
  //   name: "Floral Print Shirt",
  //   price: "450",
  // },
  // {
  //   image: p15,
  //   name: "Floral Print Shirt",
  //   price: "450",
  // },
]

const Specialoffer = () => {
  return (
    <div className="bg-card-bg p-8 m-4">
      <h3 className="main-title">Special Offer</h3>
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

export default Specialoffer