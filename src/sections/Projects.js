import * as React from 'react';
import { Box, Typography, Chip, Button, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { monoFont } from '../components/Themes';

const projects = [
  {
    title: 'Tripable',
    tagline: 'Collaborative group-travel planning, from idea to itinerary.',
    image: 'tripable_screenshot.jpg',
    description:
      'A full-stack MVP that lets groups create trips, invite participants, submit ideas, vote on activities, and generate a shared itinerary — built end-to-end as a startup project, from user interviews and pain-point analysis through MVP scoping, prototyping, user testing, and iteration.',
    bullets: [
      'Conceived and validated the product through user interviews, pain-point analysis, and feature prioritization',
      'Built and deployed a full-stack MVP: trip creation, participant invites, idea submission, voting, and shared itinerary generation',
      'Developed the React frontend, Node.js/Express backend, and Supabase/PostgreSQL data layer, using OpenAI Codex to accelerate implementation, debugging, and iteration',
      'Ran user acceptance testing and refined the product based on observed usability and workflow feedback',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Zustand', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'OpenAI Codex'],
    github: 'https://github.com/liangl5/Tripable',
    live: 'https://www.tripable.pro/',
  },
];

function ProjectCard({ title, tagline, image, description, bullets, stack, github, live }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
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
      <Box
        component="img"
        src={`${process.env.PUBLIC_URL}/imgs/${image}`}
        alt={`${title} screenshot`}
        sx={{ width: '100%', height: { xs: 200, md: 280 }, objectFit: 'cover', objectPosition: 'top', display: 'block' }}
      />

      <Box sx={{ padding: { xs: '20px', md: '28px' }, textAlign: 'left' }}>
        <Typography sx={{ fontWeight: 700, fontSize: 22, color: theme.palette.background.on, marginBottom: '4px' }}>
          {title}
        </Typography>
        <Typography sx={{ fontFamily: monoFont, fontSize: 13.5, color: theme.palette.secondary.main, marginBottom: '14px' }}>
          {tagline}
        </Typography>

        <Typography variant="body2" sx={{ color: theme.palette.background.ons, marginBottom: '16px' }}>
          {description}
        </Typography>

        <Box component="ul" sx={{ margin: '0 0 18px', paddingLeft: '20px' }}>
          {bullets.map((item, i) => (
            <Box
              component="li"
              key={i}
              sx={{ fontSize: 14.5, lineHeight: 1.7, color: theme.palette.background.on, marginBottom: '4px' }}
            >
              {item}
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
          {stack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                backgroundColor: theme.palette.background.main,
                color: theme.palette.background.on,
                border: `1px solid ${theme.palette.background.border}`,
              }}
            />
          ))}
        </Box>

        <Box sx={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="contained" color="secondary" startIcon={<GitHubIcon />} href={github}>
            GitHub
          </Button>
          <Button variant="outlined" color="secondary" startIcon={<OpenInNewIcon />} href={live}>
            Live Demo
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

function Projects() {
  return (
    <Box
      component="section"
      id="projects"
      aria-labelledby="projects-heading"
      sx={{ maxWidth: '860px', margin: '0 auto', padding: { xs: '60px 20px', md: '100px 40px' } }}
    >
      <Reveal>
        <SectionHeading index="03 /" title="Projects" id="projects-heading" />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </Box>
      </Reveal>
    </Box>
  );
}

export default Projects;
