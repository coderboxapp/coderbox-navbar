import React from 'react'
import { object, bool, func, string, oneOfType } from 'prop-types'
import css from 'classnames'

// components
import NavbarBrand from './NavbarBrand'
import NavbarToggler from './NavbarToggler'
import NavbarBody from './NavbarBody'

// styles
import { NavbarStyle } from '../styles'

class Navbar extends React.Component {
  state = { open: false }

  static propTypes = {
    isFixed: bool,
    isColor: string,
    hasTextColor: string,
    hasActiveColor: string,
    brand: oneOfType([ func, string, object ]),
    className: string
  }

  static defaultProps = {
    isFixed: false,
    isColor: 'white'
  }

  toggle () {
    this.setState({ open: !this.state.open })
  }

  render () {
    let { brand, isFixed, ...rest } = this.props
    let className = css(
      'navbar',
      rest.className
    )

    return (
      <NavbarStyle isFixed={isFixed} className={className} {...rest}>
        <NavbarToggler isColor={rest.isColor} hasTextColor={rest.hasTextColor} onClick={() => this.toggle()} />
        <NavbarBrand>{brand}</NavbarBrand>
        <NavbarBody isOpen={this.state.open} onClose={() => this.toggle()}>
          {this.props.children}
        </NavbarBody>
      </NavbarStyle>
    )
  }
}

export default Navbar
