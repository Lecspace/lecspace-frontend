import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import LGF8 from "@/Components/LectureHalls/LGF/home/floorCard/lgf-8/pics/lgf8Card.jpg"
import Link from 'next/link';

function lgf8() {
  return (
    <div className=''>
    <Link href="/lecturehalls/lgf/lgf8">
      <Card
        className="max-w-full md:max-w-xs xl:max-w-[18rem] rounded"
        renderImage={() => 
        <Image 
        width={780} 
        height={500} 
        src={LGF8}
        alt="image 1" />}
      >
    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Lower Ground Floor <br/>
      Lecture Hall 08
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     LGF 08
    </p>
  </Card>
  </Link>    
  </div>
  )
}

export default lgf8