import styled, { css } from 'styled-components'
import { onTouch } from 'mqcss'

const zIndex = 900
const isFixed = ({ isFixed }) => {
  if (!isFixed) return
  return css`
    position: fixed;
    z-index: ${zIndex};
  `
}

export const Navbar = styled.div`
  width: 100%;
  font-family: ${p => p.theme.fonts.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  
  padding: 5px;

  ${isFixed}
`

export const NavbarBrand = styled.div`
  padding: 10px;
  display: flex;
`

export const NavbarBody = styled.div`
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

  ${onTouch} {
    & .items {
      position: fixed;
      flex-direction: column;
      top: 0;
      right: ${p => p.isOpen ? '0px' : '-60%'};
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

export const NavbarItem = styled.div`
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NavbarToggler = styled.a`
  display: none;
  position: absolute;
  top: 16px;
  right: 10px;

  ${onTouch} {
    display: block;
  }
`
