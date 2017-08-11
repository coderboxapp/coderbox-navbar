import React from 'react'
import { withTheme } from 'utils'
import { storiesOf, action } from '@storybook/react'
import { Button, Icon } from '@coderbox/atoms'
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

storiesOf('NavBar', module)
  .add('simple usage', withTheme(() => {
    return (
      <Wrapper>

        <Navbar isStatic brand={<Logo />}>
          <NavbarItem href='#'>Home</NavbarItem>
          <NavbarItem href='#'>
            <Button withColor='primary'><Icon name='twitter' /> Twitter</Button>
          </NavbarItem>
          <NavbarItem>
            <Button withColor='success'>Sign Out</Button>
          </NavbarItem>
        </Navbar>

        <Navbar withColor='white' hasBorders brand={<Logo />}>
          <NavbarItem href='#' isActive withIcon='star'>Home</NavbarItem>
          <NavbarItem href='/jobs' withIcon='briefcase'>Jobs</NavbarItem>
          <NavbarItem href='/signout' withIcon='close' onClick={action('log out')}>
            Sign Out
          </NavbarItem>
        </Navbar>

        <Navbar withColor='success' brand={<Logo isWhite />}>
          <NavbarItem href='#'>Home</NavbarItem>
          <NavbarItem href='#'>Jobs</NavbarItem>
          <NavbarItem>
            <Button>Sign Out</Button>
          </NavbarItem>
        </Navbar>
      </Wrapper>
    )
  }))
