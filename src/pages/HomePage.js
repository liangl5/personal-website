import * as React from 'react';
import { Box, colors, Typography} from '@mui/material';
import styles from '../styling/HomePage.css'; 
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material';



function HomePage() {
    const theme = useTheme();
    return (
        <Box sx={{maxWidth: '1100px', padding: '15px 25px 20px 25px'}}>
            <Typography
                variant="h3"
                align="left"
                color={theme.palette.background.on}
                sx={{borderColor: theme.palette.background.ons}}
            >
                About Me
            </Typography>


            <Typography
                variant='body1'
                align="left"
                sx={{ paddingTop: '10px'}}
                color={theme.palette.background.on}
            >

            <Box class='textEntry'>I am currently a recent graduate of Miami University (2021-2024) with a B.S. in Computer Science and a B.S. in Data Science and Statistics.</Box>
            
            <Box>At my time studying in Miami University I was a part of many projects and experiences: </Box>
            <Box>
                <ul style={{marginTop: '5px'}}>
                    <li>Undergraduate research with <a style={{ color: theme.palette.background.onlink, textDecoration: 'none' }} href="https://giabbanelli.com/author/philippe-j.-giabbanelli/">Dr. Philippe Giabbanelli</a> 
                    &nbsp;that focused on machine learning applications in network simulation along with health oriented applications.</li>
                    <ul style={{paddingBottom: "10px"}}> 
                        <li>4 publications (1 first author and 3 co-authors) and 3 more papers under construction (2 first author).</li>
                        <li>Worked with the <a style={{ color: theme.palette.background.onlink, textDecoration: 'none' }} href='https://www.cdc.gov/'>Centers for Disease Control and Prevention (CDC)</a>&nbsp;on a fullstack web application with backend simulations.</li>
                    </ul>
                    <li>Teaching assistant for Machine Learning and Algorithms course. </li>
                    <ul>
                        <li>My responsibilties included leading a project that was published, tutoring students in python, and grading exams, homeworks, and labs.</li>
                    </ul>
                </ul>
            </Box>

            <Box class='textEntry'>
                Through my undergraduate research I was awarded with the <a style={{ color: theme.palette.background.onlink, textDecoration: 'none' }} href='https://www.astronautscholarship.org/'>Astronaut Scholarship</a> in 2023. I was one of 68 college students nationally awarded this prestigious honor.
            </Box>

            <Box>
                My industry experience includes a software engineering internship at <a style={{ color: theme.palette.background.onlink, textDecoration: 'none' }} href='https://www.jpmorganchase.com/'>JPMorgan Chase & Co.</a> after my freshman year of college. My work includes rebuilding
                payment & billing software using ReactJS, deploying web applications, and winning the <a style={{ color: theme.palette.background.onlink, textDecoration: 'none' }} href='https://careers.jpmorgan.com/us/en/students/programs/tfsg-hackathons?search=&tags=location__Americas__UnitedStatesofAmerica'>Code for Good hackathon</a> in 2022.
            </Box>
            
            </Typography>
            
        </Box>

    )
}

export default HomePage;