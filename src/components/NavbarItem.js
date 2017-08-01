import React from 'react'
import css from 'classnames'
import { string, bool, func } from 'prop-types'
import { NavbarItemStyle } from '../styles'

class NavbarItem extends React.Component {
  static propTypes = {
    hasIcon: string,
    href: string,
    hide: bool,
    isActive: bool,
    onClick: func
  }

  static defaultProps = {
    href: '',
    isActive: false,
    hide: false,
    onClick: () => true
  }

  render () {
    let { href, hasIcon, hide, isActive, children, onClick, ...props } = this.props
    let className = css(
      'navbar-item',
      { 'active': isActive },
      props.className
    )

    if (hide) return null

    return (
      <NavbarItemStyle
        href={href}
        className={className}
        onClick={onClick}
        {...props} >
        {hasIcon && <i className='material-icons'>{hasIcon}</i>}
        {children}
      </NavbarItemStyle>
    )
  }
}

export default NavbarItem
