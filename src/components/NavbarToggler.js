import React from 'react'
import css from 'classnames'
import * as s from '../styles'

const NavbarToggler = ({ onClick, ...props }) => {
  let className = css('navbar-toggler', props.className)

  return (
    <s.NavbarToggler className={className} {...props}>
      <i className='material-icons btn-open' onClick={onClick}>menu</i>
    </s.NavbarToggler>
  )
}

export default NavbarToggler
