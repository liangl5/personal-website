import * as React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { monoFont } from './Themes';

function SectionHeading({ index, title, id, sx }) {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: { xs: '24px', md: '40px' }, ...sx }}>
      {index && (
        <Typography
          component="span"
          sx={{ fontFamily: monoFont, fontSize: 14, color: theme.palette.secondary.main, letterSpacing: '0.05em' }}
        >
          {index}
        </Typography>
      )}
      <Typography component="h2" variant="h2" id={id} sx={{ color: theme.palette.background.on }}>
        {title}
      </Typography>
    </Box>
  );
}

export function SubLabel({ children, sx }) {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        fontFamily: monoFont,
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: theme.palette.background.ons,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}

export default SectionHeading;
