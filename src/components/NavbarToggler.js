import React from 'react'
import css from 'classnames'
import { NavbarTogglerStyle } from '../styles'

const NavbarToggler = ({ onClick, ...props }) => {
  let className = css(
    'navbar-toggler',
    props.className
  )

  return (
    <NavbarTogglerStyle className={className} {...props}>
      <i className='material-icons btn-open' onClick={onClick}>menu</i>
    </NavbarTogglerStyle>
  )
}

export default NavbarToggler
