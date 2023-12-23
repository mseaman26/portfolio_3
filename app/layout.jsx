import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/UI/navbar'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Michael Seaman, Software Developer",
  description: "My portfolio showcasing my work as a software developer.",
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
  charset:"UTF-8"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link
        rel="icon"
        href="/images/headshot.webp"
        type="image/<generated>"
        sizes="<generated>"
      />
      </Head>
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
