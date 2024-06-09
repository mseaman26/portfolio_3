'use client'
import styles from './page.module.css'
import Image from 'next/image'
import FeaturedProject from '@/app/Components/projects/FeaturedProject/FeaturedProject'
import { games, websites } from '@/Lib/projects'
import { useState, useRef, useEffect } from 'react'
import headshot from '@/public/images/headshot.webp'


export default function Home() {

  const [headshotLoaded, setHeadshotLoaded] = useState(false);
  const headshotref = useRef(null)

  useEffect(() => {
    if (headshotref.current && headshotref.current.complete) {
      setHeadshotLoaded(true);
    }
  }, [headshotref.current]);

  useEffect(() => {
    setTimeout(() => {
      setHeadshotLoaded
    }, 2000);
  }, [])

  const handleImageLoad = () => {
    setHeadshotLoaded(true);
  };

  return (
    <main className={styles.container}>
      {/* <h1 className={styles.michaelSeaman}>Michael Seaman</h1>
      <Dash/>
      <h2>Full-Stack Developer</h2> */}
      <div className={`${styles.headShot} ${headshotLoaded ? styles.loaded : ''}`}  onLoad={() => setHeadshotLoaded(true)}>
        <Image 
          ref={headshotref} 
          className={`${styles.headShotImage}`}
          loading='lazy'
          width={100} 
          height={100} 
          decoding="async"
          layout='responsive' 
          sizes="250px"
          alt='headshot of Michael Seaman'
          data-nimg="1"
          onLoadingComplete={handleImageLoad}
        src={headshot}/>
      </div>
      <div className={styles.content}>
        <h1>Hi, I'm Mike</h1>
        <p className={styles.aboutMe}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2 className={styles.featuredProjectsHeader}>Featured Projects</h2>
        <div className={styles.FeaturedProjects}>
          <FeaturedProject 
              gif={games[0].gif} 
              image={games[0].image}
              title ={games[0].title} 
              description={games[0].description} 
              link={games[0].link} 
              github={games[0].github} 
              alt={games[0].alt}
              skills={games[0].skills}
              techs={games[0].techs}
              />
              <FeaturedProject 
              gif={games[1].gif} 
              image={games[1].image}
              title ={games[1].title} 
              description={games[1].description} 
              link={games[1].link} 
              github={games[1].github} 
              alt={games[1].alt}
              skills={games[1].skills}
              techs={games[1].techs}
              />
              <FeaturedProject 
              gif={websites[0].gif} 
              image={websites[0].image}
              title ={websites[0].title} 
              description={websites[0].description} 
              link={websites[0].link} 
              github={websites[0].github} 
              alt={websites[0].alt}
              skills={websites[0].skills}
              techs={websites[0].techs}
              />
          </div>
      </div>
        
    </main>
  )
}
