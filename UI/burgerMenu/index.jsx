"use client"
import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'

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
    },
    //Styling of overlay
    bmOverlay: {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100vw',
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }
  } 

const BurgerMenu = () => {
    return(
        <Menu styles={menuStyles} right>
            <Link href='/'>HOME</Link>
        </Menu>
    )
}

export default BurgerMenu