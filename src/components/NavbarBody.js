import React from 'react'
import css from 'classnames'
import * as s from '../styles'

const NavbarBody = ({ isOpen, children, ...props }) => {
  let className = css('navbar-body', props.className)

  return (
    <s.NavbarBody isOpen={isOpen} className={className} {...props}>
      {children}
    </s.NavbarBody>
  )
}

export default NavbarBody
