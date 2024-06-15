'use client'
import styles from './project.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Project = ({id, gif, image, title, description, link, github, alt, techs}) => {

    const [imageDisplay, setImageDisplay] = useState('inline')

    useEffect(() => {
        setTimeout(() => {
           setImageDisplay('none') 
        }, 1500);
    }, [])

    return (
        <section className={styles.container}>
            <h2>{title}</h2>
            <div className={styles.imageAndDesc}>
                <div className={styles.imageAndGif}>
                    {gif && 
                        <Image 
                        src={gif} 
                        loading="lazy"
                        decoding='async'
                        data-nimg='1'
                        width={300} 
                        height={300} 
                        alt={alt} 
                        srcset={Project.imgSrcSet}/>
                    }
                    <Image loading="lazy"
                        decoding='async'
                        data-nimg='1' 
                        className={styles.stillImage} 
                        src={image} 
                        width={300} height={300} 
                        style={{display: gif ? imageDisplay : 'inline'}} 
                        alt={alt}>
                    </Image>
                </div>
                <div>
                    <p>{description}</p>
                    <h3>Techs and Techniques:</h3>
                    <div className={styles.techList}>
                        <ul>
                            {/* {techs.map((tech) => {
                                return(
                                    <li>{tech}</li>
                                )
                            })} */}
                        </ul>
                    </div>
                </div>
                
                {/* <h2>Techs and Techniques</h2> */}
            </div>
            <div className={styles.links}>
                {link && 
                    <Link href={link} target='_blank'>Visit Live Site</Link>
                }
                {github && 
                    <Link href={github} target='_blank'>Visit Github Repo</Link>
                }
            </div>
        </section>
    )
}

export default Project