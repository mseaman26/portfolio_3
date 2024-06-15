'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './MainProject.module.css'
import Link from 'next/link'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { projects } from '@/Lib/projects'

const MainProject = ({id, gif, image, title, description, link, github, alt, techs, githubServer, githubClient, index}) => {

    const [imageDisplay, setImageDisplay] = useState('inline')

    useEffect(() => {
        if(gif){
            setTimeout(() => {
                setImageDisplay('none') 
             }, 1500);
        }
        
    }, [])

    return (
        <div className={styles.container}>
            <h2 className={styles.titleMobile}>{title}</h2>
            {gif && <div className={styles.mainGifContainer}>
            <a href={link} target='_blank'>  
            {gif && 
                <Image 
                src={gif} 
                loading="lazy"
                decoding='async'
                data-nimg='1'
                width={600} 
                height={600} 
                alt={alt} 
                quality={100}
                />
                
            }
            </a> 
            </div>}
            <div className={styles.mainImageContainer}>
                <a href={link} target='_blank'>
                <Image className={styles.stillImage} src={image} width={600} height={600} alt={alt} quality={100}></Image>
                </a>
            </div>
            <div className={styles.titleAndDescription}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <div className={styles.buttons}>
                {
                    <Link className={`${styles.button} ${styles.learnMore}`} href={`/project/${projects.length - 1}`} >Learn More</Link>
                }
                {link && 
                    <a className={`${styles.button} ${styles.liveSite}`} href={link} target='_blank'>Visit Live Site</a>
                }
                {github && 
                    <a className={`${styles.button} ${styles.repoLink}`}  href={github} target='_blank'><FontAwesomeIcon icon={faGithub} className={styles.icon}/> Github Repo</a>
                }
                {
                    githubServer &&
                    <a className={`${styles.button} ${styles.repoLink}`}  href={githubServer} target='_blank'><FontAwesomeIcon icon={faGithub} className={styles.icon}/> Server Repo</a>
                }
                {
                    githubClient &&
                    <a className={`${styles.button} ${styles.repoLink}`}  href={github  } target='_blank'><FontAwesomeIcon icon={faGithub} className={styles.icon}/> Client Repo</a>
                }
                
                </div>
            </div>
            

            
            {/* <h2>Techs and Techniques</h2> */}

            {/* <div className={styles.links}>
                {link && 
                    <Link href={link} target='_blank'>Visit Live Site</Link>
                }
                {github && 
                    <Link href={github} target='_blank'>Visit Github Repo</Link>
                }
            </div> */}
        </div>
    )
}

export default MainProject