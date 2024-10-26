import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import FF10 from "@/Components/LectureHalls/FF/ff10/carousel/ff10main.jpg"
import Link from 'next/link';


function ff10() {
  return (
    <div>
        <Link href="/lecturehalls/ff/ff10">
        <Card
            className="max-w-full rounded md:max-w-xs xl:max-w-[18rem]"
            renderImage={() => 
            <Image 
            width={780} 
            height={500} 
            src={FF10} 
            alt="image 1" 
            />}
            >
            <div>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                First Floor <br/> 
                Lecture Hall 10
            </h5>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                FF 10
            </p>
        </Card>
        </Link>
    </div>
  )
}

export default ff10