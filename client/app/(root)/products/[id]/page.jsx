import React from 'react';
import Image from 'next/image';
import lhs_banner from "../../../assets/banners/LHS-banner.jpg";
import home_banner1 from "../../../assets/banners/home-banner1.jpg";
import home_banner2 from "../../../assets/banners/home-banner2.jpg";
import p13 from "../../../assets/products/p13.jpg";
import p13_hover from "../../../assets/products/p13_hover.jpg";
import p15 from "../../../assets/products/p15.jpg";
import p15_hover from "../../../assets/products/p15_hover.jpg";
import p10 from "../../../assets/products/p10.jpg";
import p10_hover from "../../../assets/products/p10_hover.jpg";
import p11 from "../../../assets/products/p11.jpg";
import p11_hover from "../../../assets/products/p11_hover.jpg";
import p08 from "../../../assets/products/p8.jpg";
import p08_hover from "../../../assets/products/p8_hover.jpg";
import p09 from "../../../assets/products/p9.jpg";
import p09_hover from "../../../assets/products/p9_hover.jpg";
import p06 from "../../../assets/products/p6.jpg";
import p06_hover from "../../../assets/products/p6_hover.jpg";
import p07 from "../../../assets/products/p7.jpg";
import p07_hover from "../../../assets/products/p7_hover.jpg";
import p14 from "../../../assets/products/p14.jpg";
import p14_hover from "../../../assets/products/p14_hover.jpg";
import p12 from "../../../assets/products/p12.jpg";
import p12_hover from "../../../assets/products/p12_hover.jpg";
import member1 from "../../../assets/testimonials/member1.png";
import member2 from "../../../assets/testimonials/member2.png";
import member3 from "../../../assets/testimonials/member3.png";
import { FaCalendar, FaEnvelope, FaHeart, FaMinus, FaPlus, FaShoppingCart, FaSignal } from "react-icons/fa";
import { Hotdeals, Newslatter, Testimonials, Singleprod } from '@/components/containers';
import blank from "../../../assets/blank.gif";

const slide1 = [
    {
        id: "slide1",
        image: p14,
    },
    {
        id: "slide1",
        image: p13,
    },
    {
        id: "slide1",
        image: p07,
    },
    {
        id: "slide1",
        image: p14,
    },
    {
        id: "slide1",
        image: p09,
    },
]

const slide2 = [
    {
        id: "slide2",
        image: p14,
    },
    {
        id: "slide2",
        image: p15,
    },
    {
        id: "slide2",
        image: p06,
    },
    {
        id: "slide2",
        image: p12,
    },
    {
        id: "slide2",
        image: p15,
    },
]


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
    //     image: p11,
    //     hover_image: p11_hover,
    //     tag: "hot",
    //     name: "Floral Print Buttoned",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    //     price: "$450",
    //     discount_price: "$800",
    // },
    // {
    //     image: p08,
    //     hover_image: p08_hover,
    //     tag: "new",
    //     name: "Floral Print Buttoned",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    //     price: "$450",
    //     discount_price: "$800",
    // },
    // {
    //     image: p07,
    //     hover_image: p07_hover,
    //     tag: "sale",
    //     name: "Floral Print Buttoned",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    //     price: "$450",
    //     discount_price: "$800",
    // },
    // {
    //     image: p13,
    //     hover_image: p13_hover,
    //     tag: "hot",
    //     name: "Floral Print Buttoned",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    //     price: "$450",
    //     discount_price: "$800",
    // },
    // {
    //     image: p15,
    //     hover_image: p15_hover,
    //     tag: "new",
    //     name: "Floral Print Buttoned",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    //     price: "$450",
    //     discount_price: "$800",
    // },
    // {
    //     image: p10,
    //     hover_image: p10_hover,
    //     tag: "sale",
    //     name: "Floral Print Buttoned",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    //     price: "$450",
    //     discount_price: "$800",
    // },
    // {
    //     image: p11,
    //     hover_image: p11_hover,
    //     tag: "hot",
    //     name: "Floral Print Buttoned",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    //     price: "$450",
    //     discount_price: "$800",
    // },
    // {
    //     image: p08,
    //     hover_image: p08_hover,
    //     tag: "new",
    //     name: "Floral Print Buttoned",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    //     price: "$450",
    //     discount_price: "$800",
    // },
    // {
    //     image: p07,
    //     hover_image: p07_hover,
    //     tag: "sale",
    //     name: "Floral Print Buttoned",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    //     price: "$450",
    //     discount_price: "$800",
    // },
]

const product = [
    {
        title: "Floral Print Buttoned",
        review: "13 Reviews",
        availability: "True",
        in_Stock: "True",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: "800",
        old_price: "900",
    }
]

const Proddetails = () => {
    return (
        <div className="container">
            <div className="grid">
                <ul className="list-inline list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Clothing</a></li>
                    <li className='active'>Floral Print Buttoned</li>
                </ul>
            </div>

            <div className="grid grid-flow-col">
                <div className='lg:col-span-3'>
                    <div className="w-full">
                        <Image src={lhs_banner} alt="Image" />
                    </div>
                    <Hotdeals />

                    <Newslatter />

                    <Testimonials />

                </div>


                <div className='lg:col-span-9'>
                    <div className="grid">

                        <div className="lg:col-span-12 sm:col-span-12 col-md-4 col-lg-4 gallery-holder">
                            <div className="product-item-holder size-big single-product-gallery small-gallery">

                                <div id="owl-single-product">
                                    {slide1?.map((item, i) => (
                                        <div className="single-product-gallery-item" id="slide1">
                                            <a data-lightbox="image-1" data-title="Gallery">
                                                <Image className="img-responsive" alt="" src={blank} data-echo={item?.image} />
                                            </a>
                                        </div>
                                    ))}

                                </div>


                                <div className="single-product-gallery-thumbs gallery-thumbs">

                                    <div id="owl-single-product-thumbnails">
                                        {slide2?.map((item, i) => (
                                            <div className="single-product-gallery-item" id="slide1">
                                                <a data-lightbox="image-1" data-title="Gallery">
                                                    <Image className="img-responsive" alt="" src={blank} data-echo={item?.image} />
                                                </a>
                                            </div>
                                        ))}
                                    </div>



                                </div>

                            </div>
                        </div>


                        <div className='sm:col-span-12 md:col-span-8 lg:col-span-8'>
                            {product?.map((item, i) => (
                                <div className="">
                                    <h1 className="name">{item?.title}</h1>

                                    <div className="">
                                        <div className="lg:col-span-12">
                                            <div className="">
                                                <div className=""></div>
                                            </div>
                                            <div className="">
                                                <a href="#" className="">({item?.review})</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="lg:col-span-12">
                                            <div className="">
                                                <span className="">Availability : {item?.availability}</span>
                                            </div>
                                            <div className="">
                                                <span className="">In Stock: {item?.in_Stock}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="">
                                        <p>{item?.description}</p>
                                    </div>

                                    <div className="">
                                        <div className="sm:col-span-6 lg:col-span-6">
                                            <div className="">
                                                <span className="">${item?.price}</span>
                                                <span className="">${item?.old_price}</span>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6 lg:col-span-6">
                                            <div className="">
                                                <a className="" title="Wishlist" href="#">
                                                    <FaHeart className='icon' />
                                                </a>
                                                <a className="" title="Add to Compare" href="#">
                                                    <FaSignal className='icon' />
                                                </a>
                                                <a className="" title="E-mail" href="#">
                                                    <FaEnvelope className='icon' />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="">
                                            <span className="">Qty :</span>
                                        </div>

                                        <div className="">
                                            <div className="flex">
                                                <input type="text" value="1" />
                                                <div className="">
                                                    <div className=""><span className="ir"><FaPlus className='icon' /></span></div>
                                                    <div className=""><span className="ir"><FaMinus className='icon' /></span></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="">
                                            <a href="#" className=""><FaShoppingCart className='icon' /> ADD TO CART</a>
                                        </div>


                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid">
                        <div className="sm:col-span-12 md:col-span-3 col-lg-3">
                            <ul id="" className="">
                                <li className="active"><a href="#description">DESCRIPTION</a></li>
                                <li><a href="#review">REVIEW</a></li>
                                <li><a href="#tags">TAGS</a></li>
                            </ul>
                        </div>
                        <div className="sm:col-span-12 md:col-span-9 col-lg-9">

                            <div className="">

                                <div className="">
                                    <div className="">
                                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                </div>

                                <div>
                                    <div className="">

                                        <div className="">
                                            <h4 className="">Customer Reviews</h4>

                                            <div className="">
                                                <div className=""><span className="">We love this product</span><span className=""><FaCalendar className='icon' /><span>1 days ago</span></span></div>
                                                <div className="">"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam suscipit."</div>
                                            </div>
                                        </div>



                                        <div className="">
                                            <h4 className="">Write your own review</h4>
                                            <div className="">
                                                <div className="">
                                                    <table className="">
                                                        <thead>
                                                            <tr>
                                                                <th className="">&nbsp;</th>
                                                                <th>1 star</th>
                                                                <th>2 stars</th>
                                                                <th>3 stars</th>
                                                                <th>4 stars</th>
                                                                <th>5 stars</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="">Quality</td>
                                                                <td><input type="radio" name="quality" className="radio" value="1" /></td>
                                                                <td><input type="radio" name="quality" className="radio" value="2" /></td>
                                                                <td><input type="radio" name="quality" className="radio" value="3" /></td>
                                                                <td><input type="radio" name="quality" className="radio" value="4" /></td>
                                                                <td><input type="radio" name="quality" className="radio" value="5" /></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="">Price</td>
                                                                <td><input type="radio" name="quality" className="radio" value="1" /></td>
                                                                <td><input type="radio" name="quality" className="radio" value="2" /></td>
                                                                <td><input type="radio" name="quality" className="radio" value="3" /></td>
                                                                <td><input type="radio" name="quality" className="radio" value="4" /></td>
                                                                <td><input type="radio" name="quality" className="radio" value="5" /></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="">Value</td>
                                                                <td><input type="radio" name="quality" className="radio" value="1" /></td>
                                                                <td><input type="radio" name="quality" className="radio" value="2" /></td>
                                                                <td><input type="radio" name="quality" className="radio" value="3" /></td>
                                                                <td><input type="radio" name="quality" className="radio" value="4" /></td>
                                                                <td><input type="radio" name="quality" className="radio" value="5" /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="">
                                                <div className="">
                                                    <form className="">

                                                        <div className="grid">
                                                            <div className="sm:col-span-6">
                                                                <div className="">
                                                                    <label >Your Name <span className="">*</span></label>
                                                                    <input type="text" className="" placeholder="" />
                                                                </div>
                                                                <div className="">
                                                                    <label >Summary <span className="">*</span></label>
                                                                    <input type="text" className="" placeholder="" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="">
                                                                    <label>Review <span className="">*</span></label>
                                                                    <textarea className="" placeholder=""></textarea>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="">
                                                            <button className="">SUBMIT REVIEW</button>
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div className="">
                                    <div className="">

                                        <h4 className="t">Product Tags</h4>
                                        <form className="">

                                            <div className="">
                                                <label >Add Your Tags: </label>
                                                <input type="email" className="" />
                                            </div>

                                            <button className="" type="submit">ADD TAGS</button>
                                        </form>

                                        <form className="">
                                            <div className="">
                                                <label>&nbsp;</label>
                                                <span className="">Use spaces to separate tags. Use single quotes (') for phrases.</span>
                                            </div>
                                        </form>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                    <section className="grid">
                        <div className="lg:col-span-3">
                            <h3 className="">Upsell Products</h3>
                            <div className="">
                                <Image className="" height={150} width={300} src={home_banner1} alt="" />
                                <Image className="" height={150} width={300} src={home_banner2} alt="" />
                            </div>
                        </div>
                        <div className="lg:col-span-9 flex">

                            {data.map((item, i) => (
                                <Singleprod key={i} item={item} />
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default Proddetails