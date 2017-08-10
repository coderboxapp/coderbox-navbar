import React from 'react'
import css from 'classnames'
import * as s from '../styles'

const NavbarBrand = ({ children, ...props }) => {
  let className = css('navbar-brand', props.className)

  return (
    <s.NavbarBrand className={className} {...props}>
      {children}
    </s.NavbarBrand>
  )
}

export default NavbarBrand
