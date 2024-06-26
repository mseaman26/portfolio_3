import styles from './navBar.module.css'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import BurgerMenu from './burgerMenu';
import NavLink from './navLink';

const Navbar = () =>{
    return(
        <nav className={styles.container}>
            <div className={styles.navLeft}>
                <Link href='https://github.com/mseaman26' target='_blank' rel="noreferrer" className={styles.iconLink}>
                    <FontAwesomeIcon icon={faGithub} className={styles.icon}/>
                </Link> 
                <Link href='https://www.linkedin.com/in/michael-seaman-120a59250/' className={styles.iconLink} target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className={styles.icon}/>
                </Link>
            </div>
            <div className={styles.navRight}>
                <div className={styles.desktopNav}>
                    <NavLink href='/' text='HOME'/>
                    <NavLink href='/projects' text='PROJECTS'/>
                    <NavLink href='/resume' text='RESUME'/>
                    <NavLink href='/contact' text='CONTACT'/>
                </div>
                <div className={styles.mobileNav}>
                    <BurgerMenu/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar