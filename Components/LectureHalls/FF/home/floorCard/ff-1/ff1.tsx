import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import FF1 from "@/Components/LectureHalls/FF/ff1/carousel/ff1main.jpg"
import Link from 'next/link';


function ff1() {
  return (
    <div>
        <Link href="/lecturehalls/ff1">
        <Card
            className="max-w-full rounded md:max-w-xs xl:max-w-[18rem]"
            renderImage={() => 
            <Image 
            width={780} 
            height={500} 
            src={FF1} 
            alt="image 1" 
            />}
            >
            <div>
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                First Floor <br/> 
                Lecture Hall 01
              </h5>
            </div>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                FF 01
              </p>
        </Card>
        </Link>
    </div>
  )
}

export default ff1