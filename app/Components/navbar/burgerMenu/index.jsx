"use client"
import { useState, useEffect } from 'react'
import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const menuStyles = {
    // Position and sizing of burger button
    bmBurgerButton: {
        zIndex: 0,
        position: 'relative',
        width: '36px',
        height: '30px',
        color: 'white',
    },
    //Color/shape of burger icon bars
    bmBurgerBars: {
      zIndex: 0,
      background: '#f1f1f1'
    },
    //Color/shape of burger icon bars on hover
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    //Position and sizing of clickable cross button
    bmCrossButton: {
      height: '32px',
      width: '32px'
    },
    // Color/shape of close button cross
    bmCross: {
      fontSize: '64em',
      // fontSize: "64px",
      background: '#bdc3c7'
    },
  
    //Sidebar wrapper styles
    // Note: Beware of modifying this element as it can     break the animations - you should not need to touch it in most cases

    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width: '80%',
      top: 0
    },
    //General sidebar styles
    bmMenu: {
        position: 'absolute',
        background: '#333333',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        width: '100%',
        top: 0
    },
    //Morph shape necessary with bubble or elastic
    bmMorphShape: {
      fill: '#373a47'
    },
    //Wrapper for item list
    bmItemList: {
      color: '#F1EFEB',
      padding: '0.8em'
    },
    //Individual item
    bmItem: {
      fontWeight: 700,
      fontSize: 32,
      marginBottom: 20,
      color: '#f1f1f1'
    },
    //Styling of overlay
    bmOverlay: {

      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }
  } 

const BurgerMenu = () => {
    const resumeUrl = 'path/to/your/resume.pdf'
    const uniqueQueryParam = `?nocache=${Date.now()}`
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
      console.log(isMenuOpen)
    }, [])

    const handleRedirect = () => {
      window.location.reload(true); 
      router.push('images/Resume.pdf')
    }

    return(
      <div onClick={()=> setIsMenuOpen(!isMenuOpen)}>
          <Menu styles={menuStyles} right onClose={()=>setIsMenuOpen(false)} onOpen={()=>setIsMenuOpen(true)} isOpen={isMenuOpen}>
              <Link href='/'>HOME</Link>
              <Link href='/projects'>PROJECTS</Link>
              <Link href='/contact'>CONTACT</Link>
              <div href={`${resumeUrl}${uniqueQueryParam}`} onClick={handleRedirect}>RESUME</div>
          </Menu>
      </div>
    )
}

export default BurgerMenu