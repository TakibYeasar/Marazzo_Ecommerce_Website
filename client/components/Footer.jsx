import React from 'react';
import Image from 'next/image';
import {
  FaMapMarker,
  FaMobile,
  FaEnvelope,
  FaTwitter,
  FaGooglePlus,
  FaRss,
  FaPinterest,
  FaLinkedin,
  FaYoutube,
  FaFacebook
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-nav-color">
      <div className="container">
        <div className="grid grid-cols-4 pt-20 pb-20">
          <div>
            <ul className="list-none">
              <li className="flex items-center mt-2 mb-2">
                <FaMapMarker className="bg-secondary-color rounded-full p-2 text-4xl text-font-color" />
                <p className='text-base text-font-light ml-2 no-underline'>ThemesGround, 789 Main rd, Anytown, CA 12345 USA</p>
              </li>
              <li className="flex items-center mt-2 mb-2">
                <FaMobile className="bg-secondary-color rounded-full p-2 text-4xl text-font-color" />
                <p className='text-base text-font-light ml-2 no-underline'> + (888) 123-4567 / + (888) 456-7890</p>
              </li>
              <li className="flex items-center mt-2 mb-2">
                <FaEnvelope className="bg-secondary-color rounded-full p-2 text-4xl text-font-color" />
                <span><a className='text-base text-font-light ml-2 no-underline' href="mailto:marazzo@themesground.com">marazzo@themesground.com</a></span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="main-title">Customer Service</h4>
            <ul className="text-bg-grey list-disc list-inside">
              <li><a className='ml-2 mt-2 mb-2 text-base font-medium no-underline' href="#" title="Contact us">My Account</a></li>
              <li><a className='ml-2 mt-2 mb-2 text-base font-medium no-underline' href="#" title="About us">Order History</a></li>
              <li><a className='ml-2 mt-2 mb-2 text-base font-medium no-underline' href="#" title="FAQ">FAQ</a></li>
              <li><a className='ml-2 mt-2 mb-2 text-base font-medium no-underline' href="#" title="Popular Searches">Specials</a></li>
              <li><a className='ml-2 mt-2 mb-2 text-base font-medium no-underline' href="#" title="Where is my order?">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="main-title">Corporation</h4>
            <ul className="text-bg-grey list-disc list-inside">
              <li><a className='ml-2 mt-2 mb-2 text-base font-medium no-underline' title="Information" href="#">About us</a></li>
              <li><a className='ml-2 mt-2 mb-2 text-base font-medium no-underline' title="Information" href="#">Customer Service</a></li>
              <li><a className='ml-2 mt-2 mb-2 text-base font-medium no-underline' title="Addresses" href="#">Company</a></li>
              <li><a className='ml-2 mt-2 mb-2 text-base font-medium no-underline' title="Addresses" href="#">Investor Relations</a></li>
              <li><a className='ml-2 mt-2 mb-2 text-base font-medium no-underline' title="Orders History" href="#">Advanced Search</a></li>
            </ul>
          </div>

          <div>
            <h4 className="main-title">Why Choose Us</h4>
            <ul className="text-bg-grey list-disc list-inside">
              <li><a className='ml-2 mt-2 mb-2 text-base font-medium no-underline' href="#" title="About us">Shopping Guide</a></li>
              <li><a className='ml-2 mt-2 mb-2 text-base font-medium no-underline' href="#" title="Blog">Blog</a></li>
              <li><a className='ml-2 mt-2 mb-2 text-base font-medium no-underline' href="#" title="Company">Company</a></li>
              <li><a className='ml-2 mt-2 mb-2 text-base font-medium no-underline' href="#" title="Investor Relations">Investor Relations</a></li>
              <li><a className='ml-2 mt-2 mb-2 text-base font-medium no-underline' href="/contact" title="Suppliers">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="grid grid-flow-col pt-20 pb-20">
          <div className="lg:col-span-12 col-sm-4 no-padding social">
            <ul className="flex list-none">
              <li><FaFacebook className="text-4xl font-medium text-font-light bg-blue-900 p-2 ml-2 mr-2 rounded-md" /></li>
              <li><FaTwitter className="text-4xl font-medium text-font-light bg-blue-500 p-2 ml-2 mr-2 rounded-md" /></li>
              <li><FaGooglePlus className="text-4xl font-medium text-font-light bg-red-600 p-2 ml-2 mr-2 rounded-md" /></li>
              <li><FaRss className="text-4xl font-medium text-font-light bg-amber-500 p-2 ml-2 mr-2 rounded-md" /></li>
              <li><FaPinterest className="text-4xl font-medium text-font-light bg-red-700 p-2 ml-2 mr-2 rounded-md" /></li>
              <li><FaLinkedin className="text-4xl font-medium text-font-light bg-sky-700 p-2 ml-2 mr-2 rounded-md" /></li>
              <li><FaYoutube className="text-4xl font-medium text-font-light bg-red-500 p-2 ml-2 mr-2 rounded-md" /></li>
            </ul>
          </div>

          <div className="lg:col-span-12 col-sm-4 no-padding">
            <a className='no-underline text-base text-primary-color' target="_blank" rel="noopener noreferrer" href="https://www.templateshub.net">Templates Hub</a>
          </div>

          <div className="lg:col-span-12 col-sm-4 no-padding">
            <ul className='flex'>
              <li><Image className='ml-2 mr-2' src="/assets/payments/1.png" alt='Payment Method 1' height={50} width={50} /></li>
              <li><Image className='ml-2 mr-2' src="/assets/payments/2.png" alt='Payment Method 2' height={50} width={50} /></li>
              <li><Image className='ml-2 mr-2' src="/assets/payments/3.png" alt='Payment Method 3' height={50} width={50} /></li>
              <li><Image className='ml-2 mr-2' src="/assets/payments/4.png" alt='Payment Method 4' height={50} width={50} /></li>
              <li><Image className='ml-2 mr-2' src="/assets/payments/5.png" alt='Payment Method 5' height={50} width={50} /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
