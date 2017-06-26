import React from 'react'
import { object, bool, func, string, oneOfType } from 'prop-types'
import { browserHistory } from 'react-router'

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
    palette: string,
    brand: oneOfType([func, string, object]),
    className: string
  }

  static defaultProps = {
    palette: 'primary'
  }

  static childContextTypes = { palette: string }
  static contextTypes = { router: object }

  getChildContext () {
    return { palette: this.props.palette }
  }

  componentDidMount () {
    if (browserHistory) {
      browserHistory.listen(() => this.setState({ open: false }))
    }
  }

  toggle () {
    this.setState({ open: !this.state.open })
  }

  render () {
    let { brand, fixed, palette, className } = this.props

    return (
      <NavbarStyle
        fixed={fixed}
        palette={palette}
        className={`Navbar ${className || ''}`} >
        <NavbarToggler palette={palette} onClick={() => this.toggle()} />
        <NavbarBrand palette={palette}>{brand}</NavbarBrand>
        <NavbarBody isOpen={this.state.open} onClose={() => this.toggle()}>
          {this.props.children}
        </NavbarBody>
      </NavbarStyle>
    )
  }
}

export default Navbar
