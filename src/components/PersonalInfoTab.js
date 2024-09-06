import * as React from 'react';
import ImageSlideshow from './ImageSlideshow';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LastCommit from './GithubDisplayDate';


function PersonalInfoTab() {

    return (
      <Box class='left-column'>
        <Box class="center-items">
            <ImageSlideshow class="right-aligned grid-item"/>
        </Box>

        <Box class="center-items">
          <Typography
              variant="h4"
              align="middle"
              sx={{paddingTop: '22px'}}
              fontFamily={'Raleway, sans-serif'}
              fontWeight= '500'
          >
            Luke Liang
          </Typography>
        </Box>

        <Box class="center-items">
          <Typography
              variant="body1"
              align="center"
              sx={{fontSize: 18, padding: '10px 0 10px 0', maxWidth: '300px', marginTop: '10px', borderColor: '#403f3e', borderStyle: 'solid', borderWidth:'2px 0px 2px 0px'}}
              fontFamily={'Raleway, sans-serif'}
          >
              New graduate passionate about machine learning and software engineering
          </Typography>
        </Box>

        <Box sx={{paddingTop: '5px'}}>
          <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/luke-liang-881aa51b1/">
            <LinkedInIcon style={{ fontSize: 36 }} color='primary' />
          </IconButton>

          <IconButton aria-label="GitHub" href="https://github.com/liangl5/">
            <GitHubIcon style={{ fontSize: 36 }} color='primary'/>
          </IconButton>

          <IconButton aria-label="Google Scholar" href="https://scholar.google.com/citations?user=rIUAR7AAAAAJ&hl=en&oi=ao">
              <SchoolIcon style={{ fontSize: 36 }} color='primary'/>
          </IconButton>

          <IconButton aria-label="Email" href="mailto:liangl5.prog@gmail.com">
              <EmailIcon style={{ fontSize: 36 }} color='primary'/>
          </IconButton>
        </Box>

        <LastCommit owner='liangl5' repo='personal-website'/>

        <Box class="center-items">
          <Typography
                variant="subtitle2"
                align="center"
                fontFamily={'Raleway, sans-serif'}
                sx={{paddingTop: '5px', fontSize: 12}}
            >
          &copy; Luke Liang
          </Typography>
        </Box>
      </Box>
    )
}

export default PersonalInfoTab;