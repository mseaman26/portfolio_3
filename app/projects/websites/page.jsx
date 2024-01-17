import Project from '@/app/Components/projects/Project'
import styles from './websites.module.css'
import Dash from '@/app/Components/dash'
import casaSusana from '../../../public/images/CasaSusana1-ezgif.com-optimize.gif'

const Websites = () => {
    return(
        <main className={styles.container}>
            <h1>Professional Websites</h1>
            <Dash/>
            <Project src={casaSusana}/>
        </main>
    )
}

export default Websites