import React from 'react'
import { storiesOf, action } from '@storybook/react'
import styled from 'styled-components'

import Navbar from './components/Navbar'
import NavbarItem from './components/NavbarItem'

const Logo = ({ isWhite, isSize = 50, ...props }) => {
  return (
    <img
      src={`https://s3-eu-west-1.amazonaws.com/coderbox/logos/coderbox-${isWhite ? 'white' : 'blue'}.png`}
      height={isSize}
    />
  )
}

const Wrapper = styled.div`
  width: '100%';
  height: 500px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #ccc;

  > * {
    margin: 10px 0;
  }
`

const PrimaryButton = styled.a`
  border-radius: 5px;
  background-color: #1b8ceb;
  padding: 8px 14px;
  color: white;
`

storiesOf('NavBar', module)
  .add('simple usage', () => {
    return (
      <Wrapper>
        <Navbar isColor='white' brand={<Logo />}>
          <NavbarItem href='#' isActive hasIcon='timeline'>Home</NavbarItem>
          <NavbarItem href='/jobs' hasIcon='work'>Jobs</NavbarItem>
          <NavbarItem href='/signout' hasIcon='close' onClick={action('log out')}>
            Sign Out
          </NavbarItem>
        </Navbar>
        <Navbar isColor='success' hasActiveColor='white' brand={<Logo isWhite />}>
          <NavbarItem href='#'>Home</NavbarItem>
          <NavbarItem href='#'>Jobs</NavbarItem>
          <NavbarItem>
            <PrimaryButton>Sign Out</PrimaryButton>
          </NavbarItem>
        </Navbar>
      </Wrapper>
    )
  })
