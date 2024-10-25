import React from 'react'
import Navbar from '@/Components/Navbar'
import Carousel from '@/Components/LectureHalls/LGF/home/carousel/carousel'
import TitleCard from '@/Components/LectureHalls/LGF/home/title card/titlecard'
import LGF1Card from '@/Components/LectureHalls/LGF/home/floorCard/lgf-1/lgf1'
import LGF2Card from '@/Components/LectureHalls/LGF/home/floorCard/lgf-2/lgf2'
import LGF3Card from '@/Components/LectureHalls/LGF/home/floorCard/lgf-3/lgf3'
import LGF4Card from '@/Components/LectureHalls/LGF/home/floorCard/lgf-4/lgf4'
import LGF5Card from '@/Components/LectureHalls/LGF/home/floorCard/lgf-5/lgf5'
import LGF6Card from '@/Components/LectureHalls/LGF/home/floorCard/lgf-6/lgf6'
import LGF7Card from '@/Components/LectureHalls/LGF/home/floorCard/lgf-7/lgf7'
import LGF8Card from '@/Components/LectureHalls/LGF/home/floorCard/lgf-8/lgf8'
import LGF9Card from '@/Components/LectureHalls/LGF/home/floorCard/lgf-9/lgf9'
import Footer from '@/Components/Footer'

function lecLGFHome() {
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
      <LGF1Card />
      <LGF2Card />
      <LGF3Card/>
      <LGF4Card/>
      <LGF5Card/>
      <LGF6Card/>
      <LGF7Card/>
      <LGF8Card/>
      <LGF9Card/>
      </div>
      <Footer/>
    </div>
  )
}

export default lecLGFHome