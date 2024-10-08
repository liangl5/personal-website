import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { lightTheme, darkTheme } from './Themes';
import { useTheme } from '@mui/material';




const pages = ['Home', 'Resume & CV', 'Projects', 'Personal'];


function ResponsiveAppBar({ tabIndex, setTabIndex, theme, setTheme}) {
  //const theme = useTheme();

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme.mode === 'dark' ? lightTheme : darkTheme));
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
            //   look into this
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              flexGrow: 1
            }}
            color={theme.palette.primary.on}
          >
            LUKE LIANG
          </Typography>

          <Box sx={{flexGrow: 0, display: { xs: 'flex', md: 'flex' } }}>
            <Tabs value={tabIndex} aria-label="basic tabs example">

              <Tab
                label = 'Home'
                key = 'Home'
                component={Link} 
                to="/" 
                sx={{ my: 2, color: theme.palette.primary.on, display: 'block' }}
              >
                HOME
              </Tab>

              <Tab
                label = 'Resume & CV'
                key = 'Resume & CV'
                component={Link} 
                to="/resume" 
                sx={{ my: 2, color: theme.palette.primary.on, display: 'block' }}
              >
                RESUME & CV
              </Tab>

              <Tab
                label = 'Publications'
                key = 'Publications'
                component={Link} 
                to="/publications" 
                sx={{ my: 2, color: theme.palette.primary.on, display: 'block' }}
              >
                PUBLICATIONS
              </Tab>

              {/* <Tab
                label = 'Projects'
                key = 'Projects'
                component={Link} 
                to="/projects" 
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                PROJECTS
              </Tab> */}

              <Tab
                label = 'Personal'
                key = 'Personal'
                component={Link} 
                to="/personal" 
                sx={{ my: 2, color: theme.palette.primary.on, display: 'block' }}
              >
                PERSONAL
              </Tab>

            </Tabs>
          </Box>

          <Box sx={{gridColumn: 1, marginLeft: '5%'}}>
            <IconButton aria-label="Mode" size="large" onClick={toggleTheme}>
              {theme.mode == 'dark' ? <LightModeIcon sx={{fill: theme.palette.primary.on}}/> : <DarkModeIcon sx={{fill: theme.palette.primary.on}}/>}
            </IconButton>
          </Box>
         
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;