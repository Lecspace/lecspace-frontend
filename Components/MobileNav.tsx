import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Link from 'next/link';

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ nav, closeNav}: Props) => {
    const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#6d83a3]`}>
        <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
          <Link href="/HeroPage" className='nav-link-mobile'>Home</Link>
          <div className='nav-link-mobile'>Labs</div>
          <div className='nav-link-mobile'>Lecture Halls</div>
          <div className='nav-link-mobile'>Profile</div>
          <Link href="/Contact" className='nav-link-mobile'>Contact</Link>
          {/* <button className="nav-link-mobile-but bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Admin</button> */}
          <Link href="/Login"><button className="nav-link-mobile-but bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log in</button></Link>
        </div>
        <div onClick={closeNav} className='absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-blue'>
            <XMarkIcon />
        </div>
    </div>
  )
}

export default MobileNav
