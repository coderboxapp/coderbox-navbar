import React from 'react'
import css from 'classnames'
import { NavbarBodyStyle } from '../styles'

const NavbarBody = ({ isOpen, onClose, children, ...props }) => {
  let className = css(
    'navbar-body',
    props.className
  )

  return (
    <NavbarBodyStyle isOpen={isOpen} className={className} {...props}>
      <div className='items'>
        {children}
      </div>
      <div className='overlay' onClick={onClose} />
    </NavbarBodyStyle>
  )
}

export default NavbarBody
