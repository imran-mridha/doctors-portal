import React from 'react';
import appoinment from '../../../../assets/images/appoinment.png';
import doctor from '../../../../assets/images/doctor.png';
import PrimiaryButton from '../../../../components/PrimiaryButton/PrimiaryButton';

const MakeAppoinment = () => {
  return (
    <section className='mt-32 mb-20'
      style={{
        background: `url(${appoinment})`
      }}
    >
      <div className="hero">
        <div className="hero-content py-0 px-10 flex-col lg:flex-row">
          <img src={doctor} alt="" className="-mt-32 hidden md:block lg:w-1/2 rounded-lg" />
          <div className=''>
            <h4 className='text-lg text-primary font-bold'>Appointment</h4>
            <h1 className=" text-white text-4xl font-bold">Make an appointment Today</h1>
            <p className="text-white py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <PrimiaryButton>Appointment</PrimiaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;