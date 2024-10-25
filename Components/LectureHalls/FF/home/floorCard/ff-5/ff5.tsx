import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import FF5 from "@/Components/LectureHalls/FF/home/floorCard/ff-5/pics/ff5Card.jpg"
import Link from 'next/link';

function ff5() {
  return (
    <div className=''>
    <Link href="/lecturehalls/ff/ff5">
      <Card
        className="max-w-full md:max-w-xs xl:max-w-[18rem] rounded"
        renderImage={() => 
        <Image 
        width={780} 
        height={500} 
        src={FF5}
        alt="image 1" />}
      >
    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      First Floor <br/>
      Lecture Hall 05
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     FF 05
    </p>
  </Card>
  </Link>    
  </div>
  )
}

export default ff5