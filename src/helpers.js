import { css } from 'styled-components'
import * as color from 'styled-utils/color'

export const isFixed = ({ isFixed }) => {
  if (!isFixed) return
  return css`
    position: fixed;
    z-index: 900;
  `
}

export const isStatic = ({ isStatic }) => {
  if (!isStatic) return
  return css`
    & .navbar-item:hover {
      background-color: transparent;
    }
  `
}

export const hasBorders = ({ hasBorders }) => {
  if (!hasBorders) return
  return css`
    & .navbar-item {
      border-left: 1px solid rgba(0, 0, 0, 0.12);
    }
  `
}

export const withTextColor = (props) => {
  if (props.isOutlined || !props.withColor) return

  let { textColor } = color.fromProps(props)

  return css`
    color: ${textColor};
  `
}

export const withHover = ({ href }) => {
  if (!href) return
  return css`
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  `
}
