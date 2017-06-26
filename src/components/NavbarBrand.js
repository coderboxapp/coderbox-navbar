import React from 'react'
import { NavbarBrandStyle } from '../styles'

const NavbarBrand = ({ children, ...props }) => {
  return (
    <NavbarBrandStyle className='NavbarBrand' {...props}>
      {children}
    </NavbarBrandStyle>
  )
}

export default NavbarBrand
