import Image from "next/image";
import Link from "next/link";

export default function SignUpForm() {
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
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2">First Name :</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 rounded border-2 border-gray-300 text-black"
              />
            </div>
            <div>
              <label className="block mb-2">Last Name :</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 rounded border-2 border-gray-300 text-black"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email :</label>
            <input
              type="email"
              placeholder="Email Here"
              className="w-full p-2 rounded border-2 border-gray-300 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Role :</label>
            <input
              type="text"
              placeholder="Lecturer"
              className="w-full p-2 rounded border-2 border-gray-300 text-black"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block mb-2">Password :</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 rounded border-2 border-gray-300 text-black"
              />
            </div>
            <div>
              <label className="block mb-2">Confirm Password :</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 rounded border-2 border-gray-300 text-black"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <Link href="/Login" className="text-sm text-gray-200">
            Already have an account
          </Link>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full text-center text-white text-sm py-4">
        © Copyright 2024, All Rights Reserved by LECSPACE
      </footer>
    </div>
  );
}
