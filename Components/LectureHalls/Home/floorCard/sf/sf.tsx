import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import SF from "@/Components/LectureHalls/Home/floorCard/sf/pics/sfCard.jpg"
import Link from 'next/link';


function sf() {
  return (
    <div>
        <Link href="/lecSFHome">
            <Card className="max-w-full rounded md:max-w-xs xl:max-w-[18rem]"
                renderImage={() => 
                <Image 
                width={780} 
                height={500} 
                src= {SF} 
                priority={true}
                alt="image 1" />}
            >
            <div>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Second Floor <br/>
                Lecture Halls
            </h5>
            </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    SF 1-2
                </p>
            </Card>
        </Link>
    </div>
  )
}

export default sf