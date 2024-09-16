import styles from './App.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import HomePage from './pages/HomePage';
import CVPage from './pages/CVPage';
import ProjectsPage from './pages/ProjectsPage';
import PapersPage from './pages/PapersPage';
import PersonalPage from './pages/PersonalPage';
import PersonalInfoTab from './components/PersonalInfoTab';
import {lightTheme, darkTheme} from './components/Themes'

import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';


function App() {
  // const [tabIndex, setTabIndex] = React.useState(0);
  const [theme, setTheme] = React.useState(lightTheme);
  const toggleTheme = () => {
    setTheme((theme) => (theme.mode === 'dark' ? lightTheme : darkTheme));
  };


  return (
      <Router>
        <ThemeProvider theme={theme}>
          
          <Box className="App" sx={{height: '100%', minHeight: '100vh', backgroundColor: theme.palette.background.main}}>

            <ResponsiveAppBar theme={theme} setTheme={setTheme}/> 

            <Box class="flex-container">
                
                <PersonalInfoTab />

                <Box class='right-column'>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/resume" element={<CVPage />} />
                    <Route path="/Papers" element={<PapersPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/personal" element={<PersonalPage />} />
                  </Routes>
                </Box>

            </Box>

          </Box>
        </ThemeProvider>
      </Router>

  );
}

export default App;
