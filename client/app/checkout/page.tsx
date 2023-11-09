import React from 'react';

const data = [
    {
        id: "02",
        title: "Billing Information",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: "03",
        title: "Shipping Information",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: "04",
        title: "Shipping Method",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: "05",
        title: "Payment Information",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: "06",
        title: "Order Review",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
]

const Checkout = () => {
    return (
        <div className="container">
            <ul className="flex list-unstyled">
                <li><a href="" className='text-base mt-4 mr-2 font-normal text-font-color'>Home</a></li>
                <li><a href="" className='text-base mt-4 ml-2 font-normal text-primary-color'>Checkout</a></li>
            </ul>

            <div className="grid grid-flow-col">
                <div className="col-span-9">
                    <div className="bg-card-bg rounded-md p-8 ml-4 mr-4">
                        <div className="grid">
                            <h4 className="bg-bg-grey rounded-md p-4 mt-2 mb-2">
                                <a className='no-underline text-xl font-medium text-font-color'>
                                    <span className='bg-primary-color p-4 mr-4 rounded-md text-font-light'>1</span>Checkout Method
                                </a>
                            </h4>

                            <div className="grid grid-flow-col">
                                <div className="col-span-6">
                                    <h4 className="main-title">Guest or Register Login</h4>
                                    <p className="">Register with us for future convenience:</p>
                                    <form className="" role="form">
                                        <div className="">
                                            <input id="guest" type="radio" name="text" value="guest" />
                                            <label className="" htmlFor="guest">Checkout as Guest</label>
                                            <br />
                                            <input id="register" type="radio" name="text" value="register" />
                                            <label className="">Register</label>
                                        </div>
                                    </form>

                                    <h4 className="main-title">Register and save time</h4>
                                    <p className=" ">Register with us for future convenience:</p>

                                    <ul className="">
                                        <li className="">- Fast and easy check out</li>
                                        <li>- Easy access to your order history and status</li>
                                    </ul>

                                    <button type="submit" className="text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light">Continue</button>
                                </div>
                                <div className="col-span-6">
                                    <h4 className="main-title">Already registered?</h4>
                                    <p className="">Please log in below:</p>
                                    <form className="grid" role="form">
                                        <div className="grid mr-8">
                                            <label className="">Email Address <span>*</span></label>
                                            <input type="email" className="p-4 mt-4 mb-4" />
                                        </div>
                                        <div className="grid mr-8">
                                            <label className="">Password <span>*</span></label>
                                            <input type="password" className="p-4 mt-4 mb-4" />
                                        </div>
                                        <a href="#" className="">Forgot your Password?</a>
                                        <button type="submit" className="text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light">Login</button>
                                    </form>
                                </div>

                            </div>
                        </div>


                        {data?.map((item, i) => (
                            <div className="grid">
                                <h4 className="bg-bg-grey rounded-md p-4 mt-2 mb-2">
                                    <a className="no-underline text-xl font-medium text-font-color">
                                        <span className='bg-primary-color p-4 mr-4 rounded-md text-font-light'>{item?.id}</span>{item?.title}
                                    </a>
                                </h4>

                                <div id="collapseOne" className="">
                                    <div className="ml-20"><p className='text-base font-normal'>{item?.desc}</p></div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>


                <div className="col-lg-3">
                    <div className="bg-card-bg rounded-md p-4 ml-4 mr-4">
                        <h4 className="main-title">Your Checkout Progress</h4>
                        <ul className="grid">
                            <li><a className='no-underline text-base text-primary-color mt-4 mb-4' href="#">Billing Address</a></li>
                            <li><a className='no-underline text-base text-primary-color mt-4 mb-4' href="#">Shipping Address</a></li>
                            <li><a className='no-underline text-base text-primary-color mt-4 mb-4' href="#">Shipping Method</a></li>
                            <li><a className='no-underline text-base text-primary-color mt-4 mb-4' href="#">Payment Method</a></li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Checkout