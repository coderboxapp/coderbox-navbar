import React from 'react'
import { object, bool, func, string, oneOfType } from 'prop-types'
import { styleProps, fromProps } from 'styled-utils'

// components
import NavbarBrand from './NavbarBrand'
import NavbarToggler from './NavbarToggler'
import NavbarBody from './NavbarBody'

// styles
import { NavbarStyle } from '../styles'

class Navbar extends React.Component {
  state = { open: false }

  static propTypes = {
    fixed: bool,
    brand: oneOfType([func, string, object]),
    className: string
  }

  static childContextTypes = { palette: string }

  getChildContext () {
    return { palette: fromProps(this.props) }
  }

  toggle () {
    this.setState({ open: !this.state.open })
  }

  render () {
    let { brand, fixed, className, ...rest } = this.props
    let colors = styleProps(rest)

    return (
      <NavbarStyle
        fixed={fixed}
        className={`Navbar ${className || ''}`}
        {...colors}>

        <NavbarToggler onClick={() => this.toggle()} />
        <NavbarBrand {...colors}>{brand}</NavbarBrand>
        <NavbarBody isOpen={this.state.open} onClose={() => this.toggle()}>
          {this.props.children}
        </NavbarBody>
      </NavbarStyle>
    )
  }
}

export default Navbar
