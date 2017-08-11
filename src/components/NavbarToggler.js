import React from 'react'
import css from 'classnames'
import { Icon } from '@coderbox/atoms'
import * as s from '../styles'

const NavbarToggler = ({ onClick, ...props }) => {
  let className = css('navbar-toggler', props.className)

  return (
    <s.NavbarToggler className={className} {...props}>
      <Icon name='bars' withSize='large' onClick={onClick} />
    </s.NavbarToggler>
  )
}

export default NavbarToggler
