import { createTheme } from 'fantasy-baseball-ui';

// Create a custom theme with the desired font family
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'Merriweather, Arial, sans-serif',
    // fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
