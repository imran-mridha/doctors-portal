import React from 'react';
import treatment from '../../../../assets/images/treatment.png'
import PrimiaryButton from '../../../../components/PrimiaryButton/PrimiaryButton';

const ServiceInfo = () => {
  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <img className='w-96 rounded-lg' src={treatment} alt="" />
        <div className='lg:w-1/3'>
          <h1 className="text-3xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
          <div>
            <PrimiaryButton>Get Started</PrimiaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;