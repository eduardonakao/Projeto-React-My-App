import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[900],
    },
    secondary: {
      main: '#11cb5f',
    }
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
