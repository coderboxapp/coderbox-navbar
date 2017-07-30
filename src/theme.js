import coolorsToHex from 'coolors-to-hex'
import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  grayscale: coolorsToHex('https://coolors.co/2B2B2B-888888-cacaca-f1f1f1-ffffff'),
  primary: coolorsToHex('https://coolors.co/1b8ceb-106cb9-65b3e3-82c3ed-cde6fb'),
  success: coolorsToHex('https://coolors.co/4caf50-388e3c-7cc47f-9fd4a1-c8e6c9'),
  danger: coolorsToHex('https://coolors.co/e91e63-c2185b-f06292-f48caf-f8bbd0'),
  white: coolorsToHex('https://coolors.co/ffffff-ffffff-ffffff-ffffff-ffffff'),
  black: coolorsToHex('https://coolors.co/000000-000000-000000-000000-000000')
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: 'Open Sans, Arial, sans-serif'
}

theme.sizes = {
  maxWidth: '650px',
  font: '14px',
  radius: '4px'
}

theme.shadows = {
  light: '0 1px 1px rgba(0, 0, 0, 0.08)',
  normal: '0 1px 2px rgba(0, 0, 0, 0.12)',
  heavy: '0px 2px 2px rgba(0, 0, 0, 0.15)'
}

export default theme
