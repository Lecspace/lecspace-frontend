import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import GF2 from "@/Components/LectureHalls/GF/home/floorCard/gf-2/pics/gf2Card.jpg"
import Link from 'next/link';

function gf2() {
  return (
    <div className=''>
    <Link href="/lecturehalls/gf/gf2">
      <Card
        className="max-w-full md:max-w-xs xl:max-w-[18rem] rounded"
        renderImage={() => 
        <Image 
        width={780} 
        height={500} 
        src={GF2}
        alt="image 1" />}
      >
    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Ground Floor <br/>
      Lecture Hall 02
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     GF 02
    </p>
  </Card>
  </Link>    
  </div>
  )
}

export default gf2