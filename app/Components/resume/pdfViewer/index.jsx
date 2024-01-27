import React from 'react';
import { Document, Page } from '@react-pdf/renderer';
import resume from '@/public/images/Resume.pdf'

const PDFViewer = () => {
    // const pdfURL = 'images/Resume.pdf';
return (
    <div>
        <Document file={resume}>
            {/* <Page pageNumber={1} /> */}
        </Document>
    </div>
 );
};
export default PDFViewer;