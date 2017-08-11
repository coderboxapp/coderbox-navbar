import React from 'react'
import css from 'classnames'
import { string, bool, func } from 'prop-types'
import { Icon } from '@coderbox/atoms'
import * as s from '../styles'

class NavbarItem extends React.Component {
  static propTypes = {
    withIcon: string,
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
    let { href, withIcon, hide, isActive, children, onClick, ...props } = this.props
    let className = css('navbar-item', { 'active': isActive }, props.className)
    let Element = href ? s.NavbarItem.withComponent('a') : s.NavbarItem

    if (hide) return null

    return (
      <Element
        href={href}
        className={className}
        onClick={onClick}
        {...props} >
        {withIcon && <Icon name={withIcon} />}
        {children}
      </Element>
    )
  }
}

export default NavbarItem
