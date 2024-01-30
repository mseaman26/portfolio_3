import styles from './otherProjectsPage.module.css'
import { otherProjects } from '@/Lib/projects'
import Project from '@/app/Components/projects/Project'
import Dash from '@/app/Components/dash'

const OtherProjectsPage = () => {
    return(
        <main className={`page`}>
            <h1>Other Projects</h1>
            <Dash/>
            {otherProjects.map((project) =>{
                return(
                    <Project 
                    gif={project.gif} 
                    image={project.image}
                    title ={project.title} 
                    description={project.description} 
                    link={project.link} 
                    github={project.github} 
                    alt={project.alt}/>
                )
            })}
        </main>
    )
}

export default OtherProjectsPage