import React from 'react';

const Newslatter = () => {
  return (
    <div className="bg-card-bg p-8 m-4 rounded-md">
      <h3 className="main-title">Newsletters</h3>
      <div className="">
        <p>Sign Up for Our Newsletter!</p>
        <form>
          <div className="grid">
            <label className="text-base font-normal text-bg-grey mt-4" >Email address</label>
            <input type="email" className="text-base p-4 mt-4 mb-4" placeholder="Subscribe to our newsletter" />
          </div>
          <button type='button' className="text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Newslatter