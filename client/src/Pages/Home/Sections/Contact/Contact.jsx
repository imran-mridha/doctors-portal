import React from 'react';
import contact from '../../../../assets/images/appoinment.png'
import PrimiaryButton from '../../../../components/PrimiaryButton/PrimiaryButton';

const Contact = () => {
  return (
    <div className="hero my-20" style={{ background: `url(${contact})` }}>
      <div className="hero-content text-center my-10">

        <form className="flex flex-col py-6 space-y-4 md:py-0 md:px-6 ">
        <div className='mb-5'>
          <h4 className="text-xl text-primary font-bold">Contact Us</h4>
          <h2 className="text-4xl text-white">Stay connected with us</h2>
        </div>
          <label className="">
            <input type="email" placeholder="Email Address" className="w-96 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-primary outline-primary bg-white py-1.5 px-2" />
          </label>
          <label className="block">
            <input type="text" placeholder="Subject" className="w-96 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-primary outline-primary bg-white py-1.5 px-2" />
          </label>
          <label className="block">
            <textarea rows="3" className="w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-primary outline-primary bg-white py-1.5 px-2"></textarea>
          </label>
          <PrimiaryButton>Submit</PrimiaryButton>
        </form>
      </div>
    </div>
  );
};

export default Contact;