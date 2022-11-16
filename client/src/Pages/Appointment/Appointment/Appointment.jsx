import React, { useState } from 'react';
import AppointmentBanner from '../Sections/AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../Sections/AvailableAppointments/AvailableAppointments';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  return (
    <div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}


      />
      <AvailableAppointments selectedDate={selectedDate} />
      

    </div>
  );
};

export default Appointment;