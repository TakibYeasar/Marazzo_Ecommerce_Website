import React from 'react';
import { FaAlignJustify, FaAngleLeft, FaAngleRight, FaBars, FaClock, FaEnvira, FaFutbol, FaHeart, FaHeartbeat, FaLaptop, FaPaperPlane, FaShoppingBag, FaShoppingCart, FaSignInAlt, FaSignal, FaThLarge } from "react-icons/fa";
import Image from 'next/image';
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
import p07 from "../../../assets/products/p7.jpg";
import p07_hover from "../../../assets/products/p7_hover.jpg";
import banner_side from "../../../assets/banners/banner-side.png";
import cta_banner1 from "../../../assets/banners/cat-banner-1.jpg";
import member1 from "../../../assets/testimonials/member1.png";
import member2 from "../../../assets/testimonials/member2.png";
import member3 from "../../../assets/testimonials/member3.png";
import { Categories, Newslatter, Producttags, Testimonials, Singleprod } from '@/components/containers';



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
    {
        image: p11,
        hover_image: p11_hover,
        tag: "hot",
        name: "Floral Print Buttoned",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
        price: "$450",
        discount_price: "$800",
    },
    {
        image: p08,
        hover_image: p08_hover,
        tag: "new",
        name: "Floral Print Buttoned",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
        price: "$450",
        discount_price: "$800",
    },
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

const category_product = [
    {
        image: p13,
        tag: "hot",
        name: "Floral Print Buttoned",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
        price: "$450",
        discount_price: "$800",
    },
    {
        image: p15,
        tag: "new",
        name: "Floral Print Buttoned",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
        price: "$450",
        discount_price: "$800",
    },
    {
        image: p10,
        tag: "sale",
        name: "Floral Print Buttoned",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
        price: "$450",
        discount_price: "$800",
    },
    {
        image: p11,
        tag: "hot",
        name: "Floral Print Buttoned",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
        price: "$450",
        discount_price: "$800",
    },
    {
        image: p08,
        tag: "new",
        name: "Floral Print Buttoned",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
        price: "$450",
        discount_price: "$800",
    },
    // {
    //     image: p07,
    //     tag: "sale",
    //     name: "Floral Print Buttoned",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    //     price: "$450",
    //     discount_price: "$800",
    // },
    // {
    //     image: p13,
    //     tag: "hot",
    //     name: "Floral Print Buttoned",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    //     price: "$450",
    //     discount_price: "$800",
    // },
    // {
    //     image: p15,
    //     tag: "new",
    //     name: "Floral Print Buttoned",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    //     price: "$450",
    //     discount_price: "$800",
    // },
    // {
    //     image: p10,
    //     tag: "sale",
    //     name: "Floral Print Buttoned",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    //     price: "$450",
    //     discount_price: "$800",
    // },
    // {
    //     image: p11,
    //     tag: "hot",
    //     name: "Floral Print Buttoned",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    //     price: "$450",
    //     discount_price: "$800",
    // },
    // {
    //     image: p08,
    //     tag: "new",
    //     name: "Floral Print Buttoned",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    //     price: "$450",
    //     discount_price: "$800",
    // },
    // {
    //     image: p07,
    //     tag: "sale",
    //     name: "Floral Print Buttoned",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo voluptatibus reiciendis, autem, veritatis veniam neque nostrum, alias nam optio rerum aliquid. Perferendis accusantium minus quod ab veritatis adipisci tenetur.",
    //     price: "$450",
    //     discount_price: "$800",
    // },
]

const Allproducts = () => {
    return (
        <div className="container">

            <div className='grid grid-flow-col'>
                <div className="col-span-3">
                    <Categories />

                    <div className="">
                        <div className=""> <Image src={cta_banner1} alt="" className="" /> </div>
                        <div className="vertical-top text-left">
                            <div className=""> Big Sale </div>
                            <div className="hidden-sm hidden-md"> Save up to 49% off </div>
                            <div className="hidden-sm hidden-md"> Lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
                            <div className=""><a href="#" className="">Show Now</a></div>
                        </div>
                    </div>


                    <div className="">
                        <h3 className="">Shop by</h3>
                        <h4 className="">Category</h4>
                        <div className="">
                            <div className="">
                                <div className=""> <a > Camera </a> </div>
                                <div className="">
                                    <ul>
                                        <li><a href="#">gaming</a></li>
                                        <li><a href="#">office</a></li>
                                        <li><a href="#">kids</a></li>
                                        <li><a href="#">for women</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="">
                                <div className=""> <a > Desktops </a> </div>
                                <div className="">
                                    <ul>
                                        <li><a href="#">gaming</a></li>
                                        <li><a href="#">office</a></li>
                                        <li><a href="#">kids</a></li>
                                        <li><a href="#">for women</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="">
                                <div className=""> <a> Pants </a> </div>
                                <div className="">
                                    <ul>
                                        <li><a href="#">gaming</a></li>
                                        <li><a href="#">office</a></li>
                                        <li><a href="#">kids</a></li>
                                        <li><a href="#">for women</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="">
                                <div className=""> <a> Bags </a> </div>
                                <div className="">
                                    <ul>
                                        <li><a href="#">gaming</a></li>
                                        <li><a href="#">office</a></li>
                                        <li><a href="#">kids</a></li>
                                        <li><a href="#">for women</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="">
                                <div className=""> <a> Hats </a> </div>
                                <div className="">
                                    <ul>
                                        <li><a href="#">gaming</a></li>
                                        <li><a href="#">office</a></li>
                                        <li><a href="#">kids</a></li>
                                        <li><a href="#">for women</a></li>
                                    </ul>
                                </div>

                                <div className="">
                                    <div className=""> <a> Accessories </a> </div>
                                    <div className="">
                                        <ul>
                                            <li><a href="#">gaming</a></li>
                                            <li><a href="#">office</a></li>
                                            <li><a href="#">kids</a></li>
                                            <li><a href="#">for women</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <h4 className="">Price Slider</h4>
                            </div>
                            <div className=" m-t-10">
                                <div className=""> <span className="min-max"> <span className="pull-left">$200.00</span> <span className="pull-right">$800.00</span> </span>
                                    <input type="text" />
                                    <input type="text" className="" value="" />
                                </div>
                                <a href="#" className="">Show Now</a> </div>
                        </div>
                        <div className="">
                            <div className="">
                                <h4 className="">Manufactures</h4>
                            </div>
                            <div className="">
                                <ul className="">
                                    <li><a href="#">Forever 18</a></li>
                                    <li><a href="#">Nike</a></li>
                                    <li><a href="#">Dolce & Gabbana</a></li>
                                    <li><a href="#">Alluare</a></li>
                                    <li><a href="#">Chanel</a></li>
                                    <li><a href="#">Other Brand</a></li>
                                </ul>
                                <a href="#" className="">Show Now</a>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <h4 className="">Colors</h4>
                            </div>
                            <div className="">
                                <ul className="">
                                    <li><a href="#">Red</a></li>
                                    <li><a href="#">Blue</a></li>
                                    <li><a href="#">Yellow</a></li>
                                    <li><a href="#">Pink</a></li>
                                    <li><a href="#">Bgridn</a></li>
                                    <li><a href="#">Teal</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <h3 className="">Compare products</h3>
                            <div className="">
                                <div className="">
                                    <p>You have no <span>item(s)</span> to compare</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Producttags />

                    <Testimonials />

                    <Newslatter />

                </div>



                <div className="col-span-9">
                    <ul className="">
                        <li className="active"> <a><FaThLarge className='icon' />Grid</a> </li>
                        <li><a><FaBars className='icon' /></a></li>
                    </ul>
                    <div className="">
                        <div className="">
                            <div className=""> <span className="">Sort by</span>
                                <div className="">
                                    <button > Position <span className=""></span> </button>
                                    <ul className="">
                                        <li role="presentation"><a href="#">position</a></li>
                                        <li role="presentation"><a href="#">Price:Lowest first</a></li>
                                        <li role="presentation"><a href="#">Price:HIghest first</a></li>
                                        <li role="presentation"><a href="#">Product Name:A to Z</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className=""> <span className="">Show</span>
                                <div className="">
                                    <button > 1 <span className=""></span> </button>
                                    <ul className="">
                                        <li role="presentation"><a href="#">1</a></li>
                                        <li role="presentation"><a href="#">2</a></li>
                                        <li role="presentation"><a href="#">3</a></li>
                                        <li role="presentation"><a href="#">4</a></li>
                                        <li role="presentation"><a href="#">5</a></li>
                                        <li role="presentation"><a href="#">6</a></li>
                                        <li role="presentation"><a href="#">7</a></li>
                                        <li role="presentation"><a href="#">8</a></li>
                                        <li role="presentation"><a href="#">9</a></li>
                                        <li role="presentation"><a href="#">10</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <ul className="">
                                <li className="prev"><a href="#"><FaAngleLeft className='icon' /></a></li>
                                <li><a href="#">1</a></li>
                                <li className="active"><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li className="next"><a href="#"><FaAngleRight className='icon' /></a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="flex">


                        {data.map((item, i) => (
                            <Singleprod key={i} item product={item} />
                        ))}
                    </div>

                    <div className="flex">

                        {category_product.map((item, i) => (
                            <Singleprod key={i} item product={item} />
                        ))}


                    </div>

                    <ul className="">
                        <li className="prev"><a href="#"><FaAngleLeft className='icon' /></a></li>
                        <li><a href="#">1</a></li>
                        <li className="active"><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li className="next"><a href="#"><FaAngleRight className='icon' /></a></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Allproducts