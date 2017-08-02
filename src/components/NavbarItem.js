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
    let className = css('navbar-item', { 'active': isActive }, props.className)
    let Element = NavbarItemStyle

    if (hide) return null
    if (href) Element = NavbarItemStyle.withComponent('a')

    return (
      <Element
        href={href}
        className={className}
        onClick={onClick}
        {...props} >
        {hasIcon && <i className='material-icons'>{hasIcon}</i>}
        {children}
      </Element>
    )
  }
}

export default NavbarItem
