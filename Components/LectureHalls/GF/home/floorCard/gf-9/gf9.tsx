import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import GF9 from "@/Components/LectureHalls/GF/home/floorCard/gf-9/pics/gf9Card.jpg"
import Link from 'next/link';

function gf9() {
  return (
    <div className=''>
    <Link href="/lecturehalls/gf/gf9">
      <Card
        className="max-w-full md:max-w-xs xl:max-w-[18rem] rounded"
        renderImage={() => 
        <Image 
        width={780} 
        height={500} 
        src={GF9}
        alt="image 1" />}
      >
    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Ground Floor <br/>
      Lecture Hall 09
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     GF 09
    </p>
  </Card>
  </Link>    
  </div>
  )
}

export default gf9