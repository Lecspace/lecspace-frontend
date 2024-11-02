// // import Image from "next/image";
// // import Link from "next/link";

// // export default function SignUpForm() {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-300 flex items-center justify-center">
// //       <div className="bg-blue-500 text-white rounded-lg shadow-lg w-full max-w-md p-8">
// //         <div className="text-center mb-6">
// //           <Image
// //             src="/images/usjp-logo.png"
// //             alt="University Logo"
// //             width={100}
// //             height={100}
// //             className="mx-auto"
// //           />
// //           <h1 className="text-2xl font-semibold mt-4">
// //             University of Sri Jayewardenepura
// //           </h1>
// //           <h2 className="text-lg mt-2">LECSPACE</h2>
// //         </div>
// //         <form>
// //           <div className="grid grid-cols-2 gap-4 mb-4">
// //             <div>
// //               <label className="block mb-2">First Name :</label>
// //               <input
// //                 type="text"
// //                 placeholder="First Name"
// //                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
// //               />
// //             </div>
// //             <div>
// //               <label className="block mb-2">Last Name :</label>
// //               <input
// //                 type="text"
// //                 placeholder="Last Name"
// //                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
// //               />
// //             </div>
// //           </div>
// //           <div className="mb-4">
// //             <label className="block mb-2">Email :</label>
// //             <input
// //               type="email"
// //               placeholder="Email Here"
// //               className="w-full p-2 rounded border-2 border-gray-300 text-black"
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block mb-2">Role :</label>
// //             <input
// //               type="text"
// //               placeholder="Lecturer"
// //               className="w-full p-2 rounded border-2 border-gray-300 text-black"
// //             />
// //           </div>
// //           <div className="grid grid-cols-2 gap-4 mb-6">
// //             <div>
// //               <label className="block mb-2">Password :</label>
// //               <input
// //                 type="password"
// //                 placeholder="Password"
// //                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
// //               />
// //             </div>
// //             <div>
// //               <label className="block mb-2">Confirm Password :</label>
// //               <input
// //                 type="password"
// //                 placeholder="Password"
// //                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
// //               />
// //             </div>
// //           </div>
// //           <button
// //             type="submit"
// //             className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
// //           >
// //             Sign Up
// //           </button>
// //         </form>
// //         <div className="text-center mt-4">
// //           <Link href="/Login" className="text-sm text-gray-200">
// //             Already have an account
// //           </Link>
// //         </div>
// //       </div>
// //       <footer className="absolute bottom-0 w-full text-center text-white text-sm py-4">
// //         © Copyright 2024, All Rights Reserved by LECSPACE
// //       </footer>
// //     </div>
// //   );
// // }

// // // // import Image from "next/image";
// // // // import Link from "next/link";
// // // // import { useState } from "react";
// // // // import { useRegisterMutation } from "../redux/features/auth/authApi"; // Adjust the path if necessary
// // // // import { useRouter } from "next/router";

// // // // export default function SignUpForm() {
// // // //   const [firstName, setFirstName] = useState("");
// // // //   const [lastName, setLastName] = useState("");
// // // //   const [email, setEmail] = useState("");
// // // //   const [role, setRole] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // //   const [register, { isLoading }] = useRegisterMutation();
// // // //   const router = useRouter();

// // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // //     e.preventDefault();

// // // //     if (password !== confirmPassword) {
// // // //       alert("Passwords do not match");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const result = await register({
// // // //         firstName,
// // // //         lastName,
// // // //         email,
// // // //         role,
// // // //         password,
// // // //       }).unwrap();

// // // //       if (result.success) {
// // // //         alert("Registration successful!");
// // // //         router.push("/Login"); // Redirect to the login page
// // // //       } else {
// // // //         alert(result.message || "Registration failed");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Failed to register:", error);
// // // //       alert("Registration failed");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-300 flex items-center justify-center">
// // // //       <div className="bg-blue-500 text-white rounded-lg shadow-lg w-full max-w-md p-8">
// // // //         <div className="text-center mb-6">
// // // //           <Image
// // // //             src="/images/usjp-logo.png"
// // // //             alt="University Logo"
// // // //             width={100}
// // // //             height={100}
// // // //             className="mx-auto"
// // // //           />
// // // //           <h1 className="text-2xl font-semibold mt-4">
// // // //             University of Sri Jayewardenepura
// // // //           </h1>
// // // //           <h2 className="text-lg mt-2">LECSPACE</h2>
// // // //         </div>
// // // //         <form onSubmit={handleSubmit}>
// // // //           <div className="grid grid-cols-2 gap-4 mb-4">
// // // //             <div>
// // // //               <label className="block mb-2">First Name :</label>
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="First Name"
// // // //                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // // //                 value={firstName}
// // // //                 onChange={(e) => setFirstName(e.target.value)}
// // // //               />
// // // //             </div>
// // // //             <div>
// // // //               <label className="block mb-2">Last Name :</label>
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="Last Name"
// // // //                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // // //                 value={lastName}
// // // //                 onChange={(e) => setLastName(e.target.value)}
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //           <div className="mb-4">
// // // //             <label className="block mb-2">Email :</label>
// // // //             <input
// // // //               type="email"
// // // //               placeholder="Email Here"
// // // //               className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // // //               value={email}
// // // //               onChange={(e) => setEmail(e.target.value)}
// // // //             />
// // // //           </div>
// // // //           <div className="mb-4">
// // // //             <label className="block mb-2">Role :</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Lecturer"
// // // //               className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // // //               value={role}
// // // //               onChange={(e) => setRole(e.target.value)}
// // // //             />
// // // //           </div>
// // // //           <div className="grid grid-cols-2 gap-4 mb-6">
// // // //             <div>
// // // //               <label className="block mb-2">Password :</label>
// // // //               <input
// // // //                 type="password"
// // // //                 placeholder="Password"
// // // //                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // // //                 value={password}
// // // //                 onChange={(e) => setPassword(e.target.value)}
// // // //               />
// // // //             </div>
// // // //             <div>
// // // //               <label className="block mb-2">Confirm Password :</label>
// // // //               <input
// // // //                 type="password"
// // // //                 placeholder="Password"
// // // //                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // // //                 value={confirmPassword}
// // // //                 onChange={(e) => setConfirmPassword(e.target.value)}
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //           <button
// // // //             type="submit"
// // // //             className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
// // // //             disabled={isLoading}
// // // //           >
// // // //             {isLoading ? "Signing Up..." : "Sign Up"}
// // // //           </button>
// // // //         </form>
// // // //         <div className="text-center mt-4">
// // // //           <Link href="/Login" className="text-sm text-gray-200">
// // // //             Already have an account
// // // //           </Link>
// // // //         </div>
// // // //       </div>
// // // //       <footer className="absolute bottom-0 w-full text-center text-white text-sm py-4">
// // // //         © Copyright 2024, All Rights Reserved by LECSPACE
// // // //       </footer>
// // // //     </div>
// // // //   );
// // // // }

// // // // import Image from "next/image";
// // // // import Link from "next/link";
// // // // import { useState } from "react";
// // // // import { useRegisterMutation } from "../redux/features/auth/authApi"; // Adjust the path if necessary
// // // // import { useRouter } from "next/router";

// // // // export default function SignUpForm() {
// // // //   const [firstName, setFirstName] = useState("");
// // // //   const [lastName, setLastName] = useState("");
// // // //   const [email, setEmail] = useState("");
// // // //   const [role, setRole] = useState("");
// // // //   const [contact, setContact] = useState(""); // Added contact state
// // // //   const [password, setPassword] = useState("");
// // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // //   const [register, { isLoading }] = useRegisterMutation();
// // // //   const router = useRouter();

// // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // //     e.preventDefault();

// // // //     if (password !== confirmPassword) {
// // // //       alert("Passwords do not match");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const result = await register({
// // // //         name: `${firstName} ${lastName}`, // Combine first and last names
// // // //         email,
// // // //         role,
// // // //         password,
// // // //         contact, // Include contact field
// // // //       }).unwrap();

// // // //       if (result.success) {
// // // //         alert("Registration successful!");
// // // //         router.push("/Login"); // Redirect to the login page
// // // //       } else {
// // // //         alert(result.message || "Registration failed");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Failed to register:", error);
// // // //       alert("Registration failed");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-300 flex items-center justify-center">
// // // //       <div className="bg-blue-500 text-white rounded-lg shadow-lg w-full max-w-md p-8">
// // // //         <div className="text-center mb-6">
// // // //           <Image
// // // //             src="/images/usjp-logo.png"
// // // //             alt="University Logo"
// // // //             width={100}
// // // //             height={100}
// // // //             className="mx-auto"
// // // //           />
// // // //           <h1 className="text-2xl font-semibold mt-4">
// // // //             University of Sri Jayewardenepura
// // // //           </h1>
// // // //           <h2 className="text-lg mt-2">LECSPACE</h2>
// // // //         </div>
// // // //         <form onSubmit={handleSubmit}>
// // // //           <div className="grid grid-cols-2 gap-4 mb-4">
// // // //             <div>
// // // //               <label className="block mb-2">First Name :</label>
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="First Name"
// // // //                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // // //                 value={firstName}
// // // //                 onChange={(e) => setFirstName(e.target.value)}
// // // //               />
// // // //             </div>
// // // //             <div>
// // // //               <label className="block mb-2">Last Name :</label>
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="Last Name"
// // // //                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // // //                 value={lastName}
// // // //                 onChange={(e) => setLastName(e.target.value)}
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //           <div className="mb-4">
// // // //             <label className="block mb-2">Email :</label>
// // // //             <input
// // // //               type="email"
// // // //               placeholder="Email Here"
// // // //               className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // // //               value={email}
// // // //               onChange={(e) => setEmail(e.target.value)}
// // // //             />
// // // //           </div>
// // // //           <div className="mb-4">
// // // //             <label className="block mb-2">Role :</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Lecturer"
// // // //               className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // // //               value={role}
// // // //               onChange={(e) => setRole(e.target.value)}
// // // //             />
// // // //           </div>
// // // //           <div className="mb-4">
// // // //             <label className="block mb-2">Contact :</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Contact Number"
// // // //               className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // // //               value={contact}
// // // //               onChange={(e) => setContact(e.target.value)}
// // // //             />
// // // //           </div>
// // // //           <div className="grid grid-cols-2 gap-4 mb-6">
// // // //             <div>
// // // //               <label className="block mb-2">Password :</label>
// // // //               <input
// // // //                 type="password"
// // // //                 placeholder="Password"
// // // //                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // // //                 value={password}
// // // //                 onChange={(e) => setPassword(e.target.value)}
// // // //               />
// // // //             </div>
// // // //             <div>
// // // //               <label className="block mb-2">Confirm Password :</label>
// // // //               <input
// // // //                 type="password"
// // // //                 placeholder="Confirm Password"
// // // //                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // // //                 value={confirmPassword}
// // // //                 onChange={(e) => setConfirmPassword(e.target.value)}
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //           <button
// // // //             type="submit"
// // // //             className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
// // // //             disabled={isLoading}
// // // //           >
// // // //             {isLoading ? "Signing Up..." : "Sign Up"}
// // // //           </button>
// // // //         </form>
// // // //         <div className="text-center mt-4">
// // // //           <Link href="/Login" className="text-sm text-gray-200">
// // // //             Already have an account
// // // //           </Link>
// // // //         </div>
// // // //       </div>
// // // //       <footer className="absolute bottom-0 w-full text-center text-white text-sm py-4">
// // // //         © Copyright 2024, All Rights Reserved by LECSPACE
// // // //       </footer>
// // // //     </div>
// // // //   );
// // // // }

// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import { useState } from "react";
// // // import { useRegisterMutation } from "../redux/features/auth/authApi"; // Adjust the path if necessary
// // // import { useRouter } from "next/router";

// // // export default function SignUpForm() {
// // //   const [firstName, setFirstName] = useState("");
// // //   const [lastName, setLastName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [role, setRole] = useState(""); // Set default empty string
// // //   const [contact, setContact] = useState(""); // Added contact state
// // //   const [password, setPassword] = useState("");
// // //   const [confirmPassword, setConfirmPassword] = useState("");
// // //   const [register, { isLoading }] = useRegisterMutation();
// // //   const router = useRouter();

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();

// // //     if (password !== confirmPassword) {
// // //       alert("Passwords do not match");
// // //       return;
// // //     }

// // //     try {
// // //       const result = await register({
// // //         name: `${firstName} ${lastName}`, // Combine first and last names
// // //         email,
// // //         role, // Include role
// // //         password,
// // //         contact, // Include contact field
// // //       }).unwrap();

// // //       if (result.success) {
// // //         alert("Registration successful!");
// // //         router.push("/Login"); // Redirect to the login page
// // //       } else {
// // //         alert(result.message || "Registration failed");
// // //       }
// // //     } catch (error) {
// // //       console.error("Failed to register:", error);
// // //       alert("Registration failed");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-300 flex items-center justify-center">
// // //       <div className="bg-blue-500 text-white rounded-lg shadow-lg w-full max-w-md p-8">
// // //         <div className="text-center mb-6">
// // //           <Image
// // //             src="/images/usjp-logo.png"
// // //             alt="University Logo"
// // //             width={100}
// // //             height={100}
// // //             className="mx-auto"
// // //           />
// // //           <h1 className="text-2xl font-semibold mt-4">
// // //             University of Sri Jayewardenepura
// // //           </h1>
// // //           <h2 className="text-lg mt-2">LECSPACE</h2>
// // //         </div>
// // //         <form onSubmit={handleSubmit}>
// // //           <div className="grid grid-cols-2 gap-4 mb-4">
// // //             <div>
// // //               <label className="block mb-2">First Name :</label>
// // //               <input
// // //                 type="text"
// // //                 placeholder="First Name"
// // //                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // //                 value={firstName}
// // //                 onChange={(e) => setFirstName(e.target.value)}
// // //               />
// // //             </div>
// // //             <div>
// // //               <label className="block mb-2">Last Name :</label>
// // //               <input
// // //                 type="text"
// // //                 placeholder="Last Name"
// // //                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // //                 value={lastName}
// // //                 onChange={(e) => setLastName(e.target.value)}
// // //               />
// // //             </div>
// // //           </div>
// // //           <div className="mb-4">
// // //             <label className="block mb-2">Email :</label>
// // //             <input
// // //               type="email"
// // //               placeholder="Email Here"
// // //               className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // //               value={email}
// // //               onChange={(e) => setEmail(e.target.value)}
// // //             />
// // //           </div>
// // //           <div className="mb-4">
// // //             <label className="block mb-2">Role :</label>
// // //             <select
// // //               value={role}
// // //               onChange={(e) => setRole(e.target.value)}
// // //               className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // //             >
// // //               <option value="">Select a role</option>
// // //               <option value="STUDENT">Student</option>
// // //               <option value="LECTURER">Lecturer</option>
// // //               <option value="DR">DR</option>
// // //               <option value="ADMIN">Admin</option>
// // //               <option value="USER">User</option>
// // //             </select>
// // //           </div>
// // //           <div className="mb-4">
// // //             <label className="block mb-2">Contact :</label>
// // //             <input
// // //               type="text"
// // //               placeholder="Contact Number"
// // //               className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // //               value={contact}
// // //               onChange={(e) => setContact(e.target.value)}
// // //             />
// // //           </div>
// // //           <div className="grid grid-cols-2 gap-4 mb-6">
// // //             <div>
// // //               <label className="block mb-2">Password :</label>
// // //               <input
// // //                 type="password"
// // //                 placeholder="Password"
// // //                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //               />
// // //             </div>
// // //             <div>
// // //               <label className="block mb-2">Confirm Password :</label>
// // //               <input
// // //                 type="password"
// // //                 placeholder="Confirm Password"
// // //                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
// // //                 value={confirmPassword}
// // //                 onChange={(e) => setConfirmPassword(e.target.value)}
// // //               />
// // //             </div>
// // //           </div>
// // //           <button
// // //             type="submit"
// // //             className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
// // //             disabled={isLoading}
// // //           >
// // //             {isLoading ? "Signing Up..." : "Sign Up"}
// // //           </button>
// // //         </form>
// // //         <div className="text-center mt-4">
// // //           <Link href="/Login" className="text-sm text-gray-200">
// // //             Already have an account
// // //           </Link>
// // //         </div>
// // //       </div>
// // //       <footer className="absolute bottom-0 w-full text-center text-white text-sm py-4">
// // //         © Copyright 2024, All Rights Reserved by LECSPACE
// // //       </footer>
// // //     </div>
// // //   );
// // // }

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRegisterMutation } from "../redux/features/auth/authApi"; // Update the import path as needed

// export default function SignUpForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     role: "",
//     password: "",
//     confirmPassword: "",
//     contact: "",
//   });

//   const [register, { isLoading, error, data }] = useRegisterMutation();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     const registrationData = {
//       name: formData.name,
//       email: formData.email,
//       role: formData.role,
//       password: formData.password,
//       contact: formData.contact,
//     };

//     try {
//       await register(registrationData).unwrap();
//       alert("Registration successful");
//       // Redirect to login or another page if needed
//     } catch (error) {
//       console.error("Failed to register:", error);
//       alert("Registration failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-300 flex items-center justify-center">
//       <div className="bg-blue-500 text-white rounded-lg shadow-lg w-full max-w-md p-8">
//         <div className="text-center mb-6">
//           <Image
//             src="/images/usjp-logo.png"
//             alt="University Logo"
//             width={100}
//             height={100}
//             className="mx-auto"
//           />
//           <h1 className="text-2xl font-semibold mt-4">
//             University of Sri Jayewardenepura
//           </h1>
//           <h2 className="text-lg mt-2">LECSPACE</h2>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-2">Full Name :</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-2 rounded border-2 border-gray-300 text-black"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Email :</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Here"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-2 rounded border-2 border-gray-300 text-black"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Role :</label>
//             <input
//               type="text"
//               name="role"
//               placeholder="Lecturer"
//               value={formData.role}
//               onChange={handleChange}
//               className="w-full p-2 rounded border-2 border-gray-300 text-black"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Contact :</label>
//             <input
//               type="text"
//               name="contact"
//               placeholder="Contact Number"
//               value={formData.contact}
//               onChange={handleChange}
//               className="w-full p-2 rounded border-2 border-gray-300 text-black"
//             />
//           </div>
//           <div className="grid grid-cols-2 gap-4 mb-6">
//             <div>
//               <label className="block mb-2">Password :</label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
//               />
//             </div>
//             <div>
//               <label className="block mb-2">Confirm Password :</label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
//               />
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
//             disabled={isLoading}
//           >
//             {isLoading ? "Signing Up..." : "Sign Up"}
//           </button>
//         </form>
//         {error && (
//           <div className="text-red-500 mt-4 text-center">
//             Registration failed. Please try again.
//           </div>
//         )}
//         <div className="text-center mt-4">
//           <Link href="/Login" className="text-sm text-gray-200">
//             Already have an account?
//           </Link>
//         </div>
//       </div>
//       <footer className="absolute bottom-0 w-full text-center text-white text-sm py-4">
//         © Copyright 2024, All Rights Reserved by LECSPACE
//       </footer>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRegisterMutation } from "../redux/features/auth/authApi"; // Update the import path as needed

// export default function SignUpForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     role: "",
//     password: "",
//     confirmPassword: "",
//     contact: "",
//   });

//   const [register, { isLoading, error }] = useRegisterMutation();

//   // TypeScript annotation for the event parameter
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // TypeScript annotation for the event parameter
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     const registrationData = {
//       name: formData.name,
//       email: formData.email,
//       role: formData.role,
//       password: formData.password,
//       contact: formData.contact,
//     };

//     try {
//       await register(registrationData).unwrap();
//       alert("Registration successful");
//       // Redirect to login or another page if needed
//     } catch (error) {
//       console.error("Failed to register:", error);
//       alert("Registration failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-300 flex items-center justify-center">
//       <div className="bg-blue-500 text-white rounded-lg shadow-lg w-full max-w-md p-8">
//         <div className="text-center mb-6">
//           <Image
//             src="/images/usjp-logo.png"
//             alt="University Logo"
//             width={100}
//             height={100}
//             className="mx-auto"
//           />
//           <h1 className="text-2xl font-semibold mt-4">
//             University of Sri Jayewardenepura
//           </h1>
//           <h2 className="text-lg mt-2">LECSPACE</h2>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-2">Full Name :</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-2 rounded border-2 border-gray-300 text-black"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Email :</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Here"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-2 rounded border-2 border-gray-300 text-black"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Role :</label>
//             <input
//               type="text"
//               name="role"
//               placeholder="Lecturer"
//               value={formData.role}
//               onChange={handleChange}
//               className="w-full p-2 rounded border-2 border-gray-300 text-black"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Contact :</label>
//             <input
//               type="text"
//               name="contact"
//               placeholder="Contact Number"
//               value={formData.contact}
//               onChange={handleChange}
//               className="w-full p-2 rounded border-2 border-gray-300 text-black"
//             />
//           </div>
//           <div className="grid grid-cols-2 gap-4 mb-6">
//             <div>
//               <label className="block mb-2">Password :</label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
//               />
//             </div>
//             <div>
//               <label className="block mb-2">Confirm Password :</label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full p-2 rounded border-2 border-gray-300 text-black"
//               />
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
//             disabled={isLoading}
//           >
//             {isLoading ? "Signing Up..." : "Sign Up"}
//           </button>
//         </form>
//         {error && (
//           <div className="text-red-500 mt-4 text-center">
//             Registration failed. Please try again.
//           </div>
//         )}
//         <div className="text-center mt-4">
//           <Link href="/Login" className="text-sm text-gray-200">
//             Already have an account?
//           </Link>
//         </div>
//       </div>
//       <footer className="absolute bottom-0 w-full text-center text-white text-sm py-4">
//         © Copyright 2024, All Rights Reserved by LECSPACE
//       </footer>
//     </div>
//   );
// }

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRegisterMutation } from "../redux/features/auth/authApi"; // Update the import path as needed

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
    contact: "",
  });

  const [register, { isLoading, error }] = useRegisterMutation();

  // TypeScript annotation for the event parameter
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // TypeScript annotation for the event parameter
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const registrationData = {
      name: formData.name,
      email: formData.email,
      role: formData.role,
      password: formData.password,
      contact: formData.contact,
    };

    try {
      await register(registrationData).unwrap();
      alert("Registration successful");
      // Redirect to login or another page if needed
    } catch (error) {
      console.error("Failed to register:", error);
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-300 flex items-center justify-center">
      <div className="bg-blue-500 text-white rounded-lg shadow-lg w-full max-w-md p-8">
        <div className="text-center mb-6">
          <Image
            src="/images/usjp-logo.png"
            alt="University Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
          <h1 className="text-2xl font-semibold mt-4">
            University of Sri Jayewardenepura
          </h1>
          <h2 className="text-lg mt-2">LECSPACE</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Full Name :</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded border-2 border-gray-300 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email :</label>
            <input
              type="email"
              name="email"
              placeholder="Email Here"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded border-2 border-gray-300 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Role :</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 rounded border-2 border-gray-300 text-black"
            >
              <option value="" disabled>Select your role</option>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="DR">Doctor</option>
              <option value="LECTURER">Lecturer</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Contact :</label>
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-2 rounded border-2 border-gray-300 text-black"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block mb-2">Password :</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 rounded border-2 border-gray-300 text-black"
              />
            </div>
            <div>
              <label className="block mb-2">Confirm Password :</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 rounded border-2 border-gray-300 text-black"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
            disabled={isLoading}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        {error && (
          <div className="text-red-500 mt-4 text-center">
            Registration failed. Please try again.
          </div>
        )}
        <div className="text-center mt-4">
          <Link href="/Login" className="text-sm text-gray-200">
            Already have an account?
          </Link>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full text-center text-white text-sm py-4">
        © Copyright 2024, All Rights Reserved by LECSPACE
      </footer>
    </div>
  );
}

