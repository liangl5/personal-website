import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';

function PaperEntry({title, authors, highlighted_author, venue, link, code}) {
    const authorsArray = authors.split(', ');

    return (
        <Box sx={{marginTop: '15px'}}>
            <Typography
                variant="body1"
                align="left"
                fontFamily= 'Raleway, sans-serif'
                sx={{fontSize: 20, fontStyle: 'italic'}}
                >
                    {title}
            </Typography>
            <Typography
                variant="body1"
                align="left"
                fontFamily= 'Raleway, sans-serif'
                sx={{fontSize: 20}}
                >
                {authorsArray.map((author, index) => (
                    <span key={index}>
                    {index === highlighted_author ? <strong>{author}</strong> : author}
                    {index < authorsArray.length - 1 && ', '}
                    </span>
                ))}
            </Typography>

            {venue !== "" &&
            <Typography
                variant="body1"
                align="left"
                fontFamily= 'Raleway, sans-serif'
                sx={{fontSize: 20}}
                >
                    {venue}
            </Typography>
            }

            <Box
                sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: 1.5,
                marginTop: '5px'
                }}
            >
                {link !== "" && <Button variant="outlined" href={link}>Paper</Button>}
                {code !== "" && <Button variant="outlined" href={code}>Code</Button>}
            </Box>
        </Box>
    )
}

export default PaperEntry;