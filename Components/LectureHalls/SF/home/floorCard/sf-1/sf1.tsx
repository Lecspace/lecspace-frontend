import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import SF1 from "@/Components/LectureHalls/SF/home/floorCard/sf-1/pics/sf1Card.jpg"
import Link from 'next/link';


function sf1() {
  return (
    <div>
        <Link href="/lecturehalls/sf/sf1">
        <Card
            className="max-w-full rounded md:max-w-xs xl:max-w-[18rem]"
            renderImage={() => 
            <Image 
            width={780} 
            height={500} 
            src={SF1} 
            alt="image 1" 
            />}
            >
            <div>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Second Floor <br/> 
                Lecture Hall 01
            </h5>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                SF 01
            </p>
        </Card>
        </Link>
    </div>
  )
}

export default sf1