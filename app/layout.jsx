import './globals.css'
import { Inter, Roboto_Mono} from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'], variable: '--inter'})
const chocolateSans = Roboto_Mono({ subsets: ['latin'], variable: '--roboto', weight: '400', display: 'swap'})

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
      <style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');
</style>
      </Head>
      <body className={`${inter.variable} ${chocolateSans.variable}`}>
      
        {children}
      </body>
    </html>
  )
}
