import React from 'react';
import Image from 'next/image';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const Singleprod = ({ item }) => {
    return (
        <div className="bg-bg-color rounded-md m-4 p-4">
            <div className="">
                <div className="">
                    <a href="" className='flex'>
                        <Image src={item?.image} className='' alt="" height={300} width={150} />
                        <Image src={item?.hover_image} className="hidden" height={300} width={150} alt='' />
                    </a>
                </div>
                <div className="text-primary-color rounded-full text-base p-2 w-[5rem]"><span>{item?.tag}</span></div>
            </div>

            <div className="text-left">
                <h3 className=""><a className='text-base text-font-color no-underline' href="/proddetails">{item?.title}</a></h3>
                <div className=""></div>
                <div className=""></div>
                <div className="justify-evenly"> <span className="text-base font-semibold text-primary-color"> {item?.price} </span> <span className="text-base font-semibold text-bg-grey"> {item?.discount_price}</span> </div>
            </div>

            <div className="">
                <ul className="list-none">
                    <li className="flex">
                        <button className="" type="button"> <FaShoppingCart className='icon' /> </button>
                        <button className="" type="button">Add to cart</button>
                    </li>
                    <li className=""> <a className="" href="/proddetails" title="Wishlist"> <FaHeart className='icon' /> </a> </li>
                </ul>
            </div>
        </div>
    )
}

export default Singleprod