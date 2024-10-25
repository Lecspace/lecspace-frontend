import React from 'react'
import { Button, Card } from "flowbite-react";


function TitleCard() {
  return (
    <div className="flex  mx-5 my-3 sm:mx-12 sm:mt-28 ">
      <Card className="  z-20 w-full h-32 sm:h-24">
        <div className='grid sm:flex flex-wrap sm:justify-evenly'>
          <div className='justify-self-center '>
            <h5 className="mb-3 sm:my-3 text-center text-lg sm:text-xl xl:text-2xl font-semibold tracking-tight   text-gray-900 dark:text-white">
              Lower Ground Lecture Hall 05 - LGF 05
            </h5>
          </div>
          <div className='justify-self-center mt-5 sm:mx-10 sm:mt-2 '>
            <Button className=" text-sm sm:text-lg xl:text-xl font-semibold tracking-tight ">
              Book Now
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

export default TitleCard