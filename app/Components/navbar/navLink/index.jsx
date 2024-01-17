'use client'
import styles from './navLink.module.css'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const NavLink = ({href, text}) => {

    const pathname = usePathname()

    return (
        <div className={styles.container}>
            <Link href={href} className={`${styles.link} ${pathname === href || pathname.startsWith(href + '/') ? styles.active : ''}`}>{text}</Link>
        </div>
    )
}

export default NavLink