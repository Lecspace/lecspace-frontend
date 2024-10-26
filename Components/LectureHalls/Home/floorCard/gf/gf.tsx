import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import GF from "@/Components/LectureHalls/Home/floorCard/gf/pics/gfCard.jpg"
import Link from 'next/link';

function gf() {
  return (
    <div className=''>
      <Link href="/LectureHalls/lecHome/lecGFHome">
        <Card
          className="max-w-full md:max-w-xs xl:max-w-[18rem] rounded"
          renderImage={() =>
          <Image
          width={780}
          height={500}
          src={GF}
          alt="image 1" />}
        >
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Ground Floor <br/>
        Lecture Halls
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       GF 1 - 09
      </p>
    </Card>
    </Link>    
    </div>
  )
}

export default gf