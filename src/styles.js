import styled, { css } from 'styled-components'
import { font, palette, size, key } from 'styled-theme'
import { mobileAndTablet } from './queries'

const bgColor = p => p.isColor === 'transparent' ? 'transparent' : palette(p.isColor, 0, p.reverse)
const textColor = p => p.hasTextColor ? palette(p.hasTextColor, 0) : (p.isColor === 'white' ? 'black' : 'white')
const activeColor = p => p.hasActiveColor ? palette(p.hasActiveColor, 0) : palette('primary', 0)
const zIndex = 900

export const NavbarStyle = styled.div`
  font-family: ${font('primary')};
  font-size: ${size('font')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  box-sizing: border-box;
  background-color: ${bgColor};
  box-shadow: ${key('shadows.light')};
  width: 100%;
  padding: 5px;
  ${p => {
    if (!p.isFixed) {
      return css`
        position: relative;
      `
    }

    return css`
      position: fixed;
      z-index: ${zIndex};
    `
  }}

  & .navbar-item {
    color: ${textColor};
    
    ${mobileAndTablet} {
      color: black;
    }
  }

  & .navbar-item.active {
    color: ${activeColor}
  }
`

export const NavbarBrandStyle = styled.div`
  padding: 10px;
  display: flex;
`

export const NavbarBodyStyle = styled.div`
  & .items {
    display: flex;
    z-index: ${zIndex + 10};
  }

  & .overlay {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    transition: opacity 0.25s;
    z-index: ${zIndex + 5};
  }

  ${mobileAndTablet} {
    & .items {
      position: fixed;
      flex-direction: column;
      top: 0;
      right: ${p => p.isOpen ? '0px' : '-56%'};
      width: 58%;
      bottom: 0;
      background: white;
      box-shadow: 0 0 1px rgba(0, 0, 1, 0.12);
      transition: right 0.25s;
    }
    & .overlay {
      display: ${p => p.isOpen ? 'block' : 'none'};
    }
  }
`

export const NavbarItemStyle = styled.a`
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  padding: 8px 16px;
  margin: 0 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  i {
    display: block;
  }

  &:hover {
    ${p => {
      if (!p.href) return
      let color = 'rgba(0, 0, 0, 0.05)'

      return css`
        background-color: ${color};
      `
    }}
  }

  ${mobileAndTablet} {
    width: 100%;
    padding: 15px 15px;
    border-bottom: 1px solid #ECEFF2;
  }
`

export const NavbarTogglerStyle = styled.a`
  display: none;
  position: absolute;
  top: 16px;
  right: 10px;

  i {
    color: ${textColor};
    font-size: 33px;
  }

  ${mobileAndTablet} {
    display: block;
  }
`