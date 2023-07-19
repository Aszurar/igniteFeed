import PropTypes from 'prop-types';

import styles from './styles.module.css';
import { Avatar } from '../avatar';
import { Divisor } from '../Divisor';
import { Comment } from '../Comment';
export function Post({ author }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar urlImage="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />

          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <p>Dev Front-End</p>
          </div>
        </div>

        <time title="11 de Maio às 8:13h" dateTime="2022-05-11:08:13:30">
          Publicado há 1h
        </time>
      </header>

      <main>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O
          nome do projeto é DoctorCare 🚀
        </p>

        <p className={styles.link}>
          <a href="#">👉 jane.design/doctorcare</a>
        </p>

        <p className={styles.link}>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </main>

      <Divisor />

      <form className={styles.commentForm}>
        <h5>Deixe seu feedback</h5>
        <textarea placeholder="Escreva um comentário..." />
        <button type="submit">Comentar</button>
      </form>

      <div className={styles.commentList}>
        <Comment
          time='1'
          like={33}
          name='Jenny Wilson'
          content='Adorei seu novo portfolio!'
          avatar='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80' />

        <Comment
          time='1'
          like={33}
          name='Jenny Wilson'
          content='Adorei seu novo portfolio!'
          avatar='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80' />

        <Comment
          time='1'
          like={33}
          name='Jenny Wilson'
          content='Adorei seu novo portfolio!'
          avatar='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80' />

        <Comment
          time='1'
          like={33}
          name='Jenny Wilson'
          content='Adorei seu novo portfolio!'
          avatar='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80' />

        <Comment
          time='1'
          like={33}
          name='Jenny Wilson'
          content='Adorei seu novo portfolio!'
          avatar='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80' />

      </div>
    </article>
  );
}

Post.propTypes = {
  author: PropTypes.string.isRequired,
};
