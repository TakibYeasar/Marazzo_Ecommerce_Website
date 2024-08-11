import React from 'react';
import Image from 'next/image';
import p13 from "../../assets/products/p13.jpg";
import p13_hover from "../../assets/products/p13_hover.jpg";
import p15 from "../../assets/products/p15.jpg";
import p15_hover from "../../assets/products/p15_hover.jpg";
import p10 from "../../assets/products/p10.jpg";
import p10_hover from "../../assets/products/p10_hover.jpg";
import p11 from "../../assets/products/p11.jpg";
import p11_hover from "../../assets/products/p11_hover.jpg";
import p08 from "../../assets/products/p8.jpg";
import p08_hover from "../../assets/products/p8_hover.jpg";
import p07 from "../../assets/products/p7.jpg";
import p07_hover from "../../assets/products/p7_hover.jpg";
import { FaHeart, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import Singleprod from '../index';


const data = [
  {
    image: p13,
    hover_image: p13_hover,
    tag: "hot",
    title: "Floral Print Buttoned",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    price: "$450",
    discount_price: "$800",
  },
  {
    image: p15,
    hover_image: p15_hover,
    tag: "new",
    title: "Floral Print Buttoned",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    price: "$450",
    discount_price: "$800",
  },
  {
    image: p10,
    hover_image: p10_hover,
    tag: "sale",
    title: "Floral Print Buttoned",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    price: "$450",
    discount_price: "$800",
  },
  {
    image: p11,
    hover_image: p11_hover,
    tag: "hot",
    title: "Floral Print Buttoned",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    price: "$450",
    discount_price: "$800",
  },
  {
    image: p08,
    hover_image: p08_hover,
    tag: "new",
    title: "Floral Print Buttoned",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    price: "$450",
    discount_price: "$800",
  },
  // {
  //   image: p07,
  //   hover_image: p07_hover,
  //   tag: "sale",
  //   title: "Floral Print Buttoned",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
  //   price: "$450",
  //   discount_price: "$800",
  // },
  // {
  //   image: p13,
  //   hover_image: p13_hover,
  //   tag: "hot",
  //   title: "Floral Print Buttoned",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
  //   price: "$450",
  //   discount_price: "$800",
  // },
  // {
  //   image: p15,
  //   hover_image: p15_hover,
  //   tag: "new",
  //   title: "Floral Print Buttoned",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
  //   price: "$450",
  //   discount_price: "$800",
  // },
  // {
  //   image: p10,
  //   hover_image: p10_hover,
  //   tag: "sale",
  //   title: "Floral Print Buttoned",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
  //   price: "$450",
  //   discount_price: "$800",
  // },
  // {
  //   image: p11,
  //   hover_image: p11_hover,
  //   tag: "hot",
  //   title: "Floral Print Buttoned",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
  //   price: "$450",
  //   discount_price: "$800",
  // },
  // {
  //   image: p08,
  //   hover_image: p08_hover,
  //   tag: "new",
  //   title: "Floral Print Buttoned",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
  //   price: "$450",
  //   discount_price: "$800",
  // },
  // {
  //   image: p07,
  //   hover_image: p07_hover,
  //   tag: "sale",
  //   title: "Floral Print Buttoned",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
  //   price: "$450",
  //   discount_price: "$800",
  // },
]

const Newproducts = () => {
  return (
    <div className="bg-card-bg p-8">
      <div className="">
        <div className="flex justify-between">
          <h3 className="main-title">New Products</h3>
          <ul className="flex" >
            <li><a className='no-underline text-xl text-font-color ml-2 mr-2'>All</a></li>
            <li><a className='no-underline text-xl text-font-color ml-2 mr-2'>Clothing</a></li>
            <li><a className='no-underline text-xl text-font-color ml-2 mr-2'>Electronics</a></li>
            <li><a className='no-underline text-xl text-font-color ml-2 mr-2'>Shoes</a></li>
          </ul>
        </div>

        <div className="grid grid-flow-col grid-rows-5">
          
          {data.map((item, i) => (
            <Singleprod key={i} item={item} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default Newproducts