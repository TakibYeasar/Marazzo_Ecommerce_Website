import React from 'react';
import Singleprod from './Singleprod';

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
  },
  {
    image: "/assets/products/p11.jpg",
    hover_image: "/assets/products/p11_hover.jpg",
    tag: "hot",
    name: "Floral Print Buttoned",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    price: "$450",
    discount_price: "$800",
  },
  {
    image: "/assets/products/p08.jpg",
    hover_image: "/assets/products/p08_hover.jpg",
    tag: "new",
    name: "Floral Print Buttoned",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    price: "$450",
    discount_price: "$800",
  },
  {
    image: "/assets/products/p07.jpg",
    hover_image: "/assets/products/p07_hover.jpg",
    tag: "sale",
    name: "Floral Print Buttoned",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    price: "$450",
    discount_price: "$800",
  },
]


const Featuredproduct = () => {
  return (
    <section className="bg-card-bg p-8 m-4">
      <h3 className="main-title">Featured Products</h3>
      <div className="flex">

        {data.map((item, i) => (
          <Singleprod key={i} item={item} />
        ))}


      </div>
    </section>
  )
}

export default Featuredproduct