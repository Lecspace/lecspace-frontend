import React from 'react'
import { Card } from "flowbite-react";
import Image from "next/image";
import gF1 from "@/Components/LectureHalls/GF/home/floorCard/gf-1/pics/gf1Card.jpg"
import Link from 'next/link';


function gf1() {
  return (
    <div>
        <Link href="/lecturehalls/gf/gf1">
        <Card
            className="max-w-full rounded md:max-w-xs xl:max-w-[18rem]"
            renderImage={() => 
            <Image 
            width={780} 
            height={500} 
            src={gF1} 
            alt="image 1" 
            />}
            >
            <div>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Ground Floor <br/>
                Lecture Hall 01
            </h5>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                GF 01
            </p>
        </Card>
        </Link>
    </div>
  )
}

export default gf1