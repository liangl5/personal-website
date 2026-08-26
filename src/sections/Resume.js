import * as React from 'react';
import { Box, Typography, Chip, Button, useTheme } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import SectionHeading, { SubLabel } from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { monoFont } from '../components/Themes';

const education = [
  {
    title: 'M.S. in Computer Science, Machine Learning Track, GPA 3.66',
    org: 'Columbia University, School of Engineering and Applied Science',
    location: 'New York, NY',
    period: 'Expected Dec 2026',
  },
  {
    title: 'B.S. in Computer Science, B.S. in Data Science & Statistics, Minor in Math, GPA 3.86',
    org: 'Miami University, College of Engineering and Computing',
    location: 'Oxford, OH',
    period: 'Aug 2021 – May 2024',
    bullets: ['Astronaut Scholarship (national), Summa Cum Laude, Honors College, ML training on Oak Ridge National HPC'],
  },
];

const experience = [
  {
    title: 'Research Assistant',
    org: 'Columbia University',
    location: 'New York, NY',
    period: 'Sep 2025 – Present',
    bullets: [
      'Automated a bioinformatics pipeline for high-throughput viral genomic sequencing, successfully processing 400+ patient samples and 5+ TB of data',
      'Transformed complex genomic outputs into actionable clinical insights, developing automated visualization scripts to generate diagnostic charts and variant summary dashboards',
    ],
  },
  {
    title: 'Software Engineering Intern',
    org: 'VISA',
    location: 'Austin, TX',
    period: 'May 2026 – Aug 2026',
    bullets: [
      'Architected an AI-driven Container Vulnerability Remediation Agent leveraging Claude via MCP, cutting manual time-to-patch by 40% across 1,500+ supported container images',
      'Automated end-to-end pipelines by provisioning backend database, API integration with production servers, GitHub integrations to parse repository manifest files, submit patch PRs, and triggers for SMTP status alerts',
      'Deployed a conversational AI assistant in MS Teams using Copilot Studio, enabling developers to query container vulnerability states and trigger automated remediation workflows directly from chat',
    ],
  },
  {
    title: 'Research Assistant',
    org: 'Miami University',
    location: 'Oxford, OH',
    period: 'Aug 2021 – Oct 2024',
    bullets: [
      'Engineered a high-performance simulation platform for CDC researchers to evaluate youth suicide prevention policies, translating real-world public health phenomena into scalable quantitative models in close collaboration with domain experts, and built custom visualization tools for multi-variable scenarios',
      'Pioneered anomaly detection pipelines achieving up to 95% accuracy in identifying erroneous network simulations by developing novel graph-to-image encodings, few-shot learning methods, and compression techniques',
      "Built a stochastic HIV viral simulation in Python and NumPy, integrating Stanford's Drug Resistance Database and clinical mutation statistics to model cell-to-cell infection dynamics under 1-, 2-, and 3-drug treatment regimens",
    ],
  },
  {
    title: 'Software Engineering Intern',
    org: 'JPMorgan Chase & Co.',
    location: 'Chicago, IL',
    period: 'Jun 2022 – Aug 2022',
    bullets: [
      'Migrated legacy AngularJS applications to React and managed infrastructure deployments, enhancing front-end performance, component maintainability, and delivery reliability across internal systems',
      'Won 1st Place at the JPMorgan Code for Good Hackathon (2022), collaborating with a team of interns to design and deploy a full-stack web application for a non-profit partner',
    ],
  },
];

const skillGroups = [
  { label: 'Languages', skills: ['Python', 'Java', 'C/C++', 'R', 'SAS', 'SQL', 'JavaScript/TypeScript', 'HTML/CSS'] },
  { label: 'AI/ML & Data', skills: ['PyTorch', 'scikit-learn', 'pandas', 'NumPy', 'TensorFlow', 'MATLAB'] },
  { label: 'AI, Web, Cloud & Databases', skills: ['React', 'Node.js', 'MySQL', 'Supabase', 'AWS Bedrock/Lambda/S3', 'Vercel'] },
  { label: 'Developer & AI Tools', skills: ['Claude Code', 'OpenAI Codex', 'Git/GitHub', 'Linux/Unix'] },
];

function EntryBlock({ title, org, location, period, bullets }) {
  const theme = useTheme();
  return (
    <Box sx={{ marginBottom: '24px', textAlign: 'left' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '4px 16px' }}>
        <Typography sx={{ fontWeight: 600, fontSize: 17, color: theme.palette.background.on }}>{title}</Typography>
        <Typography sx={{ fontFamily: monoFont, fontSize: 13, color: theme.palette.secondary.main, whiteSpace: 'nowrap' }}>
          {period}
        </Typography>
      </Box>
      <Typography sx={{ fontSize: 14, color: theme.palette.background.ons, marginBottom: '8px' }}>
        {org} — {location}
      </Typography>
      {bullets && (
        <Box component="ul" sx={{ margin: 0, paddingLeft: '20px' }}>
          {bullets.map((item, i) => (
            <Box
              component="li"
              key={i}
              sx={{ fontSize: 15, lineHeight: 1.7, color: theme.palette.background.on, marginBottom: '4px' }}
            >
              {item}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

function Resume() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id="resume"
      aria-labelledby="resume-heading"
      sx={{ maxWidth: '860px', margin: '0 auto', padding: { xs: '60px 20px', md: '100px 40px' } }}
    >
      <Reveal>
        <SectionHeading index="02 /" title="Resume" id="resume-heading" />

        <SubLabel sx={{ marginBottom: '20px' }}>Education</SubLabel>
        {education.map((item, i) => (
          <EntryBlock key={i} {...item} />
        ))}

        <SubLabel sx={{ margin: '32px 0 20px' }}>Experience</SubLabel>
        {experience.map((item, i) => (
          <EntryBlock key={i} {...item} />
        ))}

        <SubLabel sx={{ margin: '32px 0 16px' }}>Skills</SubLabel>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
          {skillGroups.map((group) => (
            <Box key={group.label} sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
              <Typography
                sx={{
                  fontSize: 13,
                  color: theme.palette.background.ons,
                  minWidth: { xs: '100%', sm: '200px' },
                  marginBottom: { xs: '2px', sm: 0 },
                }}
              >
                {group.label}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      backgroundColor: theme.palette.background.surface,
                      color: theme.palette.background.on,
                      border: `1px solid ${theme.palette.background.border}`,
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DownloadIcon />}
            component="a"
            href={`${process.env.PUBLIC_URL}/documents/Luke_Liang_Resume.pdf`}
            download="Luke_Liang_Resume.pdf"
          >
            Download Resume
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<DownloadIcon />}
            component="a"
            href={`${process.env.PUBLIC_URL}/documents/Luke_Liang_CV.pdf`}
            download="Luke_Liang_CV.pdf"
          >
            Download CV
          </Button>
        </Box>
      </Reveal>
    </Box>
  );
}

export default Resume;
