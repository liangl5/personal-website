import { createTheme } from '@mui/material/styles';

export const monoFont = "'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace";
const sansFont = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const baseOptions = {
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: sansFont,
    h1: {
      fontFamily: sansFont,
      fontWeight: 700,
    },
    h2: {
      fontFamily: sansFont,
      fontWeight: 600,
      fontSize: 32,
    },
    h6: {
      fontFamily: sansFont,
      fontWeight: 600,
    },
    body1: {
      fontFamily: sansFont,
      fontSize: 17,
      lineHeight: 1.8,
    },
    body2: {
      fontFamily: sansFont,
      fontSize: 15,
      lineHeight: 1.7,
    },
  },
};

function buildTheme(mode, palette) {
  return createTheme({
    ...baseOptions,
    palette: {
      mode,
      ...palette,
    },
    mode,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontFamily: sansFont,
            fontWeight: 600,
            borderRadius: 10,
            paddingLeft: 20,
            paddingRight: 20,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontFamily: monoFont,
            fontWeight: 500,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });
}

const darkTheme = buildTheme('dark', {
  primary: { main: '#7C5CFC', contrastText: '#0B0E14', on: '#0B0E14' },
  secondary: { main: '#22D3EE' },
  background: {
    main: '#0B0E14',
    surface: '#131826',
    on: '#F2F4F8',
    ons: '#8892A6',
    onlink: '#8AB4FF',
    border: 'rgba(255,255,255,0.08)',
    default: '#0B0E14',
    paper: '#131826',
  },
  gradient: 'linear-gradient(135deg, #7C5CFC 0%, #22D3EE 100%)',
});

const lightTheme = buildTheme('light', {
  primary: { main: '#5B4FE0', contrastText: '#FFFFFF', on: '#FFFFFF' },
  secondary: { main: '#0EA5B7' },
  background: {
    main: '#FAFAFA',
    surface: '#FFFFFF',
    on: '#111318',
    ons: '#5B6472',
    onlink: '#5B4FE0',
    border: 'rgba(17,19,24,0.08)',
    default: '#FAFAFA',
    paper: '#FFFFFF',
  },
  gradient: 'linear-gradient(135deg, #5B4FE0 0%, #0EA5B7 100%)',
});

export { lightTheme, darkTheme };
