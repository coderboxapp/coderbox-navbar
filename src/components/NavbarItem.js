import React from 'react'
import { string, bool, func, object } from 'prop-types'
import { NavbarItemStyle } from '../styles'

class NavbarItem extends React.Component {
  static propTypes = {
    icon: string,
    text: string,
    href: string,
    hide: bool,
    onClick: func
  }

  static defaultProps = {
    href: '',
    hide: false,
    onClick: () => true
  }

  static contextTypes = {
    router: object,
    palette: string
  }

  isActive (name) {
    const { router } = this.context

    if (router) {
      return router.getCurrentLocation().pathname === name
    }

    return false
  }

  render () {
    let { href, icon, text, hide, onClick } = this.props
    let { palette } = this.context

    if (hide) return null

    let isActive = this.isActive(href, null, false) ? ' active' : ''

    return (
      <NavbarItemStyle
        href={href}
        palette={palette}
        className={`NavbarItem${isActive}`}
        onClick={onClick}>

        <i className='material-icons'>{icon}</i> {text}
      </NavbarItemStyle>
    )
  }
}

export default NavbarItem
