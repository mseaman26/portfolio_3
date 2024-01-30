import Dash from '../Components/dash'
import styles from './projects.module.css'
import Link from 'next/link'

const Projects = () => {
    return(
        <main className={styles.container}>
            <h1>Projects</h1>
            <Dash/>
            <div className={styles.links}>
                <Link href={'projects/websites'}><h2>Professional Websites</h2></Link>
                <Link href={'projects/games'}><h2>Games</h2></Link>
                <Link href={'projects/other'}><h2>Other Projects</h2></Link>
            </div>
        </main>
    )
}
export default Projects