import React from 'react'
import { NavbarBodyStyle } from '../styles'

const NavbarBody = ({ isOpen, onClose, children, ...props }) => {
  return (
    <NavbarBodyStyle isOpen={isOpen} className='NavbarBody' {...props}>
      <div className='items'>
        {children}
      </div>
      <div className='overlay' onClick={onClose} />
    </NavbarBodyStyle>
  )
}

export default NavbarBody
