import React from 'react'
import Navbar from '@/Components/Navbar'
import Carousel from '@/Components/LectureHalls/GF/home/carousel/carousel'
import TitleCard from '@/Components/LectureHalls/GF/home/title card/titlecard'
import GF1Card from '@/Components/LectureHalls/GF/home/floorCard/gf-1/gf1'
import GF2Card from '@/Components/LectureHalls/GF/home/floorCard/gf-2/gf2'
import GF3Card from '@/Components/LectureHalls/GF/home/floorCard/gf-3/gf3'
import GF4Card from '@/Components/LectureHalls/GF/home/floorCard/gf-4/gf4'
import GF5Card from '@/Components/LectureHalls/GF/home/floorCard/gf-5/gf5'
import GF6Card from '@/Components/LectureHalls/GF/home/floorCard/gf-6/gf6'
import GF7Card from '@/Components/LectureHalls/GF/home/floorCard/gf-7/gf7'
import GF8Card from '@/Components/LectureHalls/GF/home/floorCard/gf-8/gf8'
import GF9Card from '@/Components/LectureHalls/GF/home/floorCard/gf-9/gf9'
import Footer from '@/Components/Footer'

function lecGFHome() {
  return (
    <div className='flex flex-col'>
    <div className='z-10 '>
      <Navbar/>
    </div>
    <div className='z-0 mt-20'>
      <Carousel/>
    </div>
    <div className='z-0'>
      <TitleCard/>
    </div>
    <div className=" flex flex-wrap justify-self-center md:justify-evenly xl:justify-evenly m-4 md:mt-7  gap-y-4 ">
    <GF1Card />
    <GF2Card />
    <GF3Card/>
    <GF4Card/>
    <GF5Card/>
    <GF6Card/>
    <GF7Card/>
    <GF8Card/>
    <GF9Card/>
    </div>
    <Footer/>
  </div>
  )
}

export default lecGFHome