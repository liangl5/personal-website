import * as React from 'react';
import ImageSlideshow from './ImageSlideshow';
import { Box, Typography} from '@mui/material';
import styles from '../styling/HomePage.css'; // Import the CSS Module

function HomePage() {

    return (
        <Box sx={{maxWidth: '1010px'}}>
            <Typography
                variant="h4"
                align="left"
                fontFamily= 'Raleway, sans-serif'
                sx={{fontSize: 38, paddingBottom: '10px', borderColor: '#403f3e', borderStyle: 'solid', borderWidth:'0px 0px 2px 0px'}}
                fontWeight= '500'
            >
                About Me
            </Typography>


            <Typography
                variant='body1'
                align="left"
                sx={{ fontSize: 20, paddingTop: '10px'}}
                fontFamily= 'Raleway, sans-serif'
            >

            <Box class='textEntry'>I am currently a recent graduate of Miami University (2021-2024) with a B.S. in Computer Science and a B.S. in Data Science and Statistics.</Box>
            
            <Box class='textEntry'>At my time studying in Miami University I was a part of many projects and experiences: 
            <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>
            </Box>
            </Typography>
            
        </Box>

    )
}

export default HomePage;