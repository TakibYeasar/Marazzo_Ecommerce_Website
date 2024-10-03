import React from 'react';

const Trackorder = () => {
    return (
        <div className="container">
            <ul className="flex list-unstyled">
                <li><a href="" className='text-base mt-4 mr-2 font-normal text-font-color'>Home</a></li>
                <li><a href="" className='text-base mt-4 ml-2 font-normal text-primary-color'>Track your order</a></li>
            </ul>

            <div className="bg-card-bg rounded-md p-8 mt-4 mb-4">
                <div className="grid">
                    <h2 className="main-title">Track your Order</h2>
                    <span className="text-base font-normal mt-4 mb-4">Please enter your Order ID in the box below and press Enter. This was given to you on your receipt and in the confirmation email you should have received. </span>
                    <form className="" role="form">
                        <div className="grid mt-4 mb-4">
                            <label className="text-base font-medium text-font-color" >Order ID</label>
                            <input type="text" className="w-full mt-4 mb-4 p-4" />
                        </div>
                        <div className="grid mt-4 mb-4">
                            <label className="text-base font-medium text-font-color" >Billing Email</label>
                            <input type="email" className="w-full mt-4 mb-4 p-4" />
                        </div>
                        <button type="submit" className="text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light">Track</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Trackorder