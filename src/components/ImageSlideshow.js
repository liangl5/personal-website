// src/components/ImageSlideshow.js

import React, { useState } from 'react';
import { IconButton, Box, Typography, Avatar, useTheme } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';


const images = [
    `${process.env.PUBLIC_URL}/imgs/20231024_S0624_116.jpg`,
    `${process.env.PUBLIC_URL}/imgs/IMG_7250.jpeg`,
    `${process.env.PUBLIC_URL}/imgs/IMG_6742.jpeg`,
    
    // `${process.env.PUBLIC_URL}/imgs/20231024_S0624_033.jpg`,
    // `${process.env.PUBLIC_URL}/imgs/20231024_S0624_108.jpg`
];


const ImageSlideshow = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box sx={{ position: 'relative', width: 'auto', height: 'auto'}}>
      <Avatar src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={{ width:250, height: 250 }} />
      <IconButton
        aria-label="Previous photo"
        onClick={handlePrevious}
        size="small"
        sx={{ position: 'absolute', top: '50%', left: { xs: '-38px', sm: '-46px' }, transform: 'translateY(-50%)'}}
      >
        <ArrowBack color="action" sx={{fill: theme.palette.background.ons}}/>
      </IconButton>
      <IconButton
        aria-label="Next photo"
        onClick={handleNext}
        size="small"
        sx={{ position: 'absolute', top: '50%', right: { xs: '-38px', sm: '-46px' }, transform: 'translateY(-50%)' }}
      >
        <ArrowForward color="action"  sx={{fill: theme.palette.background.ons}}/>
      </IconButton>
      <Box sx={{ position: 'absolute', bottom: '-32px', left: '50%', transform: 'translateX(-50%)' }}>
        <Typography variant="caption" color={theme.palette.background.ons}>{`${currentIndex + 1} / ${images.length}`}</Typography>
      </Box>
    </Box>
  );
};

export default ImageSlideshow;