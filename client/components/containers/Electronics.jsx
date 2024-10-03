import React from 'react';
import Singleprod from './products/Singleprod';

const data = [
  {
    image: "/assets/products/p13.jpg",
    hover_image: "/assets/products/p13_hover.jpg",
    tag: "hot",
    name: "Floral Print Buttoned",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    price: "$450",
    discount_price: "$800",
  },
  {
    image: "/assets/products/p15.jpg",
    hover_image: "/assets/products/p15_hover.jpg",
    tag: "new",
    name: "Floral Print Buttoned",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    price: "$450",
    discount_price: "$800",
  },
  {
    image: "/assets/products/p10.jpg",
    hover_image: "/assets/products/p10_hover.jpg",
    tag: "sale",
    name: "Floral Print Buttoned",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    price: "$450",
    discount_price: "$800",
  }
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