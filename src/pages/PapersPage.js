import * as React from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import PaperEntry from '../components/PaperEntry';

function PapersPage() {
    const theme = useTheme();
    return (
        <Box sx={{maxWidth: '1100px', padding: '15px 25px 20px 25px'}}>
            <Typography
                    variant="h3"
                    align="left"
                    color={theme.palette.background.on}
                    sx={{borderColor: theme.palette.background.ons}}
                >
                    Publications
            </Typography>

            <PaperEntry title={'Experimental evaluation of a machine learning approach to improve the reproducibility of network simulations'} authors={'L. Liang, H. Phan, P. J. Giabbanelli'} highlighted_author={0} venue={'Simulation, 2024'} link={'https://journals.sagepub.com/doi/abs/10.1177/00375497241229753'} code={'https://osf.io/c2wb5/'}/>
            
            <PaperEntry title={'Simulation models for suicide prevention: a survey of the state-of-the-art'} authors={'R. Schuerkamp, L. Liang, K. L Rice, P. J. Giabbanelli'} highlighted_author={1} venue={'Computers 12.7, 2023'} link={'https://www.mdpi.com/2073-431X/12/7/132'} code={''}/>

            <PaperEntry title={'Preserving simulation insight while removing data: verification of compressed simulation traces via machine learning'} authors={'M. Nguyen, D. Vu, A. Vo, L. Liang, P. J. Giabbanelli'} highlighted_author={3} venue={'Annual Modeling and Simulation Conference (ANNSIM), 2023'} link={'https://ieeexplore.ieee.org/abstract/document/10155370/'} code={'https://osf.io/c2wb5/'}/>

            <PaperEntry title={'A new application of machine learning: detecting errors in network simulations'} authors={'M. K. Wozniak, L. Liang, H. Phan, P. J. Giabbanelli'} highlighted_author={1} venue={'Winter Simulation Conference (WSC), 2022'} link={'https://ieeexplore.ieee.org/abstract/document/10015484/'} code={'https://osf.io/c2wb5/'}/>

            <Typography
                    variant="h3"
                    align="left"
                    color={theme.palette.background.on}
                    sx={{marginTop: '20px', borderColor: theme.palette.background.ons}}
                >
                    In Preparation
            </Typography>

            <PaperEntry title={'A Cellular Automata Approach to Evaluating Drug Effectiveness for HIV'} authors={'L. Liang, Z. Sun, P. J. Giabbanelli'} highlighted_author={0} venue={''} link={''} code={''}/>

            <PaperEntry title={'An Artificial Intelligence Approach to Support Youth Suicide Prevention Initiatives in the U.S.A'} authors={'L. Liang, R. Schuerkamp, K. L. Rice, M. M. Brown, N. Nataraj, J. Mendoza-Alonzo, C. R. Harper, C. Florence, B. D. Maldonado, B. Moran, P. J. Giabbanelli'} highlighted_author={0} venue={''} link={''} code={''}/>

            <PaperEntry title={'Impact of Policies, Practices, and Programs on Preventing Adolescent Suicide: An Agent-Based Modeling Approach'} authors={'K. L. Rice, P. J. Giabbanelli, M. M. Brown, N. Nataraj, C. R. Harper, L. Liang, R. Schuerkamp, C. Florence'} highlighted_author={5} venue={''} link={''} code={''}/>
        </Box>

    )
}

export default PapersPage;