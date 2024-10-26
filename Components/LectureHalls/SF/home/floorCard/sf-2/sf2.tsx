import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import SF2 from "@/Components/LectureHalls/SF/home/floorCard/sf-2/pics/sf2Card.jpg"
import Link from 'next/link';

function sf2() {
  return (
    <div className=''>
    <Link href="/lecturehalls/sf/sf2">
      <Card
        className="max-w-full md:max-w-xs xl:max-w-[18rem] rounded"
        renderImage={() => 
        <Image 
        width={780} 
        height={500} 
        src={SF2}
        alt="image 1" />}
      >
    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Second Floor <br/>
      Lecture Hall 02
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     SF 02
    </p>
  </Card>
  </Link>    
  </div>
  )
}

export default sf2