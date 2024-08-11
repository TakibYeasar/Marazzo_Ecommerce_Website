import React from 'react';
import Image from 'next/image';
import logo from "../../assets/logo.png";
import { FaSearch, FaShoppingCart, FaTrash } from "react-icons/fa";
import p4 from "../../assets/products/p4.jpg";

const Header = () => {
  return (
    <div className="bg-primary-color">

      <div className="container">
        <div className="flex pt-4 pr-2 justify-between">
          <ul className="list-unstyled flex">
            <li> <a className="nav-item" ><span className="value">USD </span><b ></b></a>
              <ul className='bg-bg-color p-2 m-2 hidden'>
                <li><a className="nav-item text-font-color" href="#">USD</a></li>
                <li><a className="nav-item text-font-color" href="#">INR</a></li>
                <li><a className="nav-item text-font-color" href="#">GBP</a></li>
              </ul>
            </li>
            <li > <a className="nav-item" ><span className="value">English </span><b ></b></a>
              <ul className='bg-bg-color p-2 m-2 hidden'>
                <li><a className="nav-item text-font-color" href="#">English</a></li>
                <li><a className="nav-item text-font-color" href="#">French</a></li>
                <li><a className="nav-item text-font-color" href="#">German</a></li>
              </ul>
            </li>
          </ul>

          <ul className="list-unstyled flex">
            <li><a className='nav-item' href="#myaccount"><span>My Account</span></a></li>
            <li><a className='nav-item' href="/wishlist"><span>Wishlist</span></a></li>
            <li><a className='nav-item' href="/cart"><span>My Cart</span></a></li>
            <li><a className='nav-item' href="/checkout"><span>Checkout</span></a></li>
            <li><a className='nav-item' href="/authenticate"><span>Login</span></a></li>
            <li><a className='nav-item' href="/registrations"><span>Registrations</span></a></li>
          </ul>
        </div>


        <div className="grid grid-flow-col pt-8 pb-8 items-center justify-between">
          <div className="lg:col-span-3 sm:col-span-3">
            <div className="logo"> <a href="/"> <Image src={logo} alt='' /> </a> </div>
          </div>

          <form className="lg:col-span-6 md:col-span-6 bg-bg-color p-4 rounded-full flex">
            <div className="grid grid-cols-3 justify-around">
              <ul className="list-unstyled bg-bg-grey">
                <li > <a className="no-underline text-base text-font-color ml-2 mr-2" href="/category">Categories <b ></b></a>
                  <ul className="hidden" >
                    <li>Computer</li>
                    <li className="presentation"><a className="nav-item" tabIndex={-1} href="/category">- Clothing</a></li>
                    <li className="presentation"><a className="nav-item" tabIndex={-1} href="/category">- Electronics</a></li>
                    <li className="presentation"><a className="nav-item" tabIndex={-1} href="/category">- Shoes</a></li>
                    <li className="presentation"><a className="nav-item" tabIndex={-1} href="/category">- Watches</a></li>
                  </ul>
                </li>
              </ul>

              <input className="border-none" placeholder="Search here..." />

              <a className="ml-auto text-base bg-secondary-color" href="#" ><FaSearch /></a>
            </div>
          </form>

          <div className="lg:col-span-3 md:col-span-3">
            <a href="#" className="no-underline text-base text-font-light flex items-center" >
              <div className="items-center">
                <span className="text-xl bg-secondary-color h-10 w-10 rounded-full p-2 text-font-color">2 </span>
                <FaShoppingCart className="text-5xl" />
              </div>
              <div className="grid ml-4">
                <span className="text-base">Shopping Cart</span>
                <span className="text-2xl font-semibold">$4580</span>
              </div>
            </a>
            {/* <ul >
              <li>
                <div>
                  <div className="grid">
                    <div className="lg:col-span-4">
                      <div> <a href="detail.html"><Image src={p4} alt='' /></a> </div>
                    </div>
                    <div className="lg:col-span-7">
                      <h3><a href="index8a95.html?page-detail">Simple Product</a></h3>
                      <div>$600.00</div>
                    </div>
                    <div className="lg:col-span-1"> <a href="#"><FaTrash /></a> </div>
                  </div>
                </div>
                <div></div>
                <hr />
                <div>
                  <div> <span>Sub Total :</span><span className=''>$600.00</span> </div>
                  <div></div>
                  <a href="/checkout" className="btn btn-upper btn-primary btn-block m-t-20">Checkout</a> </div>

              </li>
            </ul> */}
          </div>
        </div>

        <div className='pb-8'>
          <ul className="container flex list-unstyled justify-between">
            <li><a href="/" className="nav-link">Home</a> </li>
            <li><a href="/" className="nav-link">Clothing</a></li>
            <li><a href="/" className="nav-link">Electronics <span>hot</span> </a></li>
            <li><a href="/" className="nav-link">Health & Beauty <span>new</span> </a> </li>
            <li><a href="/" className="nav-link">Watches</a> </li>
            <li><a href="/" className="nav-link">Jewellery</a> </li>
            <li><a href="/" className="nav-link">Shoes</a> </li>
            <li><a href="/" className="nav-link">Kids & Girls</a> </li>
            <li><a href="/" className="nav-link" >Pages</a>
              <ul className="lg:col-span-12 bg-card-bg rounded-md p-4 hidden">
                <li><a href="/" className="nav-item text-font-color mb-4">Home</a></li>
                <li><a href="/category" className="nav-item text-font-color mb-4">Category</a></li>
                <li><a href="/detail" className="nav-item text-font-color mb-4">Detail</a></li>
                <li><a href="/shopping-cart" className="nav-item text-font-color mb-4">Shopping Cart Summary</a></li>
                <li><a href="/checkout" className="nav-item text-font-color mb-4">Checkout</a></li>
                <li><a href="/blog" className="nav-item text-font-color mb-4">Blog</a></li>
                <li><a href="/blog-details" className="nav-item text-font-color mb-4">Blog Detail</a></li>
                <li><a href="/contact" className="nav-item text-font-color mb-4">Contact</a></li>
                <li><a href="/sign-in" className="nav-item text-font-color mb-4">Sign In</a></li>
                <li><a href="/my-wishlist" className="nav-item text-font-color mb-4">Wishlist</a></li>
                <li><a href="/terms-conditions" className="nav-item text-font-color mb-4">Terms and Condition</a></li>
                <li><a href="/track-orders" className="nav-item text-font-color mb-4">Track Orders</a></li>
                <li><a href="/product-comparison" className="nav-item text-font-color mb-4">Product-Comparison</a></li>
                <li><a href="/faq" className="nav-item text-font-color mb-4">FAQ</a></li>
              </ul>
            </li>
            <li> <a href="#" className="nav-link text-secondary-color">Get 30% off on selected items</a> </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Header