import React from 'react'
import css from 'classnames'
import * as s from '../styles'

const NavbarBody = ({ isOpen, onClose, children, ...props }) => {
  let className = css('navbar-body', props.className)

  return (
    <s.NavbarBody isOpen={isOpen} className={className} {...props}>
      <div className='items'>
        {children}
      </div>
      <div className='overlay' onClick={onClose} />
    </s.NavbarBody>
  )
}

export default NavbarBody
