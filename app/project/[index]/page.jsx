import { projects } from "@/Lib/projects";
import Image from "next/image";
import styles from './Project.module.css'

const ProjectPage = ({params}) => {
  const {index} = params
  const project = projects[index]
  const image = project.image
  console.log(params)
  return <div className={`page ${styles.container}`}>
    <h1>{project.title}</h1>
    <div className={styles.imageContainer}>
      <Image src={image} width={1200} height={1200} className={styles.projectImage}/>
    </div>
    <p>{project.description }</p> 
    <h2>Technologies Used</h2>
    <div className={styles.techs}>
      
        {project.techs.map(tech => <div key={tech} className={styles.tech}>{tech}</div>)}
    </div>
  </div>;
}

export default ProjectPage;