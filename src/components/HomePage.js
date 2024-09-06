import * as React from 'react';
import { Box, Typography} from '@mui/material';
import styles from '../styling/HomePage.css'; 
import Paper from '@mui/material/Paper';



function HomePage() {

    return (
        <Paper elevation={8} sx={{maxWidth: '1100px', color: 'black', backgroundColor: 'white', backgroundImage: 'white', padding: '15px 25px 20px 25px'}}>
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
            
            <Box>At my time studying in Miami University I was a part of many projects and experiences: </Box>
            <Box>
                <ul style={{marginTop: '5px'}}>
                    <li>Undergraduate research with <a href="https://giabbanelli.com/author/philippe-j.-giabbanelli/">Dr. Philippe Giabbanelli</a> 
                    &nbsp;that focused on machine learning applications in network simulation along with health oriented applications.</li>
                    <ul style={{paddingBottom: "10px"}}> 
                        <li>4 publications (1 first author and 3 co-authors) and 3 more papers under construction (2 first author).</li>
                        <li>Worked with the <a href='https://www.cdc.gov/'>Centers for Disease Control and Prevention (CDC)</a>&nbsp;on a fullstack web application with backend simulations.</li>
                    </ul>
                    <li>Teaching assistant for Machine Learning and Algorithms course. </li>
                    <ul>
                        <li>My responsibilties included leading a project that was published, tutoring students in python, and grading exams, homeworks, and labs.</li>
                    </ul>
                </ul>
            </Box>

            <Box class='textEntry'>
                Through my undergraduate research I was awarded with the <a href='https://www.astronautscholarship.org/'>Astronaut Scholarship</a> in 2023. I was one of 68 college students nationally awarded this prestigious honor.
            </Box>

            <Box>
                My industry experience includes a software engineering internship at <a href='https://www.jpmorganchase.com/'>JPMorgan Chase & Co.</a> after my freshman year of college. My work includes rebuilding
                payment & billing software using ReactJS, deploying web applications, and winning the <a href='https://careers.jpmorgan.com/us/en/students/programs/tfsg-hackathons?search=&tags=location__Americas__UnitedStatesofAmerica'>Code for Good hackathon</a> in 2022.
            </Box>
            
            </Typography>
            
        </Paper>

    )
}

export default HomePage;