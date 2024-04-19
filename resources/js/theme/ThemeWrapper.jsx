import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';

const ThemeWrapper = ({ children }) => {
  const palette = {
    primary: { main: '#27357c' },
    coolBlue: { main: '#4973f2' },
    secondary: { main: '#f5c300' },
    coolGrey: { main: '#2E3A59' },
    success: { main: '#0C9543' },
    warning: { main: '#F27249' },
    white: { main: '#FFFFFF' },
  };

  const themeName = 'GPCS';
  const typography = {
    fontFamily: 'pier_sans, sans-serif',
  };
  const theme = createTheme({ typography, palette, themeName });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeWrapper;
