import React from 'react'

import styles from './styles.module.css';
import EditProfileSVG from '../../assets/icons/edit-profile.svg';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
        src="https://images.unsplash.com/photo-1685728399140-5650bbcfc015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=760&q=50" alt="" />

      <div className={styles.profile}>

        <main className={styles.info}>
          <div className={styles.profileImageContainer}>
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="foto do perfil do usuário" />
          </div>

          <div className={styles.textContainer}>
            <strong>Leslie Alexander</strong>
            <p>Desenvolvedora Front-end</p>
          </div>

        </main>

        <div className={styles.separator} />

        <footer>
          <a href="#" >
            <img src={EditProfileSVG} alt="" />
            <strong>Editar seu perfil</strong>
          </a>
        </footer>
      </div>

    </aside>
  )
}
