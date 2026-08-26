import * as React from 'react';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Resume from './sections/Resume';
import Projects from './sections/Projects';
import Publications from './sections/Publications';
import Personal from './sections/Personal';
import { lightTheme, darkTheme } from './components/Themes';
import { scrollToSection } from './utils/scrollToSection';

function App() {
  const [theme, setTheme] = React.useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme.mode === 'dark' ? lightTheme : darkTheme));
  };

  React.useEffect(() => {
    if (window.location.hash) {
      scrollToSection(window.location.hash.slice(1), { instant: true });
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="a"
        href="#main"
        sx={{
          position: 'absolute',
          left: '-9999px',
          top: 0,
          zIndex: 100,
          padding: '12px 20px',
          borderRadius: '8px',
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.on,
          fontWeight: 600,
          '&:focus': { left: '12px', top: '12px' },
        }}
      >
        Skip to content
      </Box>

      <Box sx={{ backgroundColor: theme.palette.background.main, minHeight: '100vh' }}>
        <Nav toggleTheme={toggleTheme} mode={theme.mode} />

        <Box component="main" id="main">
          <Hero />
          <About />
          <Resume />
          <Projects />
          <Publications />
          <Personal />
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
