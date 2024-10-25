import React, { useState } from 'react';
import ReservationForm, { ReservationData } from '@/Components/ReservationForm';
import CalendarView from '@/Components/CalendarView';
import Navbar from '@/Components/Navbar';

const Res: React.FC = () => {
  const [reservations, setReservations] = useState<ReservationData[]>([]);

  const handleReserve = (reservationData: ReservationData) => {
    setReservations([...reservations, reservationData]);
  };

  return (
    <div>
      <Navbar/>
      <div className="min-h-screen flex flex-col bg-gray-100 mt-20">
        {/* Header */}
        <header className="p-4 bg-blue-600 text-white text-center">
          <h1 className="text-2xl font-bold">Calendar</h1>
        </header>

        {/* Main content */}
        <main className="flex-1 p-4">
          {/* Calendar View */}
          <div className="w-full h-full">
            <CalendarView reservations={reservations} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Res;
