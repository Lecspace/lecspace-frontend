import React from 'react'
import { Dropdown, DropdownItem } from "flowbite-react";

function availability() {
  return (
    <div>
    <Dropdown label="Select Lecture Hall" dismissOnClick={false} >
      <DropdownItem>SF-1</DropdownItem>
      <DropdownItem>SF-2</DropdownItem>
      <DropdownItem>FF-1</DropdownItem>
      <DropdownItem>FF-2</DropdownItem>
    </Dropdown>
    </div>
  )
}

export default availability