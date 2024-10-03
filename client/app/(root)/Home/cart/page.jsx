import React from 'react';
import { FaTrash } from "react-icons/fa";
import Image from 'next/image';
import p1 from "/assets/products/p1.jpg";
import p2 from "/assets/products/p2.jpg";

const data = [
    {
        image: p1,
        name: "Floral Print Buttoned",
        review: "5",
        subtotal: "300",
        total: "900",
    },
    {
        image: p2,
        name: "Floral Print Buttoned",
        review: "3",
        subtotal: "600",
        total: "1800",
    },
]

const Cart = () => {
    return (
        <div className="Container">
            <ul className="flex list-unstyled">
                <li><a href="" className='text-base mt-4 mr-2 font-normal text-font-color'>Home</a></li>
                <li><a href="" className='text-base mt-4 ml-2 font-normal text-primary-color'>Shopping Cart</a></li>
            </ul>

            <div className="bg-card-bg rounded-md p-8 mt-4 mb-4">
                <table className='w-full'>
                    <thead>
                        <tr className='justify-between'>
                            <th className="">Remove</th>
                            <th className="">Image</th>
                            <th className="">Product Name</th>
                            <th className="">Edit</th>
                            <th className="">Quantity</th>
                            <th className="">Subtotal</th>
                            <th className="">Grandtotal</th>
                        </tr>
                    </thead>

                    <tbody>

                        {data?.map((item, i) => (
                            <tr className='justify-between'>
                                <td className=""><a href="#" title="cancel" className="icon"><FaTrash /></a></td>
                                <td className="">
                                    <a className="" href="detail.html">
                                        <Image src={item?.image} height={250} alt="" />
                                    </a>
                                </td>
                                <td className="">
                                    <h4 className=''><a href="detail.html">{item?.name}</a></h4>
                                    <div className="grid">
                                        <div className="sm:col-span-12">
                                            <div className=""></div>
                                        </div>
                                        <div className="sm:col-span-12">
                                            <div className="">
                                                ({item?.review} Reviews)
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className=""><a href="#" className="">Edit</a></td>
                                <td className="">
                                    <div className="">
                                        <div className="">
                                            <div className=""><span className=""><i className="icon fa fa-sort-asc"></i></span></div>
                                            <div className=""><span className=""><i className="icon fa fa-sort-desc"></i></span></div>
                                        </div>
                                        <input type="text" value="1" />
                                    </div>
                                </td>
                                <td className=""><span className="">${item?.subtotal}</span></td>
                                <td className=""><span className="">${item?.total}</span></td>
                            </tr>
                        ))}


                    </tbody>

                    <tfoot>
                        <tr>
                            <td colSpan={7}>
                                <span className="justify-between">
                                    <a href="#" className="text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light">Continue Shopping</a>
                                    <a href="#" className="text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light">Update shopping cart</a>
                                </span>
                            </td>
                        </tr>
                    </tfoot>
                </table>

                <div className="grid grid-flow-col justify-between mt-12 mb-12">
                    <div className="col-span-4">
                        <table className="">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="">Estimate shipping and tax</span>
                                        <p>Enter your destination to get shipping and tax.</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="grid">
                                            <label className="">Country <span>*</span></label>
                                            <select className="p-4 mt-4 mb-4">
                                                <option>--Select options--</option>
                                                <option>India</option>
                                                <option>SriLanka</option>
                                                <option>united kingdom</option>
                                                <option>saudi arabia</option>
                                                <option>united arab emirates</option>
                                            </select>
                                        </div>
                                        <div className="grid">
                                            <label className="">State/Province <span>*</span></label>
                                            <select className="p-4 mt-4 mb-4">
                                                <option>--Select options--</option>
                                                <option>TamilNadu</option>
                                                <option>Kerala</option>
                                                <option>Andhra Pradesh</option>
                                                <option>Karnataka</option>
                                                <option>Madhya Pradesh</option>
                                            </select>
                                        </div>
                                        <div className="grid">
                                            <label className="">Zip/Postal Code</label>
                                            <input type="text" className="p-4 mt-4 mb-4" placeholder="" />
                                        </div>
                                        <div className="">
                                            <button type="submit" className="text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light">GET A QOUTE</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-span-4">
                        <table className="">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="">Discount Code</span>
                                        <p>Enter your coupon code if you have one..</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="">
                                            <input type="text" className="p-4 mt-4 mb-4" placeholder="You Coupon.." />
                                        </div>
                                        <div className="clearfix ">
                                            <button type="submit" className="text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light">APPLY COUPON</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-span-4 justify-end bg-bg-color p-8">
                        <table className="">
                            <thead>
                                <tr>
                                    <th>
                                        <div className="justify-between">
                                            Subtotal<span className="">$600.00</span>
                                        </div>
                                        <div className="justify-between">
                                            Grand Total<span className="">$600.00</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="grid">
                                            <button type="submit" className="text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-secondary-color uppercase text-font-color">PROCCED TO CHEKOUT</button>
                                            <span className="">Checkout with multiples address!</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart