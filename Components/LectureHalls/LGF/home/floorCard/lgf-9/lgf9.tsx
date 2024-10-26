import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import LGF9 from "@/Components/LectureHalls/LGF/home/floorCard/lgf-9/pics/lgf9Card.jpg"
import Link from 'next/link';

function lgf9() {
  return (
    <div className=''>
    <Link href="/lecturehalls/lgf/lgf9">
      <Card
        className="max-w-full md:max-w-xs xl:max-w-[18rem] rounded"
        renderImage={() => 
        <Image 
        width={780} 
        height={500} 
        src={LGF9}
        alt="image 1" />}
      >
    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Lower Ground Floor <br/>
      Lecture Hall 09
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     LGF 09
    </p>
  </Card>
  </Link>    
  </div>
  )
}

export default lgf9