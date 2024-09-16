import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {useTheme} from '@mui/material';

function PersonalPage() {
    const theme = useTheme();
    return (
        <Box sx={{maxWidth: '1100px', padding: '15px 25px 20px 25px'}}>
            <Typography
                    variant="h3"
                    align="left"
                    sx={{marginBottom: '15px', borderColor: theme.palette.background.ons}}
                    color={theme.palette.background.on}
                >
                    Background
            </Typography>

            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'row', // Keep the cards side by side by default
                    flexWrap: 'wrap', // Allow cards to wrap to the next line if there's not enough space
                    alignItems: 'stretch', // Ensure cards are the same height
                    gap: '20px', // Define consistent spacing between the cards
                }}
            >

                <Card elevation={0} sx={{ width: 345, backgroundColor: theme.palette.background.main }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={`${process.env.PUBLIC_URL}/imgs/Oxford_ohio_main.jpg`}
                        title="Oxford, Ohio"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{textAlign: 'left', color: theme.palette.background.on}}>
                            From Ohio
                        </Typography>
                        <Typography variant="body2" sx={{color: theme.palette.background.on, textAlign: 'left'}}>
                            I grew up in Oxford, Ohio, a college town north of Cincinnati. I met many lifelong friends from competitive swimming in K-12 and youth soccer. I was also able to develop my technical skills early on by taking college classes in middle school.
                        </Typography>
                    </CardContent>
                </Card>

                <Card elevation={0} sx={{ width: 345, backgroundColor: theme.palette.background.main }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={`${process.env.PUBLIC_URL}/imgs/miami_university.jpg`}
                        title="Miami University"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{textAlign: 'left', color: theme.palette.background.on}}>
                            Miami University
                        </Typography>
                        <Typography variant="body2" sx={{color: theme.palette.background.on, textAlign: 'left'}}>
                            I attended Miami University from 2021 to 2024. During my time I met my roommates that helped me discover my passion for computer science and research. Many professors left an impact on who I am today through their unique personalities.
                        </Typography>
                    </CardContent>
                </Card>
{/* 
            </Box> */}


            <Typography
                    variant="h3"
                    align="left"
                    sx={{width: '100%', marginTop: '20px', marginBottom: '15px', borderColor: theme.palette.background.ons}}
                    color={theme.palette.background.on}
                >
                    Hobbies
            </Typography>
{/* 
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' }, // Stack on small screens, side by side on larger
                    alignItems: 'stretch',
                    gap: '10px', // Space between cards
                }}
            > */}
                <Card elevation={0} sx={{ width: 345, backgroundColor: theme.palette.background.main }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={`${process.env.PUBLIC_URL}/imgs/sports.jpg`}
                        title="Sports"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{textAlign: 'left', color: theme.palette.background.on}}>
                            Sports
                        </Typography>
                        <Typography variant="body2" sx={{color: theme.palette.background.on, textAlign: 'left'}}>
                            Sports have always been a big part of my life, I grew up swimming, playing soccer, playing basketball, and practicing taekwondo. I mostly participate in rock climbing and basketball to keep healthy but improving on the technical skills is also very rewarding.
                        </Typography>
                    </CardContent>
                </Card>

                <Card elevation={0} sx={{ width: 345, backgroundColor: theme.palette.background.main }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={`${process.env.PUBLIC_URL}/imgs/weightlifting.jpg`}
                        title="Working Out"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{textAlign: 'left', color: theme.palette.background.on}}>
                            Working Out
                        </Typography>
                        <Typography variant="body2" sx={{color: theme.palette.background.on, textAlign: 'left'}}>
                            Often I work out as a supplement to sports as the strength I gain is very helpful in performing technical skills. Training regiments have also eliminated a lot of joint pain that I had previously. I also enjoy teaching my friends and introducing them to weightlifting.
                        </Typography>
                    </CardContent>
                </Card>

                <Card elevation={0} sx={{ width: 345, backgroundColor: theme.palette.background.main }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={`${process.env.PUBLIC_URL}/imgs/coding.png`}
                        title="Coding"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{textAlign: 'left', color: theme.palette.background.on}}>
                            Coding
                        </Typography>
                        <Typography variant="body2" sx={{color: theme.palette.background.on, textAlign: 'left'}}>
                            Whether it's something simple as writing code to display my hobbies on a website or creating a complex simulation to mimic a real-world mechanic, I love all aspects of coding. It is also a constantly changing field so learning new technologies is a must.
                        </Typography>
                    </CardContent>
                </Card>

                <Card elevation={0} sx={{ width: 345, backgroundColor: theme.palette.background.main }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={`${process.env.PUBLIC_URL}/imgs/gaming.jpg`}
                        title="Gaming"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{textAlign: 'left', color: theme.palette.background.on}}>
                            Video Games
                        </Typography>
                        <Typography variant="body2" sx={{color: theme.palette.background.on, textAlign: 'left'}}>
                            I enjoy games that have rewarding but complex mechanics that allow for any level of creativity. I enjoy both competitive live service and story bases games. Some of my favorite games include Breath of the Wild, Baldur's Gate 3, Destiny 2, Elden Ring, and Valorant. I am looking forward to trying out Black Myth Wukong and Deadlock.
                        </Typography>
                    </CardContent>
                </Card>

                <Card elevation={0} sx={{ width: 345, backgroundColor: theme.palette.background.main }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={`${process.env.PUBLIC_URL}/imgs/reading.jpg`}
                        title="Reading"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{textAlign: 'left', color: theme.palette.background.on}}>
                            Reading
                        </Typography>
                        <Typography variant="body2" sx={{color: theme.palette.background.on, textAlign: 'left'}}>
                            A lot of my reading interests formed when I was in elementary school. I love and still support series like Percy Jackson (and Heros of Olympus) and Harry Potter. My current interests have shifted more towards technical books (AI/ML related or cases studies of cyber secruity breaches) and non-fiction (I really enjoyed The Goldfinch by Donna Tartt). 
                        </Typography>
                    </CardContent>
                </Card>

            </Box>



        </Box>

    )
}

export default PersonalPage;