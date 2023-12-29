import styles from './project.module.css'
import Image from 'next/image'

const Project = ({id, src}) => {
    return (
        <section>
            <Image src={src} width={300} height={300}/>
        </section>
    )
}

export default Project