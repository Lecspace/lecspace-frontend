// import { useState } from "react";
// import Image from "next/image";
// import Nav from "@/Components/Nav";
// import MobileNav from "@/Components/MobileNav";

// export default function UserProfile() {
//   const [nav, setNav] = useState(false);
//   const openNav = () => setNav(true);
//   const closeNav = () => setNav(false);

//   const [firstName, setFirstName] = useState<string>("Dilky");
//   const [lastName, setLastName] = useState<string>("Chamika");
//   const [email] = useState<string>("dilky@123.com");
//   const [role] = useState<string>("Admin");
//   const [profilePicture, setProfilePicture] = useState<string>(
//     "/images/user-logo.png"
//   );
//   const [isEditing, setIsEditing] = useState<boolean>(false);

//   const handleSave = () => {
//     setIsEditing(false);
//   };

//   const handleProfilePictureChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     if (e.target.files && e.target.files[0]) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         if (event.target && event.target.result) {
//           setProfilePicture(event.target.result as string);
//         }
//       };
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-300 flex flex-col items-center justify-center">
//         <MobileNav nav={nav} closeNav={closeNav} />
//         <Nav openNav={openNav} />
//       <div className="bg-white text-black rounded-t-lg shadow-lg w-full max-w-4xl">
//         <div className="text-center p-8">
//           <div className="relative mx-auto w-24 h-24">
//             <Image
//               src={profilePicture}
//               alt="User Logo"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-full"
//             />
//             {isEditing && (
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="absolute inset-0 opacity-0 cursor-pointer"
//                 onChange={handleProfilePictureChange}
//               />
//             )}
//           </div>
//           <h1 className="text-3xl font-bold mt-4">{`${firstName} ${lastName}`}</h1>
//         </div>
//         <div className="bg-gray-100 p-6">
//           {isEditing ? (
//             <div className="grid grid-cols-2 gap-4 text-lg mb-6">
//               <div>
//                 <label className="block font-semibold">First Name:</label>
//                 <input
//                   type="text"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   className="w-full p-2 rounded border-2 border-gray-300 text-black"
//                 />
//               </div>
//               <div>
//                 <label className="block font-semibold">Last Name:</label>
//                 <input
//                   type="text"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   className="w-full p-2 rounded border-2 border-gray-300 text-black"
//                 />
//               </div>
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 gap-4 text-lg mb-6">
//               <div>
//                 <p>
//                   <span className="font-semibold">First Name :</span>{" "}
//                   {firstName}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Email :</span> {email}
//                 </p>
//               </div>
//               <div>
//                 <p>
//                   <span className="font-semibold">Last Name :</span> {lastName}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Role :</span> {role}
//                 </p>
//               </div>
//             </div>
//           )}
//           <div className="text-center">
//             {isEditing ? (
//               <button
//                 onClick={handleSave}
//                 className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//               >
//                 Save
//               </button>
//             ) : (
//               <>
//                 <a
//                   href="#"
//                   onClick={() => setIsEditing(true)}
//                   className="text-blue-600 hover:underline block mb-2"
//                 >
//                   Change Profile
//                 </a>
//                 <a href="#" className="text-blue-600 hover:underline">
//                   Change Password
//                 </a>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//       <footer className="w-full text-center text-white text-sm py-4 mt-8">
//         © Copyright 2024, All Rights Reserved by LECSPACE
//       </footer>
//     </div>
//   );
// }

// // import { useEffect, useState } from "react";
// // import Image from "next/image";
// // import Nav from "@/Components/Nav";
// // import MobileNav from "@/Components/MobileNav";
// // import { useGetUserQuery } from "@/redux/features/auth/authApi"; // Adjust the import path if necessary

// // export default function UserProfile() {
// //   const [nav, setNav] = useState(false);
// //   const openNav = () => setNav(true);
// //   const closeNav = () => setNav(false);

// //   const [isEditing, setIsEditing] = useState<boolean>(false);

// //   // Use your API slice to get user data
// //   const { data: user, error, isLoading } = useGetUserQuery();

// //   // State to hold profile data
// //   const [firstName, setFirstName] = useState<string>("");
// //   const [lastName, setLastName] = useState<string>("");
// //   const [email, setEmail] = useState<string>("");
// //   const [role, setRole] = useState<string>("");
// //   const [profilePicture, setProfilePicture] = useState<string>("");

// //   useEffect(() => {
// //     if (user) {
// //       setFirstName(user.firstName);
// //       setLastName(user.lastName);
// //       setEmail(user.email);
// //       setRole(user.role);
// //       setProfilePicture(user.profilePicture || "/images/user-logo.png");
// //     }
// //   }, [user]);

// //   const handleSave = () => {
// //     setIsEditing(false);
// //     // Add logic to save updated user data to the server
// //   };

// //   const handleProfilePictureChange = (
// //     e: React.ChangeEvent<HTMLInputElement>
// //   ) => {
// //     if (e.target.files && e.target.files[0]) {
// //       const reader = new FileReader();
// //       reader.onload = (event) => {
// //         if (event.target && event.target.result) {
// //           setProfilePicture(event.target.result as string);
// //         }
// //       };
// //       reader.readAsDataURL(e.target.files[0]);
// //     }
// //   };

// //   if (isLoading) return <div>Loading...</div>;
// //   if (error) return <div>Error loading user data</div>;

// //   return (
// //     <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-300 flex flex-col items-center justify-center">
// //       <MobileNav nav={nav} closeNav={closeNav} />
// //       <Nav openNav={openNav} />
// //       <div className="bg-white text-black rounded-t-lg shadow-lg w-full max-w-4xl">
// //         <div className="text-center p-8">
// //           <div className="relative mx-auto w-24 h-24">
// //             <Image
// //               src={profilePicture}
// //               alt="User Logo"
// //               layout="fill"
// //               objectFit="cover"
// //               className="rounded-full"
// //             />
// //             {isEditing && (
// //               <input
// //                 type="file"
// //                 accept="image/*"
// //                 className="absolute inset-0 opacity-0 cursor-pointer"
// //                 onChange={handleProfilePictureChange}
// //               />
// //             )}
// //           </div>
// //           <h1 className="text-3xl font-bold mt-4">{`${firstName} ${lastName}`}</h1>
// //         </div>
// //         <div className="bg-gray-100 p-6">
// //           {isEditing ? (
// //             <div className="grid grid-cols-2 gap-4 text-lg mb-6">
// //               <div>
// //                 <label className="block font-semibold">First Name:</label>
// //                 <input
// //                   type="text"
// //                   value={firstName}
// //                   onChange={(e) => setFirstName(e.target.value)}
// //                   className="w-full p-2 rounded border-2 border-gray-300 text-black"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block font-semibold">Last Name:</label>
// //                 <input
// //                   type="text"
// //                   value={lastName}
// //                   onChange={(e) => setLastName(e.target.value)}
// //                   className="w-full p-2 rounded border-2 border-gray-300 text-black"
// //                 />
// //               </div>
// //             </div>
// //           ) : (
// //             <div className="grid grid-cols-2 gap-4 text-lg mb-6">
// //               <div>
// //                 <p>
// //                   <span className="font-semibold">First Name :</span>{" "}
// //                   {firstName}
// //                 </p>
// //                 <p>
// //                   <span className="font-semibold">Email :</span> {email}
// //                 </p>
// //               </div>
// //               <div>
// //                 <p>
// //                   <span className="font-semibold">Last Name :</span> {lastName}
// //                 </p>
// //                 <p>
// //                   <span className="font-semibold">Role :</span> {role}
// //                 </p>
// //               </div>
// //             </div>
// //           )}
// //           <div className="text-center">
// //             {isEditing ? (
// //               <button
// //                 onClick={handleSave}
// //                 className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
// //               >
// //                 Save
// //               </button>
// //             ) : (
// //               <>
// //                 <a
// //                   href="#"
// //                   onClick={() => setIsEditing(true)}
// //                   className="text-blue-600 hover:underline block mb-2"
// //                 >
// //                   Change Profile
// //                 </a>
// //                 <a href="#" className="text-blue-600 hover:underline">
// //                   Change Password
// //                 </a>
// //               </>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //       <footer className="w-full text-center text-white text-sm py-4 mt-8">
// //         © Copyright 2024, All Rights Reserved by LECSPACE
// //       </footer>
// //     </div>
// //   );
// // }

// // src/pages/UserProfile.tsx

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import Nav from "@/Components/Nav";
import MobileNav from "@/Components/MobileNav";

export default function UserProfile() {
  const dispatch = useDispatch();
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  // Fetch user information from Redux store
  const user = useSelector((state: RootState) => state.auth.user);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [name, setName] = useState<string>(user?.name || "");

  // Simulating email and role from user data
  const email = user?.email || "example@domain.com";
  const role = user?.role || "User";

  const handleSave = () => {
    setIsEditing(false);
    // Additional logic to update the profile in Redux or backend can go here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-blue-500 flex flex-col items-center py-10">
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />

      <div className="mt-20 bg-white text-gray-800 rounded-lg shadow-lg w-full max-w-3xl p-8">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-800 mt-4">{name}</h1>
          <p className="text-lg text-gray-500 mt-1">{email}</p>
          <p className="text-lg text-gray-500">{role}</p>
        </div>

        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-inner">
          {isEditing ? (
            <div>
              <label className="block font-semibold text-lg text-gray-700 mb-2">
                Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded border-2 border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ) : (
            <div className="text-center">
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Name:</span> {name}
              </p>
              <p className="text-lg text-gray-700 mt-2">
                <span className="font-semibold">Email:</span> {email}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Role:</span> {role}
              </p>
            </div>
          )}

          <div className="text-center mt-6">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-8 rounded-full transition duration-200 shadow-lg"
              >
                Save
              </button>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-8 rounded-full transition duration-200 shadow-lg mr-4"
                >
                  Edit Profile
                </button>
                <button
                  className="text-blue-500 mt-4 underline transition duration-200 hover:text-blue-400"
                >
                  Change Password
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <footer className="w-full text-center text-white text-sm py-4 mt-10">
        © 2024, All Rights Reserved by LECSPACE
      </footer>
    </div>
  );
}
