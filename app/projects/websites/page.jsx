import Project from '@/app/Components/projects/Project'
import styles from './websites.module.css'
import Dash from '@/app/Components/dash'
import casaSusana from '../../../public/images/CasaSusana-ezgif.com-optimize.gif'
import { lorem } from '@/Lib/lorem'
import { websites } from '@/Lib/projects'

const Websites = () => {
    return(
        <main className={styles.container}>
            <h1>Professional Websites</h1>
            <Dash/>
            {websites.map((project) =>{
                return(
                    <Project gif={project.gif} image={project.image}title ={'Casa Susana'} description={project.description} link={project.link} github={project.github}/>
                )
            })}
            
        </main>
    )
}

export default Websites