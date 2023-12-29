'use client'
import styles from './navLink.module.css'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const NavLink = ({href, text}) => {

    const pathname = usePathname()

    return (
        <Link href={href} className={`${styles.link} ${pathname === href ? styles.active : ''}`}>{text}</Link>
    )
}

export default NavLink