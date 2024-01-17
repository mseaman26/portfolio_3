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
            {/* skills box */}
            <div className={`${styles.box} ${selectedBox === 'skills' ? styles.boxOpen : ''}`} 
            onClick={() => {handleBoxClick('skills')}}
            >
                {/* title */}
                <div className={styles.title}>
                    <h1>Skills</h1>
                    {/* > symbol */}
                    <motion.div 
                    className={styles.gt}
                    animate={selectedBox === 'skills' ? {rotate: 90} : {}}
                    transition={{duration: delayTime}}
                    >&gt;</motion.div>
                </div>
                {/* skills list */}
                <div className={`${styles.skillsList}`}>
                    {skills.map((skill, index) => {
                        return(
                            <>{`${skill} ${index !== skills.length-1 ? ' | ' : ''}`}</>
                        )
                    })}
                </div>
             </div>
             <div className={`${styles.box} ${selectedBox === 'about' ? styles.boxOpen : ''}`} 
            onClick={() => {handleBoxClick('about')}}
            >
                {/* About */}
                <div className={styles.title}>
                    <h1>About</h1>
                    {/* > symbol */}
                    <motion.div 
                    className={styles.gt}
                    animate={selectedBox === 'about' ? {rotate: 90} : {}}
                    transition={{duration: delayTime}}
                    >&gt;</motion.div>
                </div>
                <div className={`${styles.skillsList}`}>
                    {lorem}
                </div>
            </div>
        </div>
    )
}

export default SkillsSection