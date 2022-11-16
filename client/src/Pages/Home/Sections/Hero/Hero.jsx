import React from 'react';
import bgImg from '../../../../assets/images/bg.png';
import chair from '../../../../assets/images/chair.png'
import PrimiaryButton from '../../../../components/PrimiaryButton/PrimiaryButton';
import InfoCards from '../InfoCards/IinfoCards';

const Hero = () => {
  return (
    <div className='mt-5' style={{
      background: `url(${bgImg})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className='hero-content flex-col lg:flex-row-reverse gap-x-10 lg:mx-10 items-center py-10 lg:py-40 row-reserved'>
        <div className='flex justify-end'>
          <img className='w-full' src={chair} alt="" />
        </div>
        <div>
          <h2 className='text-5xl text-accent font-bold'>
            Your New Smile Starts Here
          </h2>
          <p className='text-xl mt-5 text-accent'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <div className='mt-5'>
            <PrimiaryButton>Get Started</PrimiaryButton>
          </div>
        </div>
      </div>
      <div className='lg:mt-32'>
        <InfoCards />
      </div>
    </div>
  );
};

export default Hero;