'use client'
import styles from './resumePage.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Resume from '../Components/resume/pdfComp'
import PDFViewer from '../Components/resume/pdfViewer'

export default function ResumePage(){

    const router = useRouter()


    const [screenSize, setScreenSize] = useState(
        {}
      );
    
    screenSize.width <= 992 ? router.push('images/Resume.pdf') : {}
    const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); 

    useEffect(() => {
        console.log(screenSize.width)
    }, [screenSize])
    return(
        <main className={styles.container}>
            <h1 className={styles.header}>If you'd like to download (or view on a mobile screen) a pdf copy of my resume,  
            {screenSize.width > 992 ? (
                <span className={styles.downloadPDF}><a
                href="/images/Resume.pdf"
                alt="alt text"
                target="_blank"
                download={true}
                rel="noopener noreferrer"
                >Click Here download</a>
                </span>
            ) : (
                <span className={styles.viewPDF}><a
                    href="/images/Resume.pdf"
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"
                >Click Here to View</a>
                </span>
            )}     
                
                
            </h1>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vTesKNuhGVSf4A7OBf9NBg2E2h1jGPAbhNEID1PUptgd7UdwDUvbXRBvm5OwCOzW_o_tsEeHOvgfXFZ/pub?embedded=true"></iframe>
        </main>
    )
}