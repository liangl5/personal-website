import * as React from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import useScrollSpy from '../hooks/useScrollSpy';
import { scrollToSection } from '../utils/scrollToSection';
import { monoFont } from './Themes';

const links = [
  { id: 'about', label: 'About', shortLabel: 'About' },
  { id: 'resume', label: 'Resume', shortLabel: 'Resume' },
  { id: 'projects', label: 'Projects', shortLabel: 'Projects' },
  { id: 'publications', label: 'Publications', shortLabel: 'Pubs' },
  { id: 'personal', label: 'Personal', shortLabel: 'Personal' },
];

const sectionIds = links.map((link) => link.id);

function scrollToId(id) {
  scrollToSection(id);
  window.history.replaceState(null, '', `#${id}`);
}

function Nav({ toggleTheme, mode }) {
  const theme = useTheme();
  const activeId = useScrollSpy(sectionIds);

  const handleClick = (event, id) => {
    event.preventDefault();
    scrollToId(id);
  };

  return (
    <Box
      component="nav"
      aria-label="Section navigation"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: { xs: '8px', md: '12px' },
        padding: { xs: '14px 14px', md: '16px 40px' },
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        backgroundColor: mode === 'dark' ? 'rgba(11,14,20,0.72)' : 'rgba(250,250,250,0.72)',
        borderBottom: `1px solid ${theme.palette.background.border}`,
      }}
    >
      <Box
        component="a"
        href="#top"
        onClick={(e) => handleClick(e, 'top')}
        sx={{
          fontFamily: monoFont,
          fontWeight: 600,
          fontSize: { xs: 13, md: 15 },
          color: theme.palette.background.on,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>luke@liang</Box>
        <Box component="span" sx={{ color: theme.palette.secondary.main }}>:~$</Box>
      </Box>

      <Box
        component="ul"
        sx={{
          display: 'flex',
          gap: { xs: '10px', md: '28px' },
          listStyle: 'none',
          margin: 0,
          padding: 0,
          flex: '1 1 auto',
          minWidth: 0,
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          justifyContent: { xs: 'flex-start', md: 'center' },
        }}
      >
        {links.map((link) => (
          <Box component="li" key={link.id} sx={{ flexShrink: 0 }}>
            <Box
              component="a"
              href={`#${link.id}`}
              onClick={(e) => handleClick(e, link.id)}
              sx={{
                fontFamily: monoFont,
                fontSize: { xs: 12.5, md: 14 },
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                color: activeId === link.id ? theme.palette.secondary.main : theme.palette.background.ons,
                borderBottom: activeId === link.id ? `2px solid ${theme.palette.secondary.main}` : '2px solid transparent',
                paddingBottom: '4px',
                transition: 'color 0.2s ease, border-color 0.2s ease',
                '&:hover': { color: theme.palette.background.on },
              }}
            >
              <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>{link.label}</Box>
              <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>{link.shortLabel}</Box>
            </Box>
          </Box>
        ))}
      </Box>

      <IconButton aria-label="Toggle color mode" onClick={toggleTheme} size="small" sx={{ flexShrink: 0 }}>
        {mode === 'dark' ? (
          <LightModeIcon sx={{ fill: theme.palette.background.on }} />
        ) : (
          <DarkModeIcon sx={{ fill: theme.palette.background.on }} />
        )}
      </IconButton>
    </Box>
  );
}

export default Nav;
