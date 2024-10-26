import React from 'react'
import Navbar from '@/Components/Navbar'
import Carousel from '@/Components/LectureHalls/SF/home/carousel/carousel'
import TitleCard from '@/Components/LectureHalls/SF/home/title card/titlecard'
import SF1Card from '@/Components/LectureHalls/SF/home/floorCard/sf-1/sf1'
import SF2Card from '@/Components/LectureHalls/SF/home/floorCard/sf-2/sf2'
import Footer from '@/Components/Footer'

function lecSFHome() {
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
    <SF1Card />
    <SF2Card />
    </div>
    <Footer/>
  </div>
  )
}

export default lecSFHome