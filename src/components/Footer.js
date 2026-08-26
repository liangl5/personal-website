import * as React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import LastCommit from './GithubDisplayDate';
import { monoFont } from './Themes';

function Footer() {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        padding: '40px 20px 60px',
        borderTop: `1px solid ${theme.palette.background.border}`,
        marginTop: '20px',
      }}
    >
      <LastCommit owner="liangl5" repo="personal-website" />
      <Typography sx={{ fontFamily: monoFont, fontSize: 12, color: theme.palette.background.ons }}>
        &copy;2026 Luke Liang
      </Typography>
    </Box>
  );
}

export default Footer;
