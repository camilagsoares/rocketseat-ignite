import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'
import background from '../assets/background.png'

export function Sidebar() {

    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src={background}
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/camilagsoares.png" />
                <strong>Camila Soares</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}