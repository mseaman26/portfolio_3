import styles from './resumePage.module.css'

export default function ResumePage(){


    return(
        <main className={styles.container}>
            <h1 className='myh1'>If you'd like to download a pdf copy of my resume, click <span><a
    href="/images/Resume.pdf"
    alt="alt text"
    target="_blank"
    download={true}
    rel="noopener noreferrer"
  >Here</a></span></h1>
            <iframe src="/images/Resume.pdf" style={{border: 'none', width: '100%', height: '100%'}}></iframe>
        </main>
    )
}