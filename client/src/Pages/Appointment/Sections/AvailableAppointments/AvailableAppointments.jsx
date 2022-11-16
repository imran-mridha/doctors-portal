import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "../../AppointmentOption/AppointmentOption";
import { useQuery } from "@tanstack/react-query";
import BookingModal from "../../BookingModal/BookingModal";
import Loader from '../../../../Shared/Loader/Loader';

const AvailableAppointments = ({ selectedDate}) => {
  const date = format(selectedDate, "PP");
  const [treatment, setTreatment] = useState(null);

  const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/v2/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <div>
      <Loader />
    </div>
  }

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}/appointmentOptions`)
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);
  return (
    <div className="container mx-auto my-20">
      <p className="text-xl text-secondary text-center">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      <div>
        {treatment && (
          <BookingModal
            selectedDate={selectedDate}
            treatment={treatment}
            setTreatment={setTreatment}
            refetch={refetch}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
};

export default AvailableAppointments;
