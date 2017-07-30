import React from 'react'
import css from 'classnames'
import { NavbarBrandStyle } from '../styles'

const NavbarBrand = ({ children, ...props }) => {
  let className = css(
    'navbar-brand',
    props.className
  )

  return (
    <NavbarBrandStyle className={className} {...props}>
      {children}
    </NavbarBrandStyle>
  )
}

export default NavbarBrand
