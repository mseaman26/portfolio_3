'use client'
import styles from './page.module.css'
import Image from 'next/image'
import MainProject from './Components/projects/MainProject/MainProject'
import { games } from '@/Lib/projects'
import { useState,  useEffect } from 'react'
import headshot from '@/public/images/headshot.webp'
import EmblaCarousel from '@/app/Components/Courosel/Caurosel'
import { projects } from '@/Lib/projects'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const OPTIONS = { loop: true }

export default function Home() {

  const [headshotLoaded, setHeadshotLoaded] = useState(false);

  // useEffect(() => {
  //   if (headshotref.current && headshotref.current.complete) {
  //     setHeadshotLoaded(true);
  //   }
  // }, [headshotref.current]);

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
      <div className={`${styles.headShot} ${headshotLoaded ? styles.loaded : ''}`}  >
        <Image 
          // ref={headshotref} 
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
      <div className={styles.content} style={{visibility: headshotLoaded ? 'visible': 'hidden'}}>
        <h1 className={styles.pageHeader}>Hi, I'm Mike</h1>
        <p className={styles.aboutMe} >I'm a passionate Full-Stack Developer with a knack for all things web development and debugging. With a keen eye for detail and a love for solving complex problems, I strive to create efficient, robust, and user-friendly web applications. Whether it's front-end design or back-end architecture, I'm dedicated to delivering high-quality solutions that meet and exceed user expectations. Please have a look at some of my work below!</p>
        <h2 className={styles.mainProjectHeader}>Featured Project</h2>
        <MainProject
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
 
        <h2 className={styles.featuredProjectHeader}>More Projects</h2>
        <h6 className={styles.moreProjectsSubheader}>{`(swipe left or right for more)`}</h6>
        <section className={styles.carouselSection}>
          <EmblaCarousel projects={projects} options={OPTIONS} />
        </section>
        <h2 className={styles.featuredProjectHeader}>Let's get in touch! I'd love to talk about ANYTHING coding-related!</h2>
        <div className={styles.contactSection}>
          <p className={styles.contactMe}>Feel free to email me at:<br/> <a className={styles.contactLink} href='mailto:mseaman26@gmail.com'>mseaman26@gmail.com</a></p>
          <p className={styles.contactMe}>You can view and/or download my resume<br/> <a className={styles.contactLink} href='https://docs.google.com/document/d/1aHOgJrOeMHXgQopKNYulgnNEfvE55DVrbeCR2yirUqA/edit' target='_blank'>HERE</a></p>
        </div>
        <div className={styles.socials}>
          <a href='https://github.com/mseaman26' target='_blank'><FontAwesomeIcon icon={faGithub} className={styles.icon} /></a>
          <a href='https://www.linkedin.com/in/michael-seaman-120a59250/' target='_blank'><FontAwesomeIcon icon={faLinkedin} className={styles.icon} /></a>
        </div>
      </div>
      <div>
        
      </div>
        
    </main>
  )
}
