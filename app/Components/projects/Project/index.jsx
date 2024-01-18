'use client'
import styles from './project.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Project = ({id, gif, image, title, description, link, github}) => {

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
                <Image src={gif} width={300} height={300}/>
                <Image className={styles.stillImage} src={image} width={300} height={300} style={{display: imageDisplay}}></Image>
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