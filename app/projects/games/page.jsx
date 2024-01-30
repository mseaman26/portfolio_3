import styles from './gamesPage.module.css'
import { games } from '@/Lib/projects'
import Project from '@/app/Components/projects/Project'
import Dash from '@/app/Components/dash'

const GamesPage = () => {
    return(
        <main className={`page`}>
            <h1 className={`myh1`}>Games</h1>
            <Dash/>
            {games.map((project) =>{
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

export default GamesPage