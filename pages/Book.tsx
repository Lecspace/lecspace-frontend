// components/Res.tsx
import React, { useState } from 'react';
import ReservationForm, { ReservationData } from '@/Components/ReservationForm';
import CalendarView from '@/Components/CalendarView';

const Res: React.FC = () => {
  const [reservations, setReservations] = useState<ReservationData[]>([]);

  const handleReserve = (reservationData: ReservationData) => {
    setReservations([...reservations, reservationData]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="p-4 bg-blue-600 text-white text-center">
        <h1 className="text-2xl font-bold">Reservation and Calendar</h1>
      </header>

      {/* Main content */}
      <main className="flex-1 flex p-4">
        {/* Reservation Form */}
        <div className="w-1/2 p-4">
          <ReservationForm onReserve={handleReserve} />
        </div>

        {/* Calendar View */}
        <div className="w-1/2 p-4">
          <CalendarView reservations={reservations} />
        </div>
      </main>
    </div>
  );
};

export default Res;


