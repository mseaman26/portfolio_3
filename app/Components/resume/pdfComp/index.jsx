'use client'
import { useState } from "react";
import { Document, Page } from "react-pdf";
// import resumePDF from '@/public/images/Resume.pdf'


function PdfComp(props) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-div">
           <p>
        Page {pageNumber} of {numPages}
      </p>
      <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => {
            return (
              <Page
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            );
          })}
      </Document>
   
    </div>
  );
}
export default PdfComp;