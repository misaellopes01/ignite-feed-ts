import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://media-exp1.licdn.com/dms/image/C4E16AQFsND6UCoAyjw/profile-displaybackgroundimage-shrink_350_1400/0/1654082957507?e=1664409600&v=beta&t=oow25i1zKFBW87buCIgrWv95brQHL2W5lclOBZgAtAc"
            />

            <div className={styles.profile}>

                <Avatar src="https://github.com/misaellopes01.png" />

                <strong>Misael Lopes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine
                        size={20}
                    />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    )
}