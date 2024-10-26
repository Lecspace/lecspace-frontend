import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import FF9 from "@/Components/LectureHalls/FF/home/floorCard/ff-9/pics/ff9Card.jpg"
import Link from 'next/link';

function ff9() {
  return (
    <div className=''>
    <Link href="/lecturehalls/ff/ff9">
      <Card
        className="max-w-full md:max-w-xs xl:max-w-[18rem] rounded"
        renderImage={() => 
        <Image 
        width={780} 
        height={500} 
        src={FF9}
        alt="image 1" />}
      >
    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      First Floor <br/>
      Lecture Hall 09
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     FF 09
    </p>
  </Card>
  </Link>    
  </div>
  )
}

export default ff9