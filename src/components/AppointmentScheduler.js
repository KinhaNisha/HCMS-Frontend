import React, { useState, useEffect } from 'react';
import api from '../services/api';

const AppointmentScheduler = () => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingError, setBookingError] = useState(null);

  useEffect(() => {
    // Fetch available appointment slots from the backend
    const fetchAvailableSlots = async () => {
      try {
        const response = await api.get('/appointments/slots');
        setAvailableSlots(response.data);
      } catch (error) {
        console.error('Error fetching available slots:', error);
      }
    };

    fetchAvailableSlots();
  }, []);

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const bookAppointment = async () => {
    if (!selectedSlot) {
      alert('Please select a slot first.');
      return;
    }
    
    try {
      // Replace '/appointments/book' with the correct endpoint
      // and provide necessary payload as per your API's requirement.
      const response = await api.post('/appointments/book', {
        slotId: selectedSlot.id,
      });

      if (response.data.success) {
        setBookingSuccess(true);
        // Optionally, clear the selected slot.
        setSelectedSlot(null);
      } else {
        throw new Error('Booking failed');
      }
    } catch (error) {
      console.error('Error booking the appointment:', error);
      setBookingError(error);
    }
  };

  return (
    <div>
      <h1>Appointment Scheduler</h1>
      {bookingSuccess ? (
        <p>Appointment booked successfully!</p>
      ) : (
        <>
          <ul>
            {availableSlots.map((slot) => (
              <li key={slot.id} onClick={() => handleSlotSelection(slot)}>
                {slot.date} - {slot.time}
                {selectedSlot && selectedSlot.id === slot.id && " (Selected)"}
              </li>
            ))}
          </ul>
          <button onClick={bookAppointment}>Book Appointment</button>
          {bookingError && <p>Error booking appointment: {bookingError.message}</p>}
        </>
      )}
    </div>
  );
};

export default AppointmentScheduler;
