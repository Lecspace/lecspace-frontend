import Image from 'next/image';
import Link from 'next/link';

export default function SignInForm() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-300 flex items-center justify-center">
      <div className="bg-blue-500 text-white rounded-lg shadow-lg w-full max-w-md p-8">
        <div className="bg-white text-center mb-6 rounded-lg p-6 shadow-md">
          <Image 
            src="/images/usjp-logo.png" // Ensure this image path is correct
            alt="University Logo" 
            width={100} 
            height={100}
            className="mx-auto"
          />
          <h1 className="text-2xl font-semibold mt-4 text-black">University of Sri Jayewardenepura</h1>
          <h2 className="text-lg mt-2 text-black">LECSPACE</h2>
        </div>
        <h2 className="text-lg text-center font-semibold mb-4">Sign In</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Email :</label>
            <input 
              type="email" 
              placeholder="University Email Here" 
              className="w-full p-2 rounded border-2 border-gray-300 text-black"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2">Password :</label>
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-2 rounded border-2 border-gray-300 text-black"
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-4">
          <Link href="/Register" className="text-sm text-gray-200">I don't have an account</Link>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full text-center text-white text-sm py-4">
        © Copyright 2024, All Rights Reserved by LECSPACE
      </footer>
    </div>
  );
}
