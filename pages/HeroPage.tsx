import React from 'react'
import Nav from '@/Components/Nav'
import MobileNav from '@/Components/MobileNav'
import Hero from '@/Components/Hero'
import { useState } from 'react'
import Footer from '@/Components/Footer'


const HeroPage = () => {

   const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  

  return (
    <div>
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />
      <Hero />
      <Footer />

    </div>
  )
}

export default HeroPage
