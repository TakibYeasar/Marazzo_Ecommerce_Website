import React from 'react';
import Image from 'next/image';
import member1 from "../../assets/testimonials/member1.png";
import member2 from "../../assets/testimonials/member2.png";
import member3 from "../../assets/testimonials/member3.png";
import member4 from "../../assets/testimonials/member4.png";
import blog_big01 from "../../assets//blog_big_01.jpg";
import blog_big02 from "../../assets//blog_big_02.jpg";
import blog_big03 from "../../assets//blog_big_03.jpg";
import lhs_banner from "../../assets/banners/LHS-banner.jpg";
import { FaFacebook, FaLinkedin, FaPinterest, FaRss, FaTwitter } from "react-icons/fa";

const Blogdetails = () => {
  return (
    <div className="">
      <div className="grid">
        <ul className="list-inline list-unstyled">
          <li><a href="#">Home</a></li>
          <li className='active'>Blog Details</li>
        </ul>
      </div>

      <div className="grid">
        <div className="lg:col-span-8 sm:col-span-9 md:col-span-9">
          <div className="bg-card-bg rounded-md p-4 mt-4 mb-4">
            <Image src={blog_big01} alt="" />
            <h1>Nemo enim ipsam voluptatem quia voluptas sit aspernatur</h1>
            <span className="">John Doe</span>
            <span className="">7 Comments</span>
            <span className="">18/06/2016 11.30AM</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="">
              <span>share post:</span>
              <a href="#"><FaFacebook className='icon' /></a>
              <a href="#"><FaTwitter className='icon' /></a>
              <a href="#"><FaLinkedin className='icon' /></a>
              <a href="#"><FaRss className='icon' /></a>
              <a href="#" className="hidden-xs"><FaPinterest className='icon' /></a>
            </div>
          </div>

          <div className="grid">
            <div className="md:col-span-2">
              <Image src={member3} alt="Responsive image" className="" />
            </div>
            <div className="md:col-span-10">
              <h4>John Doe</h4>
              <div className="">
                <span>Follow me on</span>
                <button type="button">
                  <FaTwitter />
                  <span className=""></span>
                </button>
                <ul className="" role="menu">
                  <li><a href="#"><FaFacebook className='icon' />Facebook</a></li>
                  <li><a href="#"><FaLinkedin className='icon' />Linkedin</a></li>
                  <li><a href="#"><FaPinterest className='icon' />Pinterst</a></li>
                  <li><a href="#"><FaRss className='icon' />RSS</a></li>
                </ul>
              </div>
              <span className="">Web Designer</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
          </div>

          <div className="grid">
            <div className="md:col-span-12">
              <h3 className="">16 comments</h3>
            </div>
            <div className="md:col-span-2 col-sm-2">
              <Image src={member1} alt="Responsive image" className="" />
            </div>
            <div className="md:col-span-10 sm:col-span-10">
              <div className="">
                <h4>Jone doe</h4>
                <span className="">
                  03 Day ago &sol;
                  <a href="#"> Repost</a> &sol;
                  <a href="#"> Reply</a>
                </span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              </div>
              <div className="">
                <div className="grid">
                  <div className="md:col-span-2 col-sm-2">
                    <Image src={member2} alt="Responsive image" className="" />
                  </div>
                  <div className="md:col-span-10 sm:col-span-10 ">
                    <div className="">
                      <h4>Sarah Smith</h4>
                      <span className="">
                        03 Day ago &sol;
                        <a href="#"> Repost</a> &sol;
                        <a href="#"> Reply</a>
                      </span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                  </div>
                  <div className="md:col-span-2 col-sm-2">
                    <Image src={member3} alt="Responsive image" className="" />
                  </div>
                  <div className="md:col-span-10 sm:col-span-10">
                    <div className="">
                      <h4>Stephen</h4>
                      <span className="">
                        03 Day ago &sol;
                        <a href="#"> Repost</a> &sol;
                        <a href="#"> Reply</a>
                      </span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 col-sm-2">
              <Image src={member4} alt="Responsive image" className="" />
            </div>
            <div className="md:col-span-10 sm:col-span-10">
              <div className="">
                <h4>Saraha Smith</h4>
                <span className="">
                  03 Day ago &sol;
                  <a href="#"> Repost</a> &sol;
                  <a href="#"> Reply</a>
                </span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              </div>
            </div>
            <div className="md:col-span-2 col-sm-2">
              <Image src={member1} alt="Responsive image" className="" />
            </div>
            <div className="md:col-span-10 sm:col-span-10">
              <div className="">
                <h4>Mark Doe</h4>
                <span className="">
                  03 Day ago &sol;
                  <a href="#"> Repost</a> &sol;
                  <a href="#"> Reply</a>
                </span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              </div>
            </div>
            <div className="md:col-span-12"><a className="" href="#">Load more</a></div>
          </div>
        </div>
        <div className="">
          <div className="grid">
            <div className="md:col-span-12">
              <h4>Leave A Comment</h4>
            </div>
            <div className="md:col-span-4">
              <form className="" role="form">
                <label className="info-title" >Your Name <span>*</span></label>
                <input type="email" className="" placeholder="" />
              </form>
            </div>
            <div className="md:col-span-4">
              <form className="" role="form">
                <label className="info-title" >Email Address <span>*</span></label>
                <input type="email" className="" placeholder="" />
              </form>
            </div>
            <div className="md:col-span-4">
              <form className="" role="form">
                <label className="info-title" >Title <span>*</span></label>
                <input type="email" className="" placeholder="" />
              </form>
            </div>
            <div className="md:col-span-12">
              <form className="" role="form">
                <label className="info-title" >Your Comments <span>*</span></label>
                <textarea className="" ></textarea>
              </form>
            </div>
            <div className="md:col-span-12 outer-bottom-small m-t-20">
              <button type="submit" className="">Submit Comment</button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3 md:col-span-6 sm:col-span-12 ">
        <div className="">
          <form>
            <div className="control-group">
              <input placeholder="Type to search" className="search-field" />
              <a href="#" className="search-button"></a>
            </div>
          </form>

          <div className="">
            <Image src={lhs_banner} alt="Image" />
          </div>
          <div className="">
            <h3 className="">Category</h3>
            <div className="">
              <div className="">
                <div className="">
                  <a className="">
                    Camera
                  </a>
                </div>
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
                <div className="">
                  <a className="">
                    Desktops
                  </a>
                </div>
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
                <div className="">
                  <a className="">
                    Pants
                  </a>
                </div>
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
                <div className="">
                  <a className="">
                    Bags
                  </a>
                </div>
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
                <div className="">
                  <a className="">
                    Hats
                  </a>
                </div>
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
                <div className="">
                  <a className="">
                    Accessories
                  </a>
                </div>
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

            </div>
          </div>
        </div>

        <div className="">
          <h3 className="">tab widget</h3>
          <ul className="">
            <li className="active"><a >popular post</a></li>
            <li><a >recent post</a></li>
          </ul>
          <div className="">
            <div className="" >
              <div className="" >
                <Image src={blog_big01} height={120} width={300} className="" alt="" />
                <h4><a href="blog-details.html">Simple Blog Post</a></h4>
                <span className="">6 Comments</span>
                <span className="date-time">12/06/16</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

              </div>
              <div className="" >
                <Image src={blog_big02} height={120} width={300} className="" alt="" />
                <h4><a href="blog-details.html">Simple Blog Post</a></h4>
                <span className="">6 Comments</span>
                <span className="date-time">23/06/16</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

              </div>
            </div>

            <div className="" >
              <div className="" >
                <Image src={blog_big03} className="" alt="" />
                <h4><a href="blog-details.html">Simple Blog Post</a></h4>
                <span className="">6 Comments</span>
                <span className="date-time">5/06/16</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

              </div>
              <div className="">
                <Image src={blog_big01} className="" alt="" />
                <h4><a href="blog-details.html">Simple Blog Post</a></h4>
                <span className="">6 Comments</span>
                <span className="date-time">10/07/16</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="">Product tags</h3>
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
  )
}

export default Blogdetails