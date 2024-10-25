// // // components/ReservationForm.tsx
// // import { useState } from 'react';

// // // Define the ReservationData interface
// // export interface ReservationData {
// //   lectureHall: string;
// //   userName: string;
// //   subjectName: string;
// //   date: string;
// //   startTime: string;
// //   endTime: string;
// //   studentsCount: number;
// //   note: string;
// // }

// // interface ReservationFormProps {
// //   onReserve: (reservationData: ReservationData) => void;
// //   existingReservations?: ReservationData[];
// // }

// // const lectureHallOptions = [
// //   'SF01', 'SF02', 'FF01', 'FF02', 'FF03', 'FF04', 'FF05', 'FF06', 'FF07', 'FF08'
// // ];

// // const ReservationForm: React.FC<ReservationFormProps> = ({ onReserve, existingReservations = [] }) => {
// //   const [formData, setFormData] = useState<ReservationData>({
// //     lectureHall: '',
// //     userName: '',
// //     subjectName: '',
// //     date: '',
// //     startTime: '',
// //     endTime: '',
// //     studentsCount: 50,
// //     note: '',
// //   });

// //   const [error, setError] = useState<string | null>(null);

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setFormData({
// //       ...formData,
// //       studentsCount: Number(e.target.value),
// //     });
// //   };

// //   const isConflict = (reservation: ReservationData) => {
// //     return existingReservations.some(existing =>
// //       existing.lectureHall === reservation.lectureHall &&
// //       existing.date === reservation.date &&
// //       ((existing.startTime < reservation.endTime && existing.endTime > reservation.startTime))
// //     );
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();

// //     if (isConflict(formData)) {
// //       setError('The selected time slot is already reserved. Please choose a different time or lecture hall.');
// //       return;
// //     }

// //     setError(null);
// //     onReserve(formData);
// //     // Optionally reset the form after submission
// //     setFormData({
// //       lectureHall: '',
// //       userName: '',
// //       subjectName: '',
// //       date: '',
// //       startTime: '',
// //       endTime: '',
// //       studentsCount: 50,
// //       note: '',
// //     });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
// //       <h2 className="text-2xl font-bold mb-4">Reservation Details</h2>
      
// //       {error && <p className="text-red-500 mb-4">{error}</p>}

// //       <div className="mb-4">
// //         <label className="block text-sm font-medium mb-1">Lecture Hall Number</label>
// //         <select
// //           name="lectureHall"
// //           value={formData.lectureHall}
// //           onChange={handleChange}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         >
// //           <option value="" disabled>Select a lecture hall</option>
// //           {lectureHallOptions.map(option => (
// //             <option key={option} value={option}>{option}</option>
// //           ))}
// //         </select>
// //       </div>

// //       <div className="mb-4">
// //         <label className="block text-sm font-medium mb-1">User Name</label>
// //         <input
// //           type="text"
// //           name="userName"
// //           value={formData.userName}
// //           onChange={handleChange}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>

// //       <div className="mb-4">
// //         <label className="block text-sm font-medium mb-1">Subject Name</label>
// //         <input
// //           type="text"
// //           name="subjectName"
// //           value={formData.subjectName}
// //           onChange={handleChange}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>

// //       <div className="mb-4">
// //         <label className="block text-sm font-medium mb-1">Date</label>
// //         <input
// //           type="date"
// //           name="date"
// //           value={formData.date}
// //           onChange={handleChange}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>

// //       <div className="mb-4">
// //         <label className="block text-sm font-medium mb-1">Start Time</label>
// //         <input
// //           type="time"
// //           name="startTime"
// //           value={formData.startTime}
// //           onChange={handleChange}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>

// //       <div className="mb-4">
// //         <label className="block text-sm font-medium mb-1">End Time</label>
// //         <input
// //           type="time"
// //           name="endTime"
// //           value={formData.endTime}
// //           onChange={handleChange}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>

// //       <div className="mb-4">
// //         <label className="block text-sm font-medium mb-1">Number of Students</label>
// //         <input
// //           type="range"
// //           name="studentsCount"
// //           value={formData.studentsCount}
// //           onChange={handleSliderChange}
// //           min="1"
// //           max="200"
// //           className="w-full"
// //         />
// //         <p className="text-sm">Number of Students: {formData.studentsCount}</p>
// //       </div>

// //       <div className="mb-4">
// //         <label className="block text-sm font-medium mb-1">Note</label>
// //         <textarea
// //           name="note"
// //           value={formData.note}
// //           onChange={handleChange}
// //           rows={4}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>

// //       <button
// //         type="submit"
// //         className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
// //       >
// //         Reserve
// //       </button>
// //     </form>
// //   );
// // };

// // export default ReservationForm;

// import { useState } from 'react';

// // Define the ReservationData interface
// export interface ReservationData {
//   lectureHall: string;
//   userName: string;
//   subjectName: string;
//   date: string;
//   startTime: string;
//   endTime: string;
//   studentsCount: number;
//   note: string;
// }

// interface ReservationFormProps {
//   onReserve: (reservationData: ReservationData) => void;
//   existingReservations?: ReservationData[];
// }

// const lectureHallOptions = [
//   'SF01', 'SF02', 'FF01', 'FF02', 'FF03', 'FF04', 'FF05', 'FF06', 'FF07', 'FF08'
// ];

// const ReservationForm: React.FC<ReservationFormProps> = ({ onReserve, existingReservations = [] }) => {
//   const [formData, setFormData] = useState<ReservationData>({
//     lectureHall: '',
//     userName: '',
//     subjectName: '',
//     date: '',
//     startTime: '',
//     endTime: '',
//     studentsCount: 50,
//     note: '',
//   });

//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       studentsCount: Number(e.target.value),
//     });
//   };

//   const isConflict = (reservation: ReservationData) => {
//     return existingReservations.some(existing =>
//       existing.lectureHall === reservation.lectureHall &&
//       existing.date === reservation.date &&
//       ((existing.startTime < reservation.endTime && existing.endTime > reservation.startTime))
//     );
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (isConflict(formData)) {
//       setError('The selected time slot is already reserved. Please choose a different time or lecture hall.');
//       return;
//     }

//     setError(null);
//     onReserve(formData);
//     // Optionally reset the form after submission
//     setFormData({
//       lectureHall: '',
//       userName: '',
//       subjectName: '',
//       date: '',
//       startTime: '',
//       endTime: '',
//       studentsCount: 50,
//       note: '',
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow-lg space-y-6">
//       <h2 className="text-3xl font-bold mb-4 text-gray-800">Reservation Details</h2>
      
//       {error && <p className="text-red-500 font-semibold">{error}</p>}

//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1 text-gray-700">Lecture Hall Number</label>
//         <select
//           name="lectureHall"
//           value={formData.lectureHall}
//           onChange={handleChange}
//           className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="" disabled>Select a lecture hall</option>
//           {lectureHallOptions.map(option => (
//             <option key={option} value={option}>{option}</option>
//           ))}
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1 text-gray-700">User Name</label>
//         <input
//           type="text"
//           name="userName"
//           value={formData.userName}
//           onChange={handleChange}
//           className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter your name"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1 text-gray-700">Subject Name</label>
//         <input
//           type="text"
//           name="subjectName"
//           value={formData.subjectName}
//           onChange={handleChange}
//           className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter the subject"
//         />
//       </div>

//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block text-sm font-medium mb-1 text-gray-700">Date</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1 text-gray-700">Start Time</label>
//           <input
//             type="time"
//             name="startTime"
//             value={formData.startTime}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1 text-gray-700">End Time</label>
//           <input
//             type="time"
//             name="endTime"
//             value={formData.endTime}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1 text-gray-700">Number of Students</label>
//         <input
//           type="range"
//           name="studentsCount"
//           value={formData.studentsCount}
//           onChange={handleSliderChange}
//           min="1"
//           max="200"
//           className="w-full"
//         />
//         <p className="text-sm mt-2 text-gray-600">Number of Students: {formData.studentsCount}</p>
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1 text-gray-700">Note</label>
//         <textarea
//           name="note"
//           value={formData.note}
//           onChange={handleChange}
//           rows={4}
//           className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
//           placeholder="Add any notes or special requests here"
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-150 ease-in-out font-semibold"
//       >
//         Reserve
//       </button>
//     </form>
//   );
// };

// export default ReservationForm;


// components/ReservationForm.tsx
import { useState } from 'react';

export interface ReservationData {
  lectureHall: string;
  userName: string;
  subjectName: string;
  date: string;
  startTime: string;
  endTime: string;
  studentsCount: number;
  note: string;
}

interface ReservationFormProps {
  onReserve: (reservationData: ReservationData) => void;
  existingReservations?: ReservationData[];
}

const lectureHallOptions = [
  'SF01', 'SF02', 'FF01', 'FF02', 'FF03', 'FF04', 'FF05', 'FF06', 'FF07', 'FF08'
];

const ReservationForm: React.FC<ReservationFormProps> = ({ onReserve, existingReservations = [] }) => {
  const [formData, setFormData] = useState<ReservationData>({
    lectureHall: '',
    userName: '',
    subjectName: '',
    date: '',
    startTime: '',
    endTime: '',
    studentsCount: 50,
    note: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      studentsCount: Number(e.target.value),
    });
  };

  const isConflict = (reservation: ReservationData) => {
    return existingReservations.some(existing =>
      existing.lectureHall === reservation.lectureHall &&
      existing.date === reservation.date &&
      ((existing.startTime < reservation.endTime && existing.endTime > reservation.startTime))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isConflict(formData)) {
      setError('The selected time slot is already reserved. Please choose a different time or lecture hall.');
      return;
    }

    setError(null);
    onReserve(formData);
    setFormData({
      lectureHall: '',
      userName: '',
      subjectName: '',
      date: '',
      startTime: '',
      endTime: '',
      studentsCount: 50,
      note: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Reservation Details</h2>
      
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Lecture Hall Number</label>
        <select
          name="lectureHall"
          value={formData.lectureHall}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>Select a lecture hall</option>
          {lectureHallOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Subject Name</label>
        <input
          type="text"
          name="subjectName"
          value={formData.subjectName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Number of Students</label>
        <input
          type="range"
          name="studentsCount"
          value={formData.studentsCount}
          onChange={handleSliderChange}
          min="1"
          max="200"
          className="w-full"
        />
        <p className="text-sm text-gray-600 mt-1">Number of Students: {formData.studentsCount}</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Note</label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-150 ease-in-out"
      >
        Reserve
      </button>
    </form>
  );
};

export default ReservationForm;
