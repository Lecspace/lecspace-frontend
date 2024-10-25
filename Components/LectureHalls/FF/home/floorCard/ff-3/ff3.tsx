import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import FF3 from "@/Components/LectureHalls/FF/home/floorCard/ff-3/pics/ff3Card.jpg"
import Link from 'next/link';

function ff3() {
  return (
    <div className=''>
    <Link href="/lecturehalls/ff/ff3">
      <Card
        className="max-w-full md:max-w-xs xl:max-w-[18rem] rounded"
        renderImage={() => 
        <Image 
        width={780} 
        height={500} 
        src={FF3}
        alt="image 1" />}
      >
    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      First Floor <br/>
      Lecture Hall 03
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     FF 03
    </p>
  </Card>
  </Link>    
  </div>
  )
}

export default ff3