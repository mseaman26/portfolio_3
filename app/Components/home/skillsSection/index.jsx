'use client'
import styles from './skills.module.css'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '@/Lib/skills'
import { lorem } from '@/Lib/lorem'
import Link from 'next/link'

const SkillsSection = () => {

    const [selectedBox, setSelectedBox] = useState(null)
    const delayTime = .3

    const handleBoxClick = (box) => {
        if(selectedBox === box){
            setSelectedBox(null)
        }else{
            setSelectedBox(box)
        }
    }

    useEffect(() => {
        console.log(selectedBox)
    }, [selectedBox])
    return(
        <div className={styles.container}>
            
        </div>
    )
}

export default SkillsSection