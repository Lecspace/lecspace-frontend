import React from 'react'
import { Dropdown, DropdownItem } from "flowbite-react";

function availabilityTime() {
  return (
    <div>
    <Dropdown label=" Select The Time " dismissOnClick={false} >
      <DropdownItem>Under Dev.</DropdownItem>
    </Dropdown>
    </div>
  )
}

export default availabilityTime