import React from 'react';
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
import Singleprod from './Singleprod';

const data = [
  {
    image: p13,
    hover_image: p13_hover,
    tag: "hot",
    name: "Floral Print Buttoned",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    price: "$450",
    discount_price: "$800",
  },
  {
    image: p15,
    hover_image: p15_hover,
    tag: "new",
    name: "Floral Print Buttoned",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    price: "$450",
    discount_price: "$800",
  },
  {
    image: p10,
    hover_image: p10_hover,
    tag: "sale",
    name: "Floral Print Buttoned",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    price: "$450",
    discount_price: "$800",
  },
  // {
  //   image: p11,
  //   hover_image: p11_hover,
  //   tag: "hot",
  //   name: "Floral Print Buttoned",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
  //   price: "$450",
  //   discount_price: "$800",
  // },
  // {
  //   image: p08,
  //   hover_image: p08_hover,
  //   tag: "new",
  //   name: "Floral Print Buttoned",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
  //   price: "$450",
  //   discount_price: "$800",
  // },
  // {
  //   image: p07,
  //   hover_image: p07_hover,
  //   tag: "sale",
  //   name: "Floral Print Buttoned",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
  //   price: "$450",
  //   discount_price: "$800",
  // },
]



const Electronics = () => {
  return (
    <div className="bg-card-bg p-8 m-4">
      <section className="grid grid-flow-col">
        <div className="lg:col-span-3">
          <h3 className="text-base bg-primary-color p-4 text-font-light rounded-md">Electronics & Digital</h3>
          <ul className="grid">
            <li><a className='categories-item' href="#">Computers</a></li>
            <li><a className='categories-item' href="#">Air Condtion</a></li>
            <li><a className='categories-item' href="#">Mobile Phones</a></li>
            <li><a className='categories-item' href="#">Camera</a></li>
            <li><a className='categories-item' href="#">Television</a></li>
            <li><a className='categories-item' href="#">Sound & Speakers</a></li>
            <li><a className='categories-item' href="#">Games & Audio Music</a></li>
            <li><a className='categories-item' href="#">Digital Watches</a></li>
            <li><a className='categories-item' href="#">Washing Machines</a></li>
            <li><a className='categories-item' href="#">Office Electronics</a></li>
          </ul>
        </div>
        <div className="lg:col-span-9">
          <div className="flex">

            {data.map((item, i) => (
              <Singleprod key={i} item={item} />
            ))}


          </div>
        </div>
      </section>
    </div>
  )
}

export default Electronics