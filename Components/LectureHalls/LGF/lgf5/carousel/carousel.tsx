
import Image from 'next/image'
import { Carousel } from "flowbite-react";
import React from 'react'
import Pic1 from '@/components//lecturehall/lgf/lgf5/carousel/lgf5main.jpg'

function carousel() {
  return (
    
    <div className="h-[45dvw] sm:h-64 lg:h-[22rem] xl:h-[22rem]  bg-gray-100 dark:bg-gray-900 ">
      <Carousel className="h-[60dvw] sm:h-[25rem] lg:h-[32rem] xl:h-[32rem] rounded-none z-0 bg-gray-100 dark:bg-gray-900 ">
      <Image className="w-[dvw] h-[80dvh]"
        src= {Pic1}
        quality={100}
        alt="Picture of the author"
        />
        <Image className="w-[dvw] h-[90dvh]"
        src= {Pic1}
        quality={100}
        alt="Picture of the author"
        />
        <Image className="w-[dvw] h-[90dvh]"
        src= {Pic1}
        quality={100}
        alt="Picture of the author"
        />
        <Image className="w-[dvw] h-[90dvh]"
        src= {Pic1}
        quality={100}
        alt="Picture of the author"
        />
        <Image className="w-[dvw] h-[90dvh]"
        src= {Pic1}
        quality={100}
        alt="Picture of the author"
        />
      </Carousel>
    </div>
  )
}

export default carousel