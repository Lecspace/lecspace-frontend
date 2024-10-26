import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import LGF from "@/Components/LectureHalls/Home/floorCard/lgf/pics/lgfCard.jpg"
import Link from 'next/link';

function lgf() {
  return (
    <div className=''>
      <Link href="/LectureHalls/lecHome/lecLGFHome">
        <Card
          className="max-w-full md:max-w-xs xl:max-w-[18rem] rounded"
          renderImage={() => 
          <Image 
          width={780} 
          height={500} 
          src={LGF}
          alt="image 1" />}
        >
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Lower Ground Floor <br/>
        Lecture Halls
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       LGF 1 - 09
      </p>
    </Card>
    </Link>    
    </div>
  )
}

export default lgf