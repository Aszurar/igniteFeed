import { PencilSimpleLine } from 'phosphor-react';

import styles from './styles.module.css';
import { Avatar } from '../Avatar';
import { Divisor } from '../Divisor';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1685728399140-5650bbcfc015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=760&q=50"
        alt="."
      />

      <div className={styles.profile}>
        <section className={styles.info}>
          <Avatar urlImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Foto de Perfil" />

          <div className={styles.textContainer}>
            <strong>Leslie Alexander</strong>
            <p>Desenvolvedora Front-end</p>
          </div>
        </section>

        <Divisor />

        <footer>
          <a href="#" aria-label='Editar perfil'>
            <PencilSimpleLine size={20} weight="bold" />
            <strong aria-hidden>Editar seu perfil</strong>
          </a>
        </footer>
      </div>
    </aside>
  );
}
