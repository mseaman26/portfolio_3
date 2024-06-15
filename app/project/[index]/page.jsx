import { projects } from "@/Lib/projects";
import Image from "next/image";
import styles from './Project.module.css'
import Link from "next/link";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//the font awesome icon was acting wierd until i added a couple imports to the layout.  thanks stack overflow


const ProjectPage = ({params}) => {
  const {index} = params
  const project = projects[index]
  const image = project.image
  const link = project.link
  const github = project.github
  const githubServer = project.githubServer
  const githubClient = project.githubClient
  console.log(params)
  return <div className={`page ${styles.container}`}>
    <div style={{width: '100%'}}>
      <a className={`${styles.button} ${styles.repoLink}`} href="/">&larr; Back</a>
    </div>
    
    <h1>{project.title}</h1>
    <a href={project.link} className={styles.imageContainer} target="_blank">
      <div >
        <Image src={image} width={1200} height={1200} className={styles.projectImage}/>
      </div>
    </a>
    <p>{project.description }</p> 
    <div className={styles.buttons}>
    {link && 
                    <a className={`${styles.button} ${styles.liveSite}`} href={link} target='_blank'>Visit Live Site</a>
                }
                {github && 
                    <a className={`${styles.button} ${styles.repoLink}`}  href={github} target='_blank'><FontAwesomeIcon icon={faGithub} className={styles.icon}/> Github Repo</a>
                }
                {
                    githubServer &&
                    <a className={`${styles.button} ${styles.repoLink}`}  href={githubServer} target='_blank'>Visit Server Repo</a>
                }
                {
                    githubClient &&
                    <a className={`${styles.button} ${styles.repoLink}`}  href={github  } target='_blank'>Visit Client Repo</a>
                }
                {
                    <Link className={`${styles.button} ${styles.learnMore}`} href={`/project/${index}`} >Learn More</Link>
                }
            </div>
    <h2>Technologies Used</h2>
    <div className={styles.techs}>
      
        {project.techs.map(tech => <div key={tech} className={styles.tech}>{tech}</div>)}
    </div>
  </div>;
}

export default ProjectPage;