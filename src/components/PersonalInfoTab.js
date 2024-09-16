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
import {useTheme} from '@mui/material';

function PersonalInfoTab() {
    const theme = useTheme();
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
              color={theme.palette.background.on}
          >
            Luke Liang
          </Typography>
        </Box>

        <Box class="center-items">
          <Typography
              variant="body1"
              align="center"
              sx={{fontSize: 18, padding: '10px 0 10px 0', maxWidth: '300px', marginTop: '10px', borderColor: theme.palette.background.ons, borderStyle: 'solid', borderWidth:'2px 0px 2px 0px'}}
              color={theme.palette.background.on}
          >
              New graduate passionate about machine learning and software engineering
          </Typography>
        </Box>

        <Box sx={{paddingTop: '5px'}}>
          <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/luke-liang-881aa51b1/">
            <LinkedInIcon style={{ fontSize: 36 }} sx={{fill: theme.palette.secondary.main}}/>
          </IconButton>

          <IconButton aria-label="GitHub" href="https://github.com/liangl5/">
            <GitHubIcon style={{ fontSize: 36 }} sx={{fill: theme.palette.secondary.main}}/>
          </IconButton>

          <IconButton aria-label="Email" href="mailto:liangl5.prog@gmail.com">
              <EmailIcon style={{ fontSize: 36 }} sx={{fill: theme.palette.secondary.main}}/>
          </IconButton>

          <IconButton aria-label="Google Scholar" href="https://scholar.google.com/citations?user=rIUAR7AAAAAJ&hl=en&oi=ao">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              width={36} 
              height={36} 
              style={{ fill: theme.palette.secondary.main }}
            >
              <path d="M 11 4 L 3 9 L 8.4921875 9 C 8.4715892 9.0754986 8.4383718 9.1441171 8.421875 9.2226562 C 8.375875 9.4646562 8.3398437 9.7308125 8.3398438 10.007812 C 8.3398438 13.578812 11.990234 13.175781 11.990234 13.175781 L 11.990234 14.085938 C 11.990234 14.454937 12.47425 14.327172 12.53125 15.076172 C 12.28925 15.076172 7.4746094 14.937547 7.4746094 18.185547 C 7.4746094 21.445547 11.724609 21.285156 11.724609 21.285156 C 11.724609 21.285156 16.632812 21.504656 16.632812 17.472656 C 16.634813 15.063656 13.822266 14.2795 13.822266 13.3125 C 13.822266 12.3335 15.941406 12.045906 15.941406 9.7539062 C 15.941406 8.7519062 15.872828 8.03825 15.423828 7.53125 C 15.388828 7.49625 15.366031 7.4722188 15.332031 7.4492188 C 15.324304 7.4420199 15.31448 7.4367774 15.306641 7.4296875 L 15.429688 7.4296875 L 17.5 5.8769531 L 17.5 8 A 0.50005 0.50005 0 0 0 17.511719 8.1152344 A 1.0001 1.0001 0 0 0 17 9 L 17 10 A 1.0001 1.0001 0 1 0 19 10 L 19 9 A 1.0001 1.0001 0 0 0 18.488281 8.1152344 A 0.50005 0.50005 0 0 0 18.5 8 L 18.5 5.125 L 20 4 L 11 4 z M 11.691406 7.0527344 C 11.979219 7.0397031 12.268922 7.109625 12.544922 7.265625 C 12.751922 7.369625 12.946141 7.518125 13.119141 7.703125 C 13.476141 8.060125 13.7765 8.5784531 13.9375 9.1894531 C 14.3175 10.640453 13.823828 12.035781 12.798828 12.300781 C 11.784828 12.587781 10.654672 11.641172 10.263672 10.201172 C 10.090672 9.4991719 10.114547 8.8202969 10.310547 8.2792969 C 10.312395 8.2723193 10.316443 8.2666961 10.318359 8.2597656 C 10.321722 8.2581149 10.32682 8.253536 10.330078 8.2519531 C 10.386262 8.0380596 10.478099 7.8461668 10.589844 7.6875 C 10.795388 7.3872165 11.066477 7.1838352 11.404297 7.09375 C 11.499297 7.07075 11.595469 7.0570781 11.691406 7.0527344 z M 12.082031 15.685547 C 13.775031 15.558547 15.216313 16.490813 15.320312 17.757812 C 15.390313 19.013813 14.087812 20.131094 12.382812 20.246094 C 10.689813 20.361094 9.2274844 19.441547 9.1464844 18.185547 C 9.0654844 16.918547 10.377031 15.812547 12.082031 15.685547 z"/>
            </svg>          
          </IconButton>
        </Box>

        <LastCommit owner='liangl5' repo='personal-website'/>

        <Box class="center-items">
          <Typography
                variant="subtitle2"
                align="center"
                fontFamily={'Raleway, sans-serif'}
                sx={{paddingTop: '5px', fontSize: 12}}
                color={theme.palette.background.on}
            >
          &copy;2024 Luke Liang
          </Typography>
        </Box>
      </Box>
    )
}

export default PersonalInfoTab;