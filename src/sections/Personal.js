import * as React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
import SectionHeading, { SubLabel } from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const background = [
  {
    image: 'Oxford_ohio_main.jpg',
    title: 'From Ohio',
    text: 'Grew up in Oxford, Ohio, a college town north of Cincinnati — competitive swimming and youth soccer gave me lifelong friends, and taking college classes in middle school gave me an early start on technical skills.',
    credit: 'Photo: Tmariemdith, CC BY-SA 4.0',
  },
  {
    image: 'miami_university.jpg',
    title: 'Miami University',
    text: 'Attended Miami University from 2021 to 2024. My roommates and a handful of standout professors are who I credit for discovering my passion for computer science and research.',
    credit: 'Photo: Chris Staley, CC BY 2.0',
  },
  {
    image: 'columbia_university.jpg',
    title: 'Columbia University',
    text: "Now pursuing my Master's in Computer Science at Columbia, trading Ohio's quiet streets for Morningside Heights. Diving into research and adjusting to the pace of city life.",
    credit: 'Photo: Ajay Suresh, CC BY 2.0',
  },
];

const hobbies = [
  {
    image: 'sports.jpg',
    title: 'Sports',
    text: 'Swimming, soccer, basketball, and taekwondo growing up — now mostly rock climbing and basketball.',
  },
  {
    image: 'weightlifting.jpg',
    title: 'Lifting',
    text: 'Strength training that complements sports and keeps old joint pain in check. I like teaching friends to lift.',
  },
  {
    image: 'coding.png',
    title: 'Coding',
    text: 'From tinkering on this site to research simulations — I like all of it, and the field never stops moving.',
  },
  {
    image: 'gaming.jpg',
    title: 'Video Games',
    text: "Breath of the Wild, Baldur's Gate 3, Elden Ring, Valorant. Next up: Black Myth Wukong, Deadlock.",
  },
  {
    image: 'reading.jpg',
    title: 'Reading',
    text: 'Grew up on Percy Jackson and Harry Potter — now split between ML/security nonfiction and literary fiction.',
  },
];

function BackgroundCard({ image, title, text, credit }) {
  const theme = useTheme();
  return (
    <Card
      elevation={0}
      sx={{
        flex: '1 1 260px',
        maxWidth: '400px',
        backgroundColor: theme.palette.background.surface,
        border: `1px solid ${theme.palette.background.border}`,
        borderRadius: '14px',
        overflow: 'hidden',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.mode === 'dark' ? '0 12px 24px rgba(0,0,0,0.4)' : '0 12px 24px rgba(0,0,0,0.08)',
        },
      }}
    >
      <CardMedia sx={{ height: 170 }} image={`${process.env.PUBLIC_URL}/imgs/${image}`} title={title} />
      <CardContent>
        <Typography variant="h6" sx={{ color: theme.palette.background.on, marginBottom: '6px', textAlign: 'left' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.background.ons, textAlign: 'left' }}>
          {text}
        </Typography>
        {credit && (
          <Typography sx={{ fontSize: 11, color: theme.palette.background.ons, opacity: 0.7, marginTop: '8px', textAlign: 'left' }}>
            {credit}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

function HobbyTag({ image, title, text }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '14px',
        alignItems: 'flex-start',
        padding: '14px',
        borderRadius: '12px',
        backgroundColor: theme.palette.background.surface,
        border: `1px solid ${theme.palette.background.border}`,
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: theme.mode === 'dark' ? '0 10px 20px rgba(0,0,0,0.35)' : '0 10px 20px rgba(0,0,0,0.07)',
        },
      }}
    >
      <Box
        component="img"
        src={`${process.env.PUBLIC_URL}/imgs/${image}`}
        alt=""
        sx={{ width: 56, height: 56, borderRadius: '10px', objectFit: 'cover', flexShrink: 0 }}
      />
      <Box sx={{ textAlign: 'left' }}>
        <Typography sx={{ fontWeight: 600, fontSize: 15, color: theme.palette.background.on, marginBottom: '2px' }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 13.5, lineHeight: 1.6, color: theme.palette.background.ons }}>{text}</Typography>
      </Box>
    </Box>
  );
}

function Personal() {
  return (
    <Box
      component="section"
      id="personal"
      aria-labelledby="personal-heading"
      sx={{ maxWidth: '1000px', margin: '0 auto', padding: { xs: '60px 20px', md: '100px 40px' } }}
    >
      <Reveal>
        <SectionHeading index="05 /" title="Personal" id="personal-heading" />

        <SubLabel sx={{ marginBottom: '20px' }}>Background</SubLabel>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '48px' }}>
          {background.map((c, i) => (
            <BackgroundCard key={i} {...c} />
          ))}
        </Box>

        <SubLabel sx={{ marginBottom: '20px' }}>Hobbies</SubLabel>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: '14px',
          }}
        >
          {hobbies.map((c, i) => (
            <HobbyTag key={i} {...c} />
          ))}
        </Box>
      </Reveal>
    </Box>
  );
}

export default Personal;
