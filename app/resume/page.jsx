import styles from './resumePage.module.css'
import Resume from '../Components/resume/pdfComp'
import PDFViewer from '../Components/resume/pdfViewer'

export default function ResumePage(){


    return(
        <main className={styles.container}>
            <h1 className={styles.header}>If you'd like to download (or view on a mobile screen) a pdf copy of my resume,<span><a
                href="/images/Resume.pdf"
                alt="alt text"
                target="_blank"
                download={true}
                rel="noopener noreferrer"
            >Click Here</a></span></h1>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vTesKNuhGVSf4A7OBf9NBg2E2h1jGPAbhNEID1PUptgd7UdwDUvbXRBvm5OwCOzW_o_tsEeHOvgfXFZ/pub?embedded=true"></iframe>
        </main>
    )
}