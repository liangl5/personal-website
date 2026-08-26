import * as React from 'react';
import { Box } from '@mui/material';
import PaperEntry from '../components/PaperEntry';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const papers = [
  {
    title: 'An artificial intelligence approach to support adolescent suicide prevention initiatives in the United States',
    authors:
      'L. Liang, R. Schuerkamp, K. L. Rice, M. M. Brown, N. Nataraj, J. Mendoza-Alonzo, C. Florence, A. Page, C. R. Harper, B. Maldonado, B. Moran, P. J. Giabbanelli',
    highlighted_author: 0,
    venue: 'Artificial Intelligence in Medicine, 2026',
    link: 'https://www.sciencedirect.com/science/article/pii/S0933365726000631',
    code: '',
  },
  {
    title: 'Experimental evaluation of a machine learning approach to improve the reproducibility of network simulations',
    authors: 'L. Liang, H. Phan, P. J. Giabbanelli',
    highlighted_author: 0,
    venue: 'Simulation 100(6), 545–561, 2024',
    link: 'https://journals.sagepub.com/doi/abs/10.1177/00375497241229753',
    code: 'https://osf.io/c2wb5/',
  },
  {
    title: 'Simulation models for suicide prevention: a survey of the state-of-the-art',
    authors: 'R. Schuerkamp, L. Liang, K. L. Rice, P. J. Giabbanelli',
    highlighted_author: 1,
    venue: 'Computers 12(7), Art. 132, 2023',
    link: 'https://www.mdpi.com/2073-431X/12/7/132',
    code: '',
  },
  {
    title: 'Preserving simulation insight while removing data: verification of compressed simulation traces via machine learning',
    authors: 'M. Nguyen, D. Vu, A. Vo, L. Liang, P. J. Giabbanelli',
    highlighted_author: 3,
    venue: 'Annual Modeling and Simulation Conference (ANNSIM), pp. 345–356, 2023',
    link: 'https://ieeexplore.ieee.org/abstract/document/10155370/',
    code: 'https://osf.io/c2wb5/',
  },
  {
    title: 'A new application of machine learning: detecting errors in network simulations',
    authors: 'M. K. Wozniak, L. Liang, H. Phan, P. J. Giabbanelli',
    highlighted_author: 1,
    venue: 'Winter Simulation Conference (WSC), pp. 653–664, 2022',
    link: 'https://ieeexplore.ieee.org/abstract/document/10015484/',
    code: 'https://osf.io/c2wb5/',
  },
];

function Publications() {
  return (
    <Box
      component="section"
      id="publications"
      aria-labelledby="publications-heading"
      sx={{ maxWidth: '860px', margin: '0 auto', padding: { xs: '60px 20px', md: '100px 40px' } }}
    >
      <Reveal>
        <SectionHeading index="04 /" title="Publications" id="publications-heading" />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {papers.map((p, i) => (
            <PaperEntry key={i} {...p} />
          ))}
        </Box>
      </Reveal>
    </Box>
  );
}

export default Publications;
