// src/theme.ts

import { createTheme, ThemeOptions } from '@mui/material/styles';

const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: { main: '#1976d2' },
          background: { default: '#fff', paper: '#fff' },
        }
      : {
          // palette values for dark mode
          primary: { main: '#90caf9' },
          background: { default: '#121212', paper: '#1e1e1e' },
        }),
  },
  typography: {
    allVariants: {
      color: mode === 'light' ? '#000' : '#fff',
    },
  },
});

const createCustomTheme = (mode: 'light' | 'dark') => createTheme(getDesignTokens(mode));

export default createCustomTheme;
