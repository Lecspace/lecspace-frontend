import React from 'react'
import Navbar from '@/Components/Navbar'
import Carousel from '@/Components/LectureHalls/FF/home/carousel/carousel'
import TitleCard from '@/Components/LectureHalls/FF/home/title card/titlecard'
import FF1Card from '@/Components/LectureHalls/FF/home/floorCard/ff-1/ff1'
import FF2Card from '@/Components/LectureHalls/FF/home/floorCard/ff-2/ff2'
import FF3Card from '@/Components/LectureHalls/FF/home/floorCard/ff-3/ff3'
import FF4Card from '@/Components/LectureHalls/FF/home/floorCard/ff-4/ff4'
import FF5Card from '@/Components/LectureHalls/FF/home/floorCard/ff-5/ff5'
import FF6Card from '@/Components/LectureHalls/FF/home/floorCard/ff-6/ff6'
import FF7Card from '@/Components/LectureHalls/FF/home/floorCard/ff-7/ff7'
import FF8Card from '@/Components/LectureHalls/FF/home/floorCard/ff-8/ff8'
import FF9Card from '@/Components/LectureHalls/FF/home/floorCard/ff-9/ff9'
import FF10Card from '@/Components/LectureHalls/FF/home/floorCard/ff-10/ff10'
import FF11Card from '@/Components/LectureHalls/FF/home/floorCard/ff-11/ff11'
import FF12Card from '@/Components/LectureHalls/FF/home/floorCard/ff-12/ff12'
import Footer from '@/Components/Footer'

function lecFFHome() {
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
        <FF1Card />
        <FF2Card />
        <FF3Card/>
        <FF4Card/>
        <FF5Card/>
        <FF6Card/>
        <FF7Card/>
        <FF8Card/>
        <FF9Card/>
        <FF10Card/>
        <FF11Card/>
        <FF12Card/>
        </div>
        <Footer/>
    </div>
    
  )
}

export default lecFFHome