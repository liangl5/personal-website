import * as React from 'react';
import { Box, Typography } from '@mui/material';


function PersonalPage() {

    return (
        <Box sx={{maxWidth: '1100px', padding: '15px 25px 20px 25px'}}>
            <Typography
                    variant="h4"
                    align="left"
                    fontFamily= 'Raleway, sans-serif'
                    sx={{fontSize: 38, paddingBottom: '10px', marginBottom: '15px', borderColor: '#403f3e', borderStyle: 'solid', borderWidth:'0px 0px 2px 0px'}}
                    fontWeight= '500'
                >
                    Background
            </Typography>


            <Typography
                    variant="h4"
                    align="left"
                    fontFamily= 'Raleway, sans-serif'
                    sx={{fontSize: 38, paddingBottom: '10px', marginBottom: '15px', borderColor: '#403f3e', borderStyle: 'solid', borderWidth:'0px 0px 2px 0px'}}
                    fontWeight= '500'
                >
                    Hobbies
            </Typography>
        </Box>

    )
}

export default PersonalPage;