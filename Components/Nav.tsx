import { Bars3Icon } from '@heroicons/react/16/solid';
import React from 'react';
import Link from 'next/link';
import { CgProfile } from "react-icons/cg"; 




interface Props {
    openNav: () => void;
  }

const Nav = ({openNav}:Props) => {
  return (
    <div className="w-[100%] fixed top-0 h-[12vh] bg-[#f7f7f7] shadow-md">
      <div className='flex items-center justify-between w-[90%] mx-auto h-[100%]'>
        <h1 className='cursor-pointer text-[25px] text-blue-500 font-bold'>
          LEC<span className='text-black'>SPACE</span>
        </h1>
        <div className='flex-1 flex justify-center space-x-10'>
          <Link href="/HeroPage" className='nav-link'>Home</Link>
          <Link href="/" className='nav-link'>Labs</Link>
          <Link href="/lecHome" className='nav-link'>Lecture Halls</Link>
          <Link href="/Cal" className='nav-link'>Calendar</Link>
          <Link href="/Contact" className='nav-link'>Contact</Link>
        </div>
        <div className='flex space-x-4'>
        <div className="flex items-center space-x-4">
        <Link href="/Profile" className="text-black flex flex-col items-center">
          <CgProfile className="text-3xl" />
        </Link>
      </div>
          <Link href="Admin"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Admin</button></Link>
          <Link href="Login"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log in</button></Link>
          <div onClick={openNav}>
          <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-blue' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;



