import * as React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


function CVPage() {

    return (
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            <Viewer fileUrl={`${process.env.PUBLIC_URL}/documents/Luke_Liang_Resume.pdf`} />
        </Worker>

    )
}

export default CVPage;