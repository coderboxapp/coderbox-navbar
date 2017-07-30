import React from 'react'
import { ThemeProvider } from 'styled-components'
import { configure, addDecorator, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info'
import theme from '../src/theme'

// const Theme = story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>
// addDecorator(Theme)

setAddon(infoAddon)

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
