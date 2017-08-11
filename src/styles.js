import styled from 'styled-components'
import { withColor } from 'styled-utils'
import { onTouch } from 'mqcss'
import { isFixed, isStatic, hasBorders, withTextColor, withHover } from 'helpers'

const zIndex = 900

export const Navbar = styled.div`
  width: 100%;
  position: relative;
  font-family: ${(p) => p.theme.fonts.primary};
  display: flex;
  box-sizing: border-box;

  ${isFixed}
  ${withColor}
  ${isStatic}
  ${hasBorders}

  & .navbar-body {
    ${withColor}
  }

  & .navbar-item,
  & .navbar-item .icon {
    ${withTextColor};
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
    & .overlay {
      display: ${p => (p.isOpen ? 'block' : 'none')};
    }
  }
`

export const NavbarBrand = styled.div`
  padding: 10px;
  display: flex;
`

export const NavbarItem = styled.div`
  cursor: pointer;
  text-decoration: none;
  box-sizing: inherit;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  line-height: 1.5;
  padding: 0.5rem 1.2rem;
  position: relative;

  ${withHover};
`

export const NavbarToggler = styled.a`
  display: none;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
  line-height: 1.5;

  &:hover {
    opacity: 0.5;
  }

  ${onTouch} {
    display: flex;
  }
`

export const NavbarBody = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  box-sizing: inherit;
  z-index: ${zIndex + 10};

  ${onTouch} {
    position: fixed;
    flex-direction: column;
    justify-content: flex-start;
    top: 0;
    right: ${(p) => (p.isOpen ? '0px' : '-60%')};
    width: 58%;
    bottom: 0;
    background: white;
    box-shadow: 0 0 1px rgba(0, 0, 1, 0.12);
    transition: right 0.25s;

    .navbar-item {
      height: auto;
      padding: 1.0rem 1rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
`
