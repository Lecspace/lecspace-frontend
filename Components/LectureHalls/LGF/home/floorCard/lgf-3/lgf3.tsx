import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import LGF3 from "@/Components/LectureHalls/LGF/home/floorCard/lgf-3/pics/lgf3Card.jpg"
import Link from 'next/link';

function lgf3() {
  return (
    <div className=''>
    <Link href="/lecturehalls/lgf/lgf3">
      <Card
        className="max-w-full md:max-w-xs xl:max-w-[18rem] rounded"
        renderImage={() => 
        <Image 
        width={780} 
        height={500} 
        src={LGF3}
        alt="image 1" />}
      >
    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Lower Ground Floor <br/>
      Lecture Hall 03
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     LGF 03
    </p>
  </Card>
  </Link>    
  </div>
  )
}

export default lgf3