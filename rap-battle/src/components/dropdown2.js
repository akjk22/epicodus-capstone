import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const friendOptions = [
  {
    key: 'Marlon Craft',
    text: 'Marlon Craft',
    value: 'Marlon Craft',
    image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Andre 3000',
    text: 'Andre 3000',
    value: 'Andre 3000',
    image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Nas',
    text: 'Nas',
    value: 'Nas',
    image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
  },
  {
    key: 'J. Cole',
    text: 'J. Cole',
    value: 'J. Cole',
    image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
  },
  {
    key: 'Eminem',
    text: 'Eminem',
    value: 'Eminem',
    image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
  },
]

const DropdownExampleSelection = () => (
  <Dropdown
    placeholder='Select Rapper'
    fluid
    selection
    options={friendOptions}
  />
)

export default DropdownExampleSelection