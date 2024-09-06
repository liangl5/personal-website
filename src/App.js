import styles from './App.css'
import * as React from 'react';
import SimplePaper from './components/SimplePaper';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import HomePage from './components/HomePage';
import CVPage from './components/CVPage';
import ProjectsPage from './components/ProjectsPage';
import PersonalPage from './components/PersonalPage';
import PersonalInfoTab from './components/PersonalInfoTab';

import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';


// WIP make this legit
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});




function App() {
  // const [tabIndex, setTabIndex] = React.useState(0);
  const [theme, setTheme] = React.useState(darkTheme);

  return (

      <ThemeProvider theme={theme}>
        
        <Box className="App">

          <ResponsiveAppBar theme={theme} setTheme={setTheme}/> 

          <Box class="flex-container">
              
              <PersonalInfoTab />

              <Box class='right-column'>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/resume" element={<CVPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/personal" element={<PersonalPage />} />
                </Routes>
              </Box>

          </Box>

        </Box>
      </ThemeProvider>

  );
}

export default App;
