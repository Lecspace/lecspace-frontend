import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import LGF5 from "@/Components/LectureHalls/LGF/home/floorCard/lgf-5/pics/lgf5Card.jpg"
import Link from 'next/link';

function lgf5() {
  return (
    <div className=''>
    <Link href="/lecturehalls/lgf/lgf5">
      <Card
        className="max-w-full md:max-w-xs xl:max-w-[18rem] rounded"
        renderImage={() => 
        <Image 
        width={780} 
        height={500} 
        src={LGF5}
        alt="image 1" />}
      >
    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Lower Ground Floor <br/>
      Lecture Hall 05
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     LGF 05
    </p>
  </Card>
  </Link>    
  </div>
  )
}

export default lgf5