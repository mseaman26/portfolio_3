
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Image from 'next/image'
import SkillsSection from '@/app/Components/home/skillsSection'
import Dash from './Components/dash'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.michaelSeaman}>Michael Seaman</h1>
      <Dash/>
      <h2>Full-Stack Developer</h2>
      <div className={styles.headShot}>
        <Image  
          loading='lazy'
          width={100} 
          height={100} 
          decoding="async"
          layout='responsive' 
          sizes="100vw"
          alt='headshot of Michael Seaman'
          data-nimg="1"
          srcset="
          /_next/image?url=%2Fimages%2Fheadshot.webp&w=640&q=75 640w,
          /_next/image?url=%2Fimages%2Fheadshot.webp&w=750&q=75 750w,
          /_next/image?url=%2Fimages%2Fheadshot.webp&w=828&q=75 828w,
          /_next/image?url=%2Fimages%2Fheadshot.webp&w=1080&q=75 1080w,
          /_next/image?url=%2Fimages%2Fheadshot.webp&w=1200&q=75 1200w,
          /_next/image?url=%2Fimages%2Fheadshot.webp&w=1920&q=75 1920w,
          /_next/image?url=%2Fimages%2Fheadshot.webp&w=2048&q=75 2048w,
          /_next/image?url=%2Fimages%2Fheadshot.webp&w=3840&q=75 3840w
        "
        src="/_next/image?url=%2Fimages%2Fheadshot.webp&w=3840&q=75"/>
      </div>
      <SkillsSection/>
    </main>
  )
}
