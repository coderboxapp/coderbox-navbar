
import React from 'react'
import { storiesOf } from '@storybook/react'

import Navbar from './components/Navbar'
import NavbarItem from './components/NavbarItem'

const Logo = () => {
  return <img src='https://s3-eu-west-1.amazonaws.com/coderbox/logos/coderbox-blue.png' height='50' />
}

storiesOf('NavBar', module)
  .add('simple usage', () => {
    return (
      <Navbar brand={<Logo />}>
        <NavbarItem text='Profile' icon='timeline' />
        <NavbarItem text='Jobs' icon='work' />
      </Navbar>
    )
  })
