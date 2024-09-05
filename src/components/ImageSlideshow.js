// src/components/ImageSlideshow.js

import React, { useState } from 'react';
import { IconButton, Box, Typography, Avatar } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import img1 from '../imgs/20231024_S0624_033.jpg';
import img2 from '../imgs/20231024_S0624_108.jpg';
import img3 from '../imgs/20231024_S0624_116.jpg';
import img4 from '../imgs/luke_hs_2.png';

const images = [
    img3,
    img4
];


const ImageSlideshow = () => {
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
        onClick={handlePrevious}
        sx={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}
      >
        <ArrowBack color="action"/>
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
      >
        <ArrowForward color="action"/>
      </IconButton>
      <Box sx={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)' }}>
        <Typography variant="caption">{`${currentIndex + 1} / ${images.length}`}</Typography>
      </Box>
    </Box>
  );
};

export default ImageSlideshow;