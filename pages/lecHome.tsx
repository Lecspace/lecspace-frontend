import React from 'react'
import Navbar from '@/Components/Navbar'
import Carousel from '@/Components/LectureHalls/Home/carousel/index';
import TitleCard from '@/Components/LectureHalls/Home/titleCard/titleCard';
import LGFCard from "@/Components/LectureHalls/Home/floorCard/lgf/lgf";
import GFCard from "@/Components/LectureHalls/Home/floorCard/gf/gf";
import FFCard from "@/Components/LectureHalls/Home/floorCard/ff/ff";
import SFCard from "@/Components/LectureHalls/Home/floorCard/sf/sf"
import Footer from "@/Components/Footer"

function lecHome() {
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
    <div className=" z-0 flex flex-wrap justify-self-center md:justify-evenly xl:justify-evenly m-4 md:mt-7  gap-y-4 ">
        <LGFCard />
        <GFCard />
        <FFCard />
        <SFCard />
    </div>
    <Footer/>

</div>
  )
}

export default lecHome