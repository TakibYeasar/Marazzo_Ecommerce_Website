import React from 'react';
import { FaEnvelope, FaMapMarker, FaMobile } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="container">
            <ul className="flex list-unstyled">
                <li><a href="" className='text-base mt-4 mr-2 font-normal text-font-color'>Home</a></li>
                <li><a href="" className='text-base mt-4 ml-2 font-normal text-primary-color'>Contact</a></li>
            </ul>

            <div className="bg-card-bg rounded-md p-8 mt-4 mb-4">
                <div className="grid">
                    <iframe className='w-full h-[40vh]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0080692193424!2d80.29172299999996!3d13.098675000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f446a1c3187%3A0x298011b0b0d14d47!2sTransvelo!5e0!3m2!1sen!2sin!4v1412844527190"></iframe>
                    <div className="mt-8 mb-8 mr-4 ml-4">
                        <div className="grid grid-flow-col">
                            <div className="col-span-8">
                                <h4 className='main-title'>Contact Form</h4>
                                <form className="" role="form">
                                    <div className="flex">
                                        <div className="grid mr-8">
                                            <label className="">Your Name <span>*</span></label>
                                            <input type="text" className="p-4 mt-4 mb-4" />
                                        </div>
                                        <div className="grid mr-8">
                                            <label className="">Email Address <span>*</span></label>
                                            <input type="email" className="p-4 mt-4 mb-4" />
                                        </div>
                                        <div className="grid mr-8">
                                            <label className="">Title<span>*</span></label>
                                            <input type="text" className="p-4 mt-4 mb-4" />
                                        </div>
                                    </div>
                                    <div className="grid mr-8">
                                        <label className="">Your Comments<span>*</span></label>
                                        <input type="text" className="p-4 mt-4 mb-4" />
                                    </div>
                                    <button type="submit" className="text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light">Send Message</button>
                                </form>
                            </div>
                            <div className="col-span-4">
                                <h4 className='main-title'>Information</h4>
                                <div className="flex mt-2 mb-2">
                                    <span className="text-base mr-4 items-center"><FaMapMarker className='text-xl p-1 bg-primary-color text-font-light rounded-full' /></span>
                                    <span className="">ThemesGround, 789 Main rd, Anytown, CA 12345 USA</span>
                                </div>
                                <div className="flex mt-2 mb-2">
                                    <span className="text-base mr-4 items-center"><FaMobile className='text-xl p-1 bg-primary-color text-font-light rounded-full' /></span>
                                    <span className="">+(888) 123-4567<br />+(888) 456-7890</span>
                                </div>
                                <div className="flex mt-2 mb-2">
                                    <span className="text-base mr-4 items-center"><FaEnvelope className='text-xl p-1 bg-primary-color text-font-light rounded-full' /></span>
                                    <span className=""><a href="#">marazoo@themesground.com</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact