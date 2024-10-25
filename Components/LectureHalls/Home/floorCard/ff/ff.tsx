import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import FF from "@/Components/LectureHalls/Home/floorCard/ff/pics/ffCard.jpg"
import Link from 'next/link';


function ff() {
  return (
    <div>
        <Link href="/lecFFHome">
        <Card
            className="max-w-full rounded md:max-w-xs xl:max-w-[18rem]"
            renderImage={() => 
            <Image 
            width={780} 
            height={500} 
            src={FF} 
            alt="image 1" 
            />}
            >
            <div>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                First Floor <br/> 
                Lecture Halls
            </h5>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                LGF 1-12
            </p>
        </Card>
        </Link>
    </div>
  )
}

export default ff