import * as React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Box, Typography, IconButton, Collapse, useTheme } from '@mui/material';

import ExpandIcon from '@mui/icons-material/Expand';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import DownloadIcon from '@mui/icons-material/Download';




function ResumePage() {
    const theme = useTheme();
    const [resumeShow, setResumeShow] = React.useState(false);
    const [cvShow, setcvShow] = React.useState(false);

    const handleExpand = (event) => {
        if (event == 'resume') {
            setResumeShow(!resumeShow) 
        } else {
            setcvShow(!cvShow)
        }
    };

    const renderIcon = (event) => {
        if (event) {
            return <CloseFullscreenIcon style={{ fontSize: 36 }} color='secondary' />
        }
        return <ExpandIcon style={{ fontSize: 36 }} color='secondary' />
    };

    return (
        <Box sx={{maxWidth: '1100px', padding: '15px 25px 20px 25px'}}>
            <Box>
                <Typography
                    variant="h3"
                    align="left"
                    color={theme.palette.background.on}
                    sx={{borderColor: theme.palette.background.ons}}
                >
                    Luke_Liang_Resume.pdf

                    <IconButton aria-label="Expand" onClick={()=>{handleExpand('resume')}} sx={{padding: '0 10px 0 25px'}}>
                        {renderIcon(resumeShow)}
                    </IconButton>

                    <IconButton 
                        aria-label="Download Resume" 
                        component="a"
                        href={`${process.env.PUBLIC_URL}/documents/Luke_Liang_Resume.pdf`}
                        download="Luke_Liang_Resume.pdf"
                        sx={{padding: 0}}
                    >
                        <DownloadIcon style={{ fontSize: 36 }} color='secondary' />
                    </IconButton>
                </Typography>

            </Box>

            <Collapse in={resumeShow}>
                <Box sx={{margin: 'auto', width: '100%', height: 'auto', maxWidth: '1000px'}}>
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`} >
                        <Viewer fileUrl={`${process.env.PUBLIC_URL}/documents/Luke_Liang_Resume.pdf`}/>
                    </Worker>
                </Box>
            </Collapse>


            <Box>
                <Typography
                    variant="h3"
                    align="left"
                    color={theme.palette.background.on}
                    sx={{marginTop: '20px', borderColor: theme.palette.background.ons}}
                >
                    Luke_Liang_CV.pdf

                    <IconButton aria-label="Expand" onClick={()=>{handleExpand('cv')}} sx={{padding: '0 10px 0 25px'}}>
                        {renderIcon(cvShow)}
                    </IconButton>

                    <IconButton 
                        aria-label="Download CV" 
                        component="a"
                        href={`${process.env.PUBLIC_URL}/documents/Luke_Liang_CV.pdf`}
                        download="Luke_Liang_CV.pdf"
                        sx={{padding: 0}}
                    >
                        <DownloadIcon style={{ fontSize: 36 }} color='secondary' />
                    </IconButton>
                </Typography>

            </Box>

            <Collapse in={cvShow}>
                <Box sx={{margin: 'auto', width: '100%', height: 'auto', maxWidth: '1000px'}}>
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`} >
                        <Viewer fileUrl={`${process.env.PUBLIC_URL}/documents/Luke_Liang_CV.pdf`}/>
                    </Worker>
                </Box>
            </Collapse>





        </Box>

    )
}

export default ResumePage;