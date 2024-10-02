import React from 'react';
import Image from 'next/image';
import p13 from "../../../../assets/products/p13.jpg";
import p13_hover from "../../../../assets/products/p13_hover.jpg";
import p14 from "../../../../assets/products/p15.jpg";
import p14_hover from "../../../../assets/products/p15_hover.jpg";
import p15 from "../../../../assets/products/p15.jpg";
import p15_hover from "../../../../assets/products/p15_hover.jpg";
import { FaShoppingCart } from 'react-icons/fa';

const data = [
  {
    image: p13,
    hover_image: p13_hover,
    tag: "hot",
    percent: "49",
    day: "4",
    hour: "6",
    min: "36",
    sec: "56",
    name: "Floral Print Buttoned",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    price: "$450",
    discount_price: "$800",
  },
  // {
  //   image: p14,
  //   hover_image: p14_hover,
  //   tag: "new",
  //   percent: "49",
  //   day: "4",
  //   hour: "6",
  //   min: "36",
  //   sec: "56",
  //   name: "Floral Print Buttoned",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
  //   price: "$450",
  //   discount_price: "$800",
  // },
  // {
  //   image: p15,
  //   hover_image: p15_hover,
  //   tag: "sale",
  //   percent: "49",
  //   day: "4",
  //   hour: "6",
  //   min: "36",
  //   sec: "56",
  //   name: "Floral Print Buttoned",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
  //   price: "$450",
  //   discount_price: "$800",
  // },
]

const Hotdeals = () => {
  return (
    <div className="bg-card-bg rounded-md m-4 p-8">
      <div className="">
        <h3 className="main-title">Hot deals</h3>
        <div className="">

          {data.map((item, i) => (
            <div className="">
              <div className="">
                <div className="flex">
                  <a className='' href="#">
                    <Image src={item?.image} className='group-hover:invisible' alt="" height={300} width={150} />
                    <Image src={item?.hover_image} className="hidden group-hover:visible" height={300} width={150} alt='' />
                  </a>
                </div>
                <a className="bg-primary-color h-8 w-8 p-2 rounded-full font-xl text-font-light"><span> {item?.percent} <br />
                  off</span></a>
                <div className="flex">
                  <div className="bg-bg-color mr-2 ml-2 rounded-md p-2">
                    <div className=""> <span className="key">{item?.day}</span> <span className="text-base">DAYS</span> </div>
                  </div>
                  <div className="bg-bg-color mr-2 ml-2 rounded-md p-2">
                    <div className=""> <span className="key">{item?.hour}</span> <span className="text-base">HRS</span> </div>
                  </div>
                  <div className="bg-bg-color mr-2 ml-2 rounded-md p-2">
                    <div className=""> <span className="key">{item?.min}</span> <span className="text-base">MINS</span> </div>
                  </div>
                  <div className="bg-bg-color mr-2 ml-2 rounded-md p-2">
                    <div className=""> <span className="key">{item?.sec}</span> <span className="text-base">SEC</span> </div>
                  </div>
                </div>
              </div>

              <div className="text-left">
                <h3 className=""><a className='text-base no-underline text-font-color' href="/proddetails">{item?.name}</a></h3>
                <div className=""></div>
                <div className=""> <span className="text-base font-semibold text-primary-color"> {item?.price} </span> <span className="text-bg-grey">{item?.discount_price}</span> </div>

              </div>

              <div className="flex">
                <button className="" type="button"> <FaShoppingCart className='icon' /> </button>
                <button className="" type="button">Add to cart</button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Hotdeals