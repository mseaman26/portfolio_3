'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './MainProject.module.css'

const MainProject = ({id, gif, image, title, description, link, github, alt, techs}) => {

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