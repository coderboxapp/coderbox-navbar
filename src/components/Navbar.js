import React from 'react'
import { object, bool, func, string, oneOfType } from 'prop-types'
import cx from 'classnames'

// components
import NavbarBrand from './NavbarBrand'
import NavbarToggler from './NavbarToggler'
import NavbarBody from './NavbarBody'

// styles
import * as s from '../styles'

class Navbar extends React.Component {
  state = { open: false }

  static propTypes = {
    isFixed: bool,
    withColor: string,
    brand: oneOfType([ func, string, object ]),
    className: string
  }

  static defaultProps = {
    isFixed: false,
    withColor: 'primary'
  }

  toggle () {
    this.setState({ open: !this.state.open })
  }

  render () {
    let { brand, isFixed, ...props } = this.props
    let { open } = this.state
    let className = cx('navbar', props.className)

    return (
      <s.Navbar {...props} isFixed={isFixed} className={className}>
        <NavbarToggler onClick={() => this.toggle()} />
        <NavbarBrand>{brand}</NavbarBrand>
        <NavbarBody isOpen={open} onClose={() => this.toggle()}>
          {this.props.children}
        </NavbarBody>
      </s.Navbar>
    )
  }
}

export default Navbar
