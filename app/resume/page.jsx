import styles from './resumePage.module.css'

export default function ResumePage(){


    return(
        <main className={styles.container}>
            <h1 className={styles.header}>If you'd like to download a pdf copy of my resume, click <span><a
                href="/images/Resume.pdf"
                alt="alt text"
                target="_blank"
                download={true}
                rel="noopener noreferrer"
            >Here</a></span></h1>
            <embed src="/images/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0" style={{border: 'none', width: '100%', height: '100%'}}></embed>
        </main>
    )
}