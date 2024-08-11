import React from 'react';
import { FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa";
import Image from 'next/image';
import blog_big01 from "../../../assets/blog-post/blog_big_01.jpg";
import blog_big02 from "../../../assets/blog-post/blog_big_02.jpg";
import blog_big03 from "../../../assets/blog-post/blog_big_03.jpg";
import lhs_banner from "../../../assets/banners/LHS-banner.jpg";
import brand1 from "../../../assets/brands/brand1.png";
import brand2 from "../../../assets/brands/brand2.png";
import brand3 from "../../../assets/brands/brand3.png";
import brand4 from "../../../assets/brands/brand4.png";
import brand5 from "../../../assets/brands/brand5.png";

const Allblogs = () => {
  return (
    <div className="container">
      <ul className="list-inline list-unstyled flex">
        <li><a href="#">Home</a></li>
        <li className='active'>Blog</li>
      </ul>

        <div className="grid">
          <div className="lg:col-span-8 sm:col-span-9">
            <div className="bg-card-bg p-4 rounded-full mt-4 mb-4  wow fadeInUp">
              <a className='no-underline text-lg font-medium text-font-color' href="blog-details.html"><Image src={blog_big01} className="" alt="" /></a>
              <h1 className='no-underline text-lg font-medium text-font-color'><a href="blog-details.html">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</a></h1>
              <span className="ml-4 mr-1 text-base">John Doe</span>
              <span className="ml-4 mr-1 text-base">6 Comments</span>
              <span className="ml-4 mr-1 text-base">14/06/2016 10.00AM</span>
              <p className='text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...</p>
            </div>
            <div className="bg-card-bg p-4 rounded-full mt-4 mb-4">
              <a className='no-underline text-lg font-medium text-font-color' href="blog-details.html"><Image src={blog_big02} className="" alt="" /></a>
              <h1 className='no-underline text-lg font-medium text-font-color'><a href="blog-details.html">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</a></h1>
              <span className="ml-4 mr-1 text-base">Sarah Smith</span>
              <span className="ml-4 mr-1 text-base">6 Comments</span>
              <span className="ml-4 mr-1 text-base">20/06/2016 11.00AM</span>
              <p className='text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...</p>
              <a href="#" className="">read more</a>
            </div>
            <div className="bg-card-bg p-4 rounded-full mt-4 mb-4">
              <a className='no-underline text-lg font-medium text-font-color' href="blog-details.html"><Image src={blog_big03} className="" alt="" /></a>
              <h1 className='no-underline text-lg font-medium text-font-color'><a href="blog-details.html">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</a></h1>
              <span className="ml-4 mr-1 text-base">Mark Doe</span>
              <span className="ml-4 mr-1 text-base">6 Comments</span>
              <span className="ml-4 mr-1 text-base">14/06/2014 11.00AM</span>
              <p className='text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...</p>
              <a href="#" className="">read more</a>
            </div>

            <div className="" >
              <ul className="list-inline list-unstyled flex">
                <li className="prev"><a href="#"><FaAngleLeft /></a></li>
                <li><a href="#">1</a></li>
                <li className="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li className="next"><a href="#"><FaAngleRight /></a></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 sm:col-span-3">
            <div className="mt-8 mb-8">
              <form>
                <input placeholder="Type to search" className="p-2 text-base font-medium mw-[20rem] rounded-md" />
                <FaSearch className='text-base font-medium transform translate-x-[-2rem]' />
              </form>
            </div>

            <div className="">
              <Image src={lhs_banner} alt="Image" className='mb-8 rounded-md' />
            </div>
            <div className="bg-card-bg p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-medium">Category</h3>
              <div className="">
                <div className="">
                  <a className="no-underline text-base font-medium text-font-color">
                    Camera
                  </a>
                  <div className="" id="" >
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

                <div className="">
                  <a className="no-underline text-base font-medium text-font-color">
                    Desktops
                  </a>
                  <div className="" >
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

                <div className="">
                  <a className="no-underline text-base font-medium text-font-color">
                    Pants
                  </a>
                  <div className="" >
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

                <div className="">
                  <a className="no-underline text-base font-medium text-font-color">
                    Bags
                  </a>
                  <div className="">
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

                <div className="">
                  <a className="no-underline text-base font-medium text-font-color">
                    Hats
                  </a>
                  <div className="">
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

                <div className="">
                  <a className="no-underline text-base font-medium text-font-color">
                    Accessories
                  </a>

                  <div className=""  >
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
            </div>

            <div className="">
              <h3 className="">Tab Widget</h3>
              <ul className="">
                <li className="active"><a >popular post</a></li>
                <li><a >recent post</a></li>
              </ul>
              <div className="" >
                <div className="">
                  <div className="bg-card-bg p-4 rounded-full mt-4 mb-4 inner-bottom-30 " >
                    <Image src={blog_big01} height={120} width={300} className="" alt="" />
                    <h4><a href="blog-details.html">Simple Blog Post</a></h4>
                    <span className="">6 Comments</span>
                    <span className="">12/06/16</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                  </div>
                  <div className="bg-card-bg p-4 rounded-full mt-4 mb-4" >
                    <Image src={blog_big02} height={120} width={300} className="" alt="" />
                    <h4><a href="blog-details.html">Simple Blog Post</a></h4>
                    <span className="">6 Comments</span>
                    <span className="">23/06/16</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                  </div>
                </div>

                <div className="tab-pane m-t-20" id="recent">
                  <div className="bg-card-bg p-4 rounded-full mt-4 mb-4 inner-bottom-30" >
                    <Image src={blog_big03} className="" alt="" />
                    <h4><a href="blog-details.html">Simple Blog Post</a></h4>
                    <span className="">6 Comments</span>
                    <span className="">5/06/16</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                  </div>
                  <div className="bg-card-bg p-4 rounded-full mt-4 mb-4">
                    <Image src={blog_big01} className="" alt="" />
                    <h4><a href="blog-details.html">Simple Blog Post</a></h4>
                    <span className="">6 Comments</span>
                    <span className="">10/07/16</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="">Product Tags</h3>
              <div className="">
                <div className="">
                  <a className="item" title="Phone" href="/category">Phone</a>
                  <a className="item active" title="Vest" href="/category">Vest</a>
                  <a className="item" title="Smartphone" href="/category">Smartphone</a>
                  <a className="item" title="Furniture" href="/category">Furniture</a>
                  <a className="item" title="T-shirt" href="/category">T-shirt</a>
                  <a className="item" title="Sweatpants" href="/category">Sweatpants</a>
                  <a className="item" title="Sneaker" href="/category">Sneaker</a>
                  <a className="item" title="Toys" href="/category">Toys</a>
                  <a className="item" title="Rose" href="/category">Rose</a>
                </div>
              </div>
            </div>
          </div>
      </div>
      
      <div className="">

        <div className="">
          <div className="">
            <div className="item m-t-15">
              <a href="#" className="image">
                <Image src={brand1} alt="" />
              </a>
            </div>

            <div className="item m-t-10">
              <a href="#" className="image">
                <Image src={brand2} alt="" />
              </a>
            </div>

            <div className="item">
              <a href="#" className="image">
                <Image src={brand3} alt="" />
              </a>
            </div>

            <div className="item">
              <a href="#" className="image">
                <Image src={brand4} alt="" />
              </a>
            </div>

            <div className="item">
              <a href="#" className="image">
                <Image src={brand5} alt="" />
              </a>
            </div>

            <div className="item">
              <a href="#" className="image">
                <Image src={brand1} alt="" />
              </a>
            </div>

            <div className="item m-t-10">
              <a href="#" className="image">
                <Image src={brand2} alt="" />
              </a>
            </div>

            <div className="item">
              <a href="#" className="image">
                <Image src={brand3} alt="" />
              </a>
            </div>

            <div className="item">
              <a href="#" className="image">
                <Image src={brand4} alt="" />
              </a>
            </div>

            <div className="item">
              <a href="#" className="image">
                <Image src={brand5} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Allblogs