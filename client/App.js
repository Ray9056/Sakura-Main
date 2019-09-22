import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {pink} from 'material-ui/colors'
import { hot } from 'react-hot-loader'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#FFB6C1',
    main: '#FFB6C1',
    dark: '#FFB6C1',
    contrastText: '#fff',
  },
  // 2nd theme
  secondary: {
    light: '#FFB6C1',
    main: '#FFB6C1',
    dark: '#FFB6C1',
    contrastText: '#000',
  },
    openTitle: pink['200'],
    protectedTitle: pink['300'],
    type: 'light'
  }
})

// route to main app
const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
)

//export default
export default hot(module)(App)
