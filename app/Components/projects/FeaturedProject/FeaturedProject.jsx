'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './featuredProjects.module.css'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const FeaturedProject = ({id, gif, image, title, description, link, github, alt, techs, githubServer, githubClient, index}) => {

    const [imageDisplay, setImageDisplay] = useState('inline')
    const [gifLoaded, setGifLoaded] = useState(false);

  const handleGifLoad = () => {
    setGifLoaded(true);
  }

    useEffect(() => {
        if(gif){
            setTimeout(() => {
                setImageDisplay('none') 
             }, 1500);
        }
        
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.imageAndInfo}>
                <div className={styles.imageAndGif}>
                    <div className={`${styles.gifContainer} ${gifLoaded ? '' : styles.hidden}` } style={!gifLoaded ? {position: 'absolute', height: 0, width: 0, zIndex: 0} : {}}>
                    <a href={link} target='_blank'>  
                    {gif && <Image 
                    src={gif} 
                    loading="lazy"
                    decoding='async'
                    data-nimg='1'
                    width={600} 
                    height={600} 
                    alt={alt} 
                    className={`${styles.gif}`}
                    onLoadingComplete={handleGifLoad}
                    />}
                    </a> 
                    </div>
                    <div className={`${styles.imageContainer} ${gifLoaded ? styles.hidden : ''}`} style={gifLoaded ? {position: 'absolute', height: 0, width: 0, zIndex: 0} : {}}>
                        <a href={gifLoaded ? '' : link} target='_blank' >
                        <Image 
                            className={`${styles.stillImage}`} 
                            loading="lazy"
                            decoding='async'
                            data-nimg='1' 
                            src={image} 
                            width={600} 
                            height={600} 
                            alt={alt}>
                        </Image>
                        </a>
                    </div>
                </div>
                
                <div className={styles.info}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
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
        </div>
    )
}

export default FeaturedProject