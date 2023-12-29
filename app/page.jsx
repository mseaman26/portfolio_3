
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.container}>
      <h1>Michael Seaman</h1>
      <div className={styles.dash}></div>
      <h2>Full-Stack Developer</h2>
      <div className={styles.headShot}>
        <Image src={'/images/headshot.webp'} width={100} height={100} layout='responsive'/>
      </div>
    </main>
  )
}
