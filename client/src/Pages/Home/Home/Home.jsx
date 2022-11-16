import React from 'react';
import Contact from '../Sections/Contact/Contact';
import Hero from '../Sections/Hero/Hero';
import MakeAppoinment from '../Sections/MakeAppoinment/MakeAppoinment';
import Services from '../Sections/Services/Services';
import Testimonials from '../Sections/Testimonials/Testimonials';

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Hero />
      <Services />
      <MakeAppoinment />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;