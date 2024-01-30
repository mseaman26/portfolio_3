'use client'
import styles from './project.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Project = ({id, gif, image, title, description, link, github, alt}) => {

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
                    <Image className={styles.stillImage} src={image} width={300} height={300} style={{display: gif ? imageDisplay : 'inline'}} alt={alt}></Image>
                </div>
                <p>{description}</p>
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