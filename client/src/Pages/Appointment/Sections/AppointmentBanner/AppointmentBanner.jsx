import React from 'react';
import bgImg from '../../../../assets/images/bg.png';
import chair from '../../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
  
  return (
    <div className='mt-5 container mx-auto' style={{
      background: `url(${bgImg})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className='hero-content w-full container mx-auto flex-col lg:flex-row-reverse justify-between'>
        <div className='w-11/12 mx-auto lg:w-1/2'>
          <img className='w-10/12 mx-auto lg:mx-0' src={chair} alt="" />
        </div>
        <div className='w-1/2 flex justify-center'>
          <DayPicker
            mode="single"
            selected={selectedDate}
            // onSelect={setSelectedDate}
            onSelect={(data)=> {
              if(data){
                setSelectedDate(data)
              }
            }}
          />
          
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;