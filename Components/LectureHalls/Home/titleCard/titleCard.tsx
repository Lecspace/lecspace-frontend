import React from 'react'
import { Button, Card } from "flowbite-react";
import DropdownMenue from "@/Components/LectureHalls/Home/availabilityDrop/availability"
import DropdownTime from "@/Components/LectureHalls/Home/availabilityTime/availabilityTime"
import Link from 'next/link';


function titleCard() {
  return (
    <div className="flex  mx-16 my-3 sm:mx-12 sm:mt-28 ">
      <Card className="  z-20 w-full h-80 sm:h-52 lg:h-40 xl:h-40 ">
        <div className='grid sm:flex flex-wrap sm:justify-evenly'>
          <div className='justify-self-center '>
            <h5 className="mb-3 sm:my-3 text-center text-lg font-semibold tracking-tight   text-gray-900 dark:text-white">
              Check Availability
            </h5>
            <DropdownMenue/>
          </div>
          <div className='justify-self-center'>
          <h5 className="my-3 text-lg text-center font-semibold tracking-tight   text-gray-900 dark:text-white">
              Select Date & Time
            </h5>
            <DropdownTime/>
          </div>
          <div className='justify-self-center mt-16 sm:mx-36 sm:mt-14 sm:mb-4 md:mx-48 lg:mx-0 lg:mt-[3.25rem]'>
            <Button className=" text-sm font-semibold tracking-tight ">
              Check Availability
              <svg className="-mr-1 ml-2 mt-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default titleCard