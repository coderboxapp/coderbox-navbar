import React from 'react'
import { string, bool, func } from 'prop-types'
import { NavbarItemStyle } from '../styles'

class NavbarItem extends React.Component {
  static propTypes = {
    icon: string,
    text: string,
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

  static contextTypes = {
    palette: string
  }

  render () {
    let { href, icon, text, hide, isActive, onClick } = this.props
    let { palette } = this.context

    if (hide) return null

    return (
      <NavbarItemStyle
        href={href}
        palette={palette}
        className={`NavbarItem${isActive ? ' active' : ''}`}
        onClick={onClick}>

        <i className='material-icons'>{icon}</i> {text}
      </NavbarItemStyle>
    )
  }
}

export default NavbarItem
