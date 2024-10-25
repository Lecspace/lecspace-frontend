import React from 'react'
import { Card } from "flowbite-react";
import { List, ListItem } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";

function lgf1dc() {
  return (
    <div>
    <Card className="max-w-full rounded md:max-w-md xl:max-w-2xl">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        Resources Available in the Lecture Hall
      </h5>
      <List className="font-normal text-gray-700 dark:text-gray-400">
      <ListItem icon={HiCheckCircle}> Bla Bla Bla (and up to 100 characters)</ListItem>
      <ListItem icon={HiCheckCircle}> Bla Bla Bla Bla Bla</ListItem>
      <ListItem icon={HiCheckCircle}> Bla Bla Bla Bla Bla , e.g., ! @ # ?</ListItem>
    </List>
    </Card>
    </div>
  )
}

export default lgf1dc