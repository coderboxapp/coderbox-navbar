
import React from 'react'
import { storiesOf, action } from '@storybook/react'

import Navbar from './components/Navbar'
import NavbarItem from './components/NavbarItem'

const Logo = () => {
  return <img src='https://s3-eu-west-1.amazonaws.com/coderbox/logos/coderbox-blue.png' height='50' />
}

storiesOf('NavBar', module)
  .add('simple usage', () => {
    return (
      <Navbar isDanger brand={<Logo />}>
        <NavbarItem isActive text='My Profile' icon='timeline' />
        <NavbarItem text='Jobs' icon='work' />
        <NavbarItem text='Sign Out' icon='close' onClick={action('log out')} />
      </Navbar>
    )
  })
