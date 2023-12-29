import styles from './projects.module.css'
import { projects } from '@/Lib/projects'
import Project from '@/Components/Project'

const Projects = () => {
    return(
        <main className={styles.container}>
            <h1>Projects</h1>
            {projects.map((project, index) => {
                return(
                    <Project id={index} src={project.image}/>
                )
            })}
        </main>
    )
}
export default Projects