import React from 'react';
import Image from 'next/image';
import { FaShoppingBag, FaLaptop, FaAlignJustify, FaPaw, FaClock, FaHeartbeat, FaPaperPlane, FaFutbol, FaEnvira } from "react-icons/fa";

const Categories = () => {
  return (
    <div className="bg-card-bg p-8 rounded-md m-4">
      <div className="bg-secondary-color p-4 rounded-md flex"><FaAlignJustify className='text-xl font-medium mr-2' /> Categories</div>
      <ul className="grid">
        <li className="grid grid-flow-col text-base text-font-color mt-4 mb-4 border-b-1 border-font-color"> <a href="#" className='flex' ><FaShoppingBag className='text-2xl text-bg-grey mr-4' />Clothing</a>
          <ul className="bg-bg-color p-4 hidden">
            <li className="grid grid-flow-col justify-evenly">
              <div className="sm:col-span-12 md:col-span-3 mr-8">
                <ul className="list-none">
                  <li className='categories-item'><a href="#">Dresses</a></li>
                  <li className='categories-item'><a href="#">Shoes </a></li>
                  <li className='categories-item'><a href="#">Jackets</a></li>
                  <li className='categories-item'><a href="#">Sunglasses</a></li>
                  <li className='categories-item'><a href="#">Sport Wear</a></li>
                  <li className='categories-item'><a href="#">Blazers</a></li>
                  <li className='categories-item'><a href="#">Shirts</a></li>
                  <li className='categories-item'><a href="#">Shorts</a></li>
                </ul>
              </div>
              <div className="sm:col-span-12 md:col-span-3 mr-8">
                <ul className="list-none">
                  <li className='categories-item'><a href="#">Handbags</a></li>
                  <li className='categories-item'><a href="#">Jwellery</a></li>
                  <li className='categories-item'><a href="#">Swimwear </a></li>
                  <li className='categories-item'><a href="#">Tops</a></li>
                  <li className='categories-item'><a href="#">Flats</a></li>
                  <li className='categories-item'><a href="#">Shoes</a></li>
                  <li className='categories-item'><a href="#">Winter Wear</a></li>
                  <li className='categories-item'><a href="#">Night Suits</a></li>
                </ul>
              </div>
              <div className="sm:col-span-12 md:col-span-3 mr-8">
                <ul className="list-none">
                  <li className='categories-item'><a href="#">Toys &amp; Games</a></li>
                  <li className='categories-item'><a href="#">Jeans</a></li>
                  <li className='categories-item'><a href="#">Shirts</a></li>
                  <li className='categories-item'><a href="#">Shoes</a></li>
                  <li className='categories-item'><a href="#">School Bags</a></li>
                  <li className='categories-item'><a href="#">Lunch Box</a></li>
                  <li className='categories-item'><a href="#">Footwear</a></li>
                  <li className='categories-item'><a href="#">Wipes</a></li>
                </ul>
              </div>
              <div className="sm:col-span-12 md:col-span-3 mr-8">
                <ul className="list-none">
                  <li className='categories-item'><a href="#">Sandals </a></li>
                  <li className='categories-item'><a href="#">Shorts</a></li>
                  <li className='categories-item'><a href="#">Dresses</a></li>
                  <li className='categories-item'><a href="#">Jwellery</a></li>
                  <li className='categories-item'><a href="#">Bags</a></li>
                  <li className='categories-item'><a href="#">Night Dress</a></li>
                  <li className='categories-item'><a href="#">Swim Wear</a></li>
                  <li className='categories-item'><a href="#">Toys</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </li>

        <li className="grid grid-flow-col text-base text-font-color mt-4 mb-4 border-b-1 border-font-color"> <a href="#" className='flex' ><FaLaptop className='text-2xl text-bg-grey mr-4' />Electronics</a>
          <ul className="bg-bg-color p-4 hidden">
            <li className="grid grid-flow-col justify-evenly">
              <div className="lg:col-span-4 sm:col-span-12 mr-8">
                <ul>
                  <li className='categories-item'><a href="#">Gaming</a></li>
                  <li className='categories-item'><a href="#">Laptop Skins</a></li>
                  <li className='categories-item'><a href="#">Apple</a></li>
                  <li className='categories-item'><a href="#">Dell</a></li>
                  <li className='categories-item'><a href="#">Lenovo</a></li>
                  <li className='categories-item'><a href="#">Microsoft</a></li>
                  <li className='categories-item'><a href="#">Asus</a></li>
                  <li className='categories-item'><a href="#">Adapters</a></li>
                  <li className='categories-item'><a href="#">Batteries</a></li>
                  <li className='categories-item'><a href="#">Cooling Pads</a></li>
                </ul>
              </div>
              <div className="lg:col-span-4 sm:col-span-12 mr-8">
                <ul>
                  <li className='categories-item'><a href="#">Routers &amp; Modems</a></li>
                  <li className='categories-item'><a href="#">CPUs, Processors</a></li>
                  <li className='categories-item'><a href="#">PC Gaming Store</a></li>
                  <li className='categories-item'><a href="#">Graphics Cards</a></li>
                  <li className='categories-item'><a href="#">Components</a></li>
                  <li className='categories-item'><a href="#">Webcam</a></li>
                  <li className='categories-item'><a href="#">Memory (RAM)</a></li>
                  <li className='categories-item'><a href="#">Motherboards</a></li>
                  <li className='categories-item'><a href="#">Keyboards</a></li>
                  <li className='categories-item'><a href="#">Headphones</a></li>
                </ul>
              </div>
              <div> <a href="#"><Image src="/assets/banners/banner-side.png" alt='' /></a> </div>
            </li>
          </ul></li>

        <li className="grid grid-flow-col text-base text-font-color mt-4 mb-4 border-b-1 border-font-color"> <a href="#" className='flex' ><FaPaw className='text-2xl text-bg-grey mr-4' />Shoes</a>
          <ul className="bg-bg-color p-4 hidden">
            <li className="grid grid-flow-col justify-evenly">
              <div className="sm:col-span-12 md:col-span-3 mr-8">
                <ul className="list-none">
                  <li className='categories-item'><a href="#">Dresses</a></li>
                  <li className='categories-item'><a href="#">Shoes </a></li>
                  <li className='categories-item'><a href="#">Jackets</a></li>
                  <li className='categories-item'><a href="#">Sunglasses</a></li>
                  <li className='categories-item'><a href="#">Sport Wear</a></li>
                  <li className='categories-item'><a href="#">Blazers</a></li>
                  <li className='categories-item'><a href="#">Shirts</a></li>
                  <li className='categories-item'><a href="#">Shorts</a></li>
                </ul>
              </div>
              <div className="sm:col-span-12 md:col-span-3 mr-8">
                <ul className="list-none">
                  <li className='categories-item'><a href="#">Handbags</a></li>
                  <li className='categories-item'><a href="#">Jwellery</a></li>
                  <li className='categories-item'><a href="#">Swimwear </a></li>
                  <li className='categories-item'><a href="#">Tops</a></li>
                  <li className='categories-item'><a href="#">Flats</a></li>
                  <li className='categories-item'><a href="#">Shoes</a></li>
                  <li className='categories-item'><a href="#">Winter Wear</a></li>
                  <li className='categories-item'><a href="#">Night Suits</a></li>
                </ul>
              </div>
              <div className="sm:col-span-12 md:col-span-3 mr-8">
                <ul className="list-none">
                  <li className='categories-item'><a href="#">Toys &amp; Games</a></li>
                  <li className='categories-item'><a href="#">Jeans</a></li>
                  <li className='categories-item'><a href="#">Shirts</a></li>
                  <li className='categories-item'><a href="#">Shoes</a></li>
                  <li className='categories-item'><a href="#">School Bags</a></li>
                  <li className='categories-item'><a href="#">Lunch Box</a></li>
                  <li className='categories-item'><a href="#">Footwear</a></li>
                  <li className='categories-item'><a href="#">Wipes</a></li>
                </ul>
              </div>
              <div className="sm:col-span-12 md:col-span-3 mr-8">
                <ul className="list-none">
                  <li className='categories-item'><a href="#">Sandals </a></li>
                  <li className='categories-item'><a href="#">Shorts</a></li>
                  <li className='categories-item'><a href="#">Dresses</a></li>
                  <li className='categories-item'><a href="#">Jwellery</a></li>
                  <li className='categories-item'><a href="#">Bags</a></li>
                  <li className='categories-item'><a href="#">Night Dress</a></li>
                  <li className='categories-item'><a href="#">Swim Wear</a></li>
                  <li className='categories-item'><a href="#">Toys</a></li>
                </ul>
              </div>
            </li>
          </ul></li>

        <li className="grid grid-flow-col text-base text-font-color mt-4 mb-4 border-b-1 border-font-color"> <a href="#" className='flex' ><FaClock className='text-2xl text-bg-grey mr-4' />Watches</a>
          <ul className="bg-bg-color p-4 hidden">
            <li className="grid grid-flow-col justify-evenly">
              <div className="lg:col-span-4 sm:col-span-12 mr-8">
                <ul>
                  <li className='categories-item'><a href="#">Gaming</a></li>
                  <li className='categories-item'><a href="#">Laptop Skins</a></li>
                  <li className='categories-item'><a href="#">Apple</a></li>
                  <li className='categories-item'><a href="#">Dell</a></li>
                  <li className='categories-item'><a href="#">Lenovo</a></li>
                  <li className='categories-item'><a href="#">Microsoft</a></li>
                  <li className='categories-item'><a href="#">Asus</a></li>
                  <li className='categories-item'><a href="#">Adapters</a></li>
                  <li className='categories-item'><a href="#">Batteries</a></li>
                  <li className='categories-item'><a href="#">Cooling Pads</a></li>
                </ul>
              </div>
              <div className="lg:col-span-4 sm:col-span-12 mr-8">
                <ul>
                  <li className='categories-item'><a href="#">Routers &amp; Modems</a></li>
                  <li className='categories-item'><a href="#">CPUs, Processors</a></li>
                  <li className='categories-item'><a href="#">PC Gaming Store</a></li>
                  <li className='categories-item'><a href="#">Graphics Cards</a></li>
                  <li className='categories-item'><a href="#">Components</a></li>
                  <li className='categories-item'><a href="#">Webcam</a></li>
                  <li className='categories-item'><a href="#">Memory (RAM)</a></li>
                  <li className='categories-item'><a href="#">Motherboards</a></li>
                  <li className='categories-item'><a href="#">Keyboards</a></li>
                  <li className='categories-item'><a href="#">Headphones</a></li>
                </ul>
              </div>
              <div> <a href="#"><Image src="/assets/banners/banner-side.png" alt='' /></a> </div>
            </li>
          </ul></li>

        <li className="grid grid-flow-col text-base text-font-color mt-4 mb-4 border-b-1 border-font-color"> <a href="#" className='flex' >Jewellery</a>
          <ul className="bg-bg-color p-4 hidden">
            <li className="grid grid-flow-col justify-evenly">
              <div className="sm:col-span-12 md:col-span-3 mr-8">
                <ul className="list-none">
                  <li className='categories-item'><a href="#">Dresses</a></li>
                  <li className='categories-item'><a href="#">Shoes </a></li>
                  <li className='categories-item'><a href="#">Jackets</a></li>
                  <li className='categories-item'><a href="#">Sunglasses</a></li>
                  <li className='categories-item'><a href="#">Sport Wear</a></li>
                  <li className='categories-item'><a href="#">Blazers</a></li>
                  <li className='categories-item'><a href="#">Shirts</a></li>
                  <li className='categories-item'><a href="#">Shorts</a></li>
                </ul>
              </div>
              <div className="sm:col-span-12 md:col-span-3 mr-8">
                <ul className="list-none">
                  <li className='categories-item'><a href="#">Handbags</a></li>
                  <li className='categories-item'><a href="#">Jwellery</a></li>
                  <li className='categories-item'><a href="#">Swimwear </a></li>
                  <li className='categories-item'><a href="#">Tops</a></li>
                  <li className='categories-item'><a href="#">Flats</a></li>
                  <li className='categories-item'><a href="#">Shoes</a></li>
                  <li className='categories-item'><a href="#">Winter Wear</a></li>
                  <li className='categories-item'><a href="#">Night Suits</a></li>
                </ul>
              </div>
              <div className="sm:col-span-12 md:col-span-3 mr-8">
                <ul className="list-none">
                  <li className='categories-item'><a href="#">Toys &amp; Games</a></li>
                  <li className='categories-item'><a href="#">Jeans</a></li>
                  <li className='categories-item'><a href="#">Shirts</a></li>
                  <li className='categories-item'><a href="#">Shoes</a></li>
                  <li className='categories-item'><a href="#">School Bags</a></li>
                  <li className='categories-item'><a href="#">Lunch Box</a></li>
                  <li className='categories-item'><a href="#">Footwear</a></li>
                  <li className='categories-item'><a href="#">Wipes</a></li>
                </ul>
              </div>
              <div className="sm:col-span-12 md:col-span-3 mr-8">
                <ul className="list-none">
                  <li className='categories-item'><a href="#">Sandals </a></li>
                  <li className='categories-item'><a href="#">Shorts</a></li>
                  <li className='categories-item'><a href="#">Dresses</a></li>
                  <li className='categories-item'><a href="#">Jwellery</a></li>
                  <li className='categories-item'><a href="#">Bags</a></li>
                  <li className='categories-item'><a href="#">Night Dress</a></li>
                  <li className='categories-item'><a href="#">Swim Wear</a></li>
                  <li className='categories-item'><a href="#">Toys</a></li>
                </ul>
              </div>
            </li>
          </ul></li>

        <li className="grid grid-flow-col text-base text-font-color mt-4 mb-4 border-b-1 border-font-color"> <a href="#" className='flex' ><FaHeartbeat className='text-2xl text-bg-grey mr-4' />Health and Beauty</a>
          <ul className="bg-bg-color p-4 hidden">
            <li className="grid grid-flow-col justify-evenly">
              <div className="lg:col-span-4 sm:col-span-12 mr-8">
                <ul>
                  <li className='categories-item'><a href="#">Gaming</a></li>
                  <li className='categories-item'><a href="#">Laptop Skins</a></li>
                  <li className='categories-item'><a href="#">Apple</a></li>
                  <li className='categories-item'><a href="#">Dell</a></li>
                  <li className='categories-item'><a href="#">Lenovo</a></li>
                  <li className='categories-item'><a href="#">Microsoft</a></li>
                  <li className='categories-item'><a href="#">Asus</a></li>
                  <li className='categories-item'><a href="#">Adapters</a></li>
                  <li className='categories-item'><a href="#">Batteries</a></li>
                  <li className='categories-item'><a href="#">Cooling Pads</a></li>
                </ul>
              </div>
              <div className="lg:col-span-4 sm:col-span-12 mr-8">
                <ul>
                  <li className='categories-item'><a href="#">Routers &amp; Modems</a></li>
                  <li className='categories-item'><a href="#">CPUs, Processors</a></li>
                  <li className='categories-item'><a href="#">PC Gaming Store</a></li>
                  <li className='categories-item'><a href="#">Graphics Cards</a></li>
                  <li className='categories-item'><a href="#">Components</a></li>
                  <li className='categories-item'><a href="#">Webcam</a></li>
                  <li className='categories-item'><a href="#">Memory (RAM)</a></li>
                  <li className='categories-item'><a href="#">Motherboards</a></li>
                  <li className='categories-item'><a href="#">Keyboards</a></li>
                  <li className='categories-item'><a href="#">Headphones</a></li>
                </ul>
              </div>
              <div className=""> <a href="#"><Image src="/assets/banners/banner-side.png" alt='' /></a> </div>
            </li>
          </ul>
        </li>

        <li className="grid grid-flow-col text-base text-font-color mt-4 mb-4 border-b-1 border-font-color"> <a href="#" className='flex' ><FaPaperPlane className='text-2xl text-bg-grey mr-4' />Kids and Babies</a></li>

        <li className="grid grid-flow-col text-base text-font-color mt-4 mb-4 border-b-1 border-font-color"> <a href="#" className='flex' ><FaFutbol className='text-2xl text-bg-grey mr-4' />Sports</a></li>

        <li className="grid grid-flow-col text-base text-font-color mt-4 mb-4 border-b-1 border-font-color"> <a href="#" className='flex' ><FaEnvira className='text-2xl text-bg-grey mr-4' />Home and Garden</a> </li>

      </ul>
    </div>
  )
}

export default Categories