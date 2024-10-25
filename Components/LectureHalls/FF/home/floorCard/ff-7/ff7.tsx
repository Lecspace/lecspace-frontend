import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import FF7 from "@/Components/LectureHalls/FF/home/floorCard/ff-7/pics/ff7Card.jpg"
import Link from 'next/link';

function ff7() {
  return (
    <div className=''>
    <Link href="/lecturehalls/ff/ff7">
      <Card
        className="max-w-full md:max-w-xs xl:max-w-[18rem] rounded"
        renderImage={() => 
        <Image 
        width={780} 
        height={500} 
        src={FF7}
        alt="image 1" />}
      >
    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      First Floor <br/>
      Lecture Hall 07
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     FF 07
    </p>
  </Card>
  </Link>    
  </div>
  )
}

export default ff7