import { createTheme } from '@mui/material/styles';


const baseTheme = createTheme({
  typography: {
    h4: {
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 500,
      fontSize: 38,
    },
    body1: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: 20,
    },
    h3: {
      paddingBottom: '10px',
      borderColor: '#403f3e',
      borderStyle: 'solid',
      borderWidth: '0px 0px 2px 0px',
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 500,
      fontSize: 38,
      width: '100%',
    }
  },
});

const lightTheme = createTheme({
  ...baseTheme, 
  palette: {
    primary: {
        main: '#6200EE',
        variant: '#3700B3',
        on: '#FFFFFF'
    },
    secondary: {
        main: '#03DAC6',
        on: '#000000'
    },
    background: {
        main: '#FFFFFF',
        on: '#000000',
        ons: '#403f3e',
        onlink: '#1a29fd',
    },
  },
  typography: {
    ...baseTheme.typography, 
  },
  mode: 'light'
});

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
        main: '#BB86FC',
        variant: '#3700B3',
        on: '#000000'
    },
    secondary: {
        main: '#03DAC6',
        on: '#000000'
    },
    background: {
        main: '#121212',
        on: '#FFFFFF',
        ons: '#666565',
        onlink: '#717af7',
    },
  },
  typography: {
    ...baseTheme.typography,
  },
  mode: 'dark'
});

export { lightTheme, darkTheme };