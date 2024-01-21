
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
        <Image src={'/images/headshot.webp'} width={100} height={100} layout='responsive' alt='headshot of Michael Seaman'/>
      </div>
      <SkillsSection/>
    </main>
  )
}
