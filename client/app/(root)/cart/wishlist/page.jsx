import React from 'react';
import Image from 'next/image';
import p1 from "../../../../../assets/products/p1.jpg";
import p2 from "../../../../../assets/products/p2.jpg";
import { FaStar, FaTimes } from "react-icons/fa";

const data = [
    {
        image: p1,
        name: "Floral Print Buttoned",
        review: "6",
        price: "450",
        old_price: "900",
    },
    {
        image: p2,
        name: "Floral Print Buttoned",
        review: "5",
        price: "450",
        old_price: "900",
    },
]

const Wishlist = () => {
    return (
        <div className="container">
            <ul className="flex list-unstyled">
                <li><a href="" className='text-base mt-4 mr-2 font-normal text-font-color'>Home</a></li>
                <li><a href="" className='text-base mt-4 ml-2 font-normal text-primary-color'>Wishlist</a></li>
            </ul>

            <div className="bg-card-bg rounded-lg p-8 mt-4 mb-4">
                <div><h2 className="main-title">My Wishlist</h2></div>

                {data?.map((item, i) => (
                    <div className='pt-8 pb-8 grid grid-flow-col items-center justify-between'>
                            <div className="col-span-2"><Image src={item?.image} className='' height={300} alt="img" /></div>
                            <div className="col-span-7 items-center">
                                <a className='no-underline text-font-color text-lg font-medium' href="#">{item?.name}</a>
                                <div className="flex">
                                    <FaStar className='text-base ml-1 mr-1 text-secondary-color' />
                                    <FaStar className='text-base ml-1 mr-1 text-secondary-color' />
                                    <FaStar className='text-base ml-1 mr-1 text-secondary-color' />
                                    <FaStar className='text-base ml-1 mr-1 text-secondary-color' />
                                    <FaStar className='text-base ml-1 mr-1 text-secondary-color' />
                                    <span className="text-base">( {item?.review} Reviews )</span>
                                </div>
                                <div className="text-xl font-medium text-primary-color"> ${item?.price}
                                    <span className='text-bg-grey ml-4'>${item?.old_price}</span>
                                </div>
                            </div>
                            <div className="col-span-3 flex justify-evenly items-center">
                            <a href="#" className="text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light">Add to cart</a>
                                <a href="#" className="text-xl font-medium text-secondary-color"><FaTimes /></a>
                            </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Wishlist