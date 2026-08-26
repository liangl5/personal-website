import * as React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const highlights = [
  {
    title: 'Research at Columbia',
    text: () =>
      'Research Assistant working on a bioinformatics pipeline for high-throughput viral genomic sequencing — processing 400+ patient samples and 5+ TB of data, and turning genomic outputs into diagnostic charts and variant summary dashboards for clinical use.',
  },
  {
    title: 'Undergraduate Research',
    text: (theme) => (
      <>
        Research with{' '}
        <a href="https://giabbanelli.com/author/philippe-j.-giabbanelli/" style={{ color: theme.palette.background.onlink, textDecoration: 'none' }}>
          Dr. Philippe Giabbanelli
        </a>{' '}
        on machine learning applications in network simulation and health-oriented applications — 5 publications
        (2 first author). Built a fullstack web application with backend simulations for the{' '}
        <a href="https://www.cdc.gov/" style={{ color: theme.palette.background.onlink, textDecoration: 'none' }}>
          Centers for Disease Control and Prevention (CDC)
        </a>
        .
      </>
    ),
  },
  {
    title: 'Teaching Assistant',
    text: () =>
      'Machine Learning and Algorithms course — led a published research project, tutored students in Python, and graded exams, homework, and labs.',
  },
];

function About() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id="about"
      aria-labelledby="about-heading"
      sx={{ maxWidth: '860px', margin: '0 auto', padding: { xs: '60px 20px', md: '100px 40px' } }}
    >
      <Reveal>
        <SectionHeading index="01 /" title="About" id="about-heading" />

        <Typography sx={{ color: theme.palette.background.on, marginBottom: '24px' }}>
          Master's student in Computer Science (Machine Learning track) at Columbia University. Graduate of Miami
          University (2021–2024) with a B.S. in Computer Science and a B.S. in Data Science and Statistics.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
          {highlights.map((h, i) => (
            <Box
              key={i}
              sx={{
                padding: '20px',
                borderRadius: '14px',
                backgroundColor: theme.palette.background.surface,
                border: `1px solid ${theme.palette.background.border}`,
                textAlign: 'left',
              }}
            >
              <Typography sx={{ fontWeight: 600, marginBottom: '6px', color: theme.palette.background.on }}>
                {h.title}
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.background.ons }}>
                {h.text(theme)}
              </Typography>
            </Box>
          ))}
        </Box>

        <Typography sx={{ color: theme.palette.background.on, marginBottom: '16px' }}>
          Through my undergraduate research I was awarded the{' '}
          <a href="https://www.astronautscholarship.org/" style={{ color: theme.palette.background.onlink, textDecoration: 'none' }}>
            Astronaut Scholarship
          </a>{' '}
          in 2023 — one of 68 college students nationally awarded this prestigious honor.
        </Typography>

        <Typography sx={{ color: theme.palette.background.on }}>
          My industry experience spans a software engineering internship at{' '}
          <a href="https://www.jpmorganchase.com/" style={{ color: theme.palette.background.onlink, textDecoration: 'none' }}>
            JPMorgan Chase & Co.
          </a>{' '}
          — rebuilding payment & billing software with ReactJS and winning the Code for Good hackathon in 2022 — and
          most recently a software engineering internship at{' '}
          <a href="https://www.visa.com/" style={{ color: theme.palette.background.onlink, textDecoration: 'none' }}>
            VISA
          </a>
          , where I architected an AI-driven container vulnerability remediation agent using Claude via MCP, cutting
          manual time-to-patch by 40% across 1,500+ supported container images.
        </Typography>
      </Reveal>
    </Box>
  );
}

export default About;
