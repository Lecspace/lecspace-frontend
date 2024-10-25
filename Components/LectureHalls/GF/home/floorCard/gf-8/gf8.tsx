import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import GF8 from "@/Components/LectureHalls/GF/home/floorCard/gf-8/pics/gf8Card.jpg"
import Link from 'next/link';

function gf8() {
  return (
    <div className=''>
    <Link href="/lecturehalls/gf/gf8">
      <Card
        className="max-w-full md:max-w-xs xl:max-w-[18rem] rounded"
        renderImage={() =>
        <Image
        width={780} 
        height={500} 
        src={GF8}
        alt="image 1" />}
      >
    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Ground Floor <br/>
      Lecture Hall 08
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     GF 08
    </p>
  </Card>
  </Link>    
  </div>
  )
}

export default gf8