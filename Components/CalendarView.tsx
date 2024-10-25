// import React, { useState } from 'react';
// import { ReservationData } from './ReservationForm';

// interface CalendarViewProps {
//   reservations: ReservationData[];
// }

// // Utility function to get the day of the week
// const getDayOfWeek = (dateString: string): string => {
//   const date = new Date(dateString);
//   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   return days[date.getDay()];
// };

// // Utility function to sort dates
// const sortDates = (dates: string[]): string[] => {
//   return dates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
// };

// const CalendarView: React.FC<CalendarViewProps> = ({ reservations }) => {
//   const [selectedReservation, setSelectedReservation] = useState<ReservationData | null>(null);

//   const handleReservationClick = (reservation: ReservationData) => {
//     setSelectedReservation(reservation);
//   };

//   const closeModal = () => {
//     setSelectedReservation(null);
//   };

//   // Group reservations by date
//   const groupedReservations = reservations.reduce((acc: Record<string, ReservationData[]>, reservation) => {
//     if (!acc[reservation.date]) {
//       acc[reservation.date] = [];
//     }
//     acc[reservation.date].push(reservation);
//     return acc;
//   }, {});

//   const dates = sortDates(Object.keys(groupedReservations));

//   return (
//     <div className="bg-white p-6 shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Calendar View</h2>

//       {/* Calendar Grid */}
//       <div className="grid grid-cols-1 gap-4">
//         {dates.length > 0 ? (
//           dates.map((date) => {
//             const dayOfWeek = getDayOfWeek(date);
//             return (
//               <div key={date} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
//                 <h3 className="text-xl font-semibold mb-2">
//                   {date} - {dayOfWeek}
//                 </h3>
//                 <ul className="space-y-2">
//                   {groupedReservations[date].map((reservation, index) => (
//                     <li
//                       key={index}
//                       className="p-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-150 ease-in-out"
//                       onClick={() => handleReservationClick(reservation)}
//                     >
//                       <div className="font-semibold">{reservation.lectureHall}</div>
//                       <div className="text-sm text-gray-600">
//                         {reservation.startTime} - {reservation.endTime}
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             );
//           })
//         ) : (
//           <div className="text-gray-500">No reservations</div>
//         )}
//       </div>

//       {/* Reservation Details Modal */}
//       {selectedReservation && (
//         <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
//             <h3 className="text-xl font-semibold mb-4">Reservation Details</h3>
//             <p><strong>Lecture Hall:</strong> {selectedReservation.lectureHall}</p>
//             <p><strong>User Name:</strong> {selectedReservation.userName}</p>
//             <p><strong>Subject:</strong> {selectedReservation.subjectName}</p>
//             <p><strong>Date:</strong> {selectedReservation.date}</p>
//             <p><strong>Time:</strong> {selectedReservation.startTime} - {selectedReservation.endTime}</p>
//             <p><strong>Number of Students:</strong> {selectedReservation.studentsCount}</p>
//             <p><strong>Note:</strong> {selectedReservation.note}</p>
//             <button
//               className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-150 ease-in-out"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CalendarView;


import React, { useState } from 'react';
import { ReservationData } from './ReservationForm';

interface CalendarViewProps {
  reservations: ReservationData[];
}

// Utility function to get the day of the week
const getDayOfWeek = (dateString: string): string => {
  const date = new Date(dateString);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
};

// Utility function to sort dates
const sortDates = (dates: string[]): string[] => {
  return dates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
};

const CalendarView: React.FC<CalendarViewProps> = ({ reservations }) => {
  const [selectedReservation, setSelectedReservation] = useState<ReservationData | null>(null);

  const handleReservationClick = (reservation: ReservationData) => {
    setSelectedReservation(reservation);
  };

  const closeModal = () => {
    setSelectedReservation(null);
  };

  // Group reservations by date
  const groupedReservations = reservations.reduce((acc: Record<string, ReservationData[]>, reservation) => {
    if (!acc[reservation.date]) {
      acc[reservation.date] = [];
    }
    acc[reservation.date].push(reservation);
    return acc;
  }, {});

  const dates = sortDates(Object.keys(groupedReservations));

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Calendar View</h2>

      {/* Calendar Grid */}
      <div className="grid grid-cols-1 gap-6">
        {dates.length > 0 ? (
          dates.map((date) => {
            const dayOfWeek = getDayOfWeek(date);
            return (
              <div key={date} className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">
                  {date} - {dayOfWeek}
                </h3>
                <ul className="space-y-3">
                  {groupedReservations[date].map((reservation, index) => (
                    <li
                      key={index}
                      className="p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-150 ease-in-out shadow-sm"
                      onClick={() => handleReservationClick(reservation)}
                    >
                      <div className="font-semibold text-gray-800">{reservation.lectureHall}</div>
                      <div className="text-sm text-gray-600">
                        {reservation.startTime} - {reservation.endTime}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })
        ) : (
          <div className="text-white text-lg">No reservations</div>
        )}
      </div>

      {/* Reservation Details Modal */}
      {selectedReservation && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-4">Reservation Details</h3>
            <p><strong>Lecture Hall:</strong> {selectedReservation.lectureHall}</p>
            <p><strong>User Name:</strong> {selectedReservation.userName}</p>
            <p><strong>Subject:</strong> {selectedReservation.subjectName}</p>
            <p><strong>Date:</strong> {selectedReservation.date}</p>
            <p><strong>Time:</strong> {selectedReservation.startTime} - {selectedReservation.endTime}</p>
            <p><strong>Number of Students:</strong> {selectedReservation.studentsCount}</p>
            <p><strong>Note:</strong> {selectedReservation.note}</p>
            <button
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-150 ease-in-out"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarView;

