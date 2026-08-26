import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { monoFont } from './Themes';

function PaperEntry({ title, authors, highlighted_author, venue, link, code }) {
    const authorsArray = authors.split(', ');
    const theme = useTheme();
    return (
        <Box
            sx={{
                padding: '20px',
                borderRadius: '14px',
                backgroundColor: theme.palette.background.surface,
                border: `1px solid ${theme.palette.background.border}`,
                textAlign: 'left',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: theme.mode === 'dark' ? '0 12px 24px rgba(0,0,0,0.4)' : '0 12px 24px rgba(0,0,0,0.08)',
                },
            }}
        >
            <Typography
                variant="body2"
                sx={{fontStyle: 'italic', fontWeight: 600}}
                color={theme.palette.background.on}
                >
                    {title}
            </Typography>
            <Typography
                variant="body2"
                sx={{marginTop: '4px'}}
                color={theme.palette.background.ons}
                >
                {authorsArray.map((author, index) => (
                    <span key={index}>
                    {index === highlighted_author ? <strong style={{color: theme.palette.background.on}}>{author}</strong> : author}
                    {index < authorsArray.length - 1 && ', '}
                    </span>
                ))}
            </Typography>

            {venue !== "" &&
            <Typography
                sx={{fontFamily: monoFont, fontSize: 12, marginTop: '6px', color: theme.palette.secondary.main}}
                >
                    {venue}
            </Typography>
            }

            <Box
                sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: 1.5,
                marginTop: '12px'
                }}
            >
                {link !== "" && <Button size="small" color="secondary" variant="outlined" href={link}>Paper</Button>}
                {code !== "" && <Button size="small" color="secondary" variant="outlined" href={code}>Code</Button>}
            </Box>
        </Box>
    )
}

export default PaperEntry;
