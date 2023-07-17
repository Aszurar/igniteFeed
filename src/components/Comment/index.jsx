import { Avatar } from '../avatar'
import PropTypes from 'prop-types';
import { Trash, ThumbsUp } from "phosphor-react";
import styles from './styles.module.css';

export function Comment({ avatar, name, time, like, content }) {
  return (
    <div className={styles.container}>
      <Avatar urlImage={avatar} />
      <div className={styles.body}>
        <main className={styles.main}>
          <header>
            <div className={styles.author}>
              <h4>{name}<span> (você)</span></h4>
              <p>Cerca de {time}h</p>
            </div>
            <button type='button'>
              <Trash size={24} />
            </button>
          </header>
          <content>
            <p>{content}</p>
          </content>
        </main>

        <footer className={styles.footer}>
          <a href="#"><ThumbsUp size={20} /></a>

          <p>Aplaudir • {like}</p>
        </footer>
      </div>
    </div>
  )
}

Comment.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  like: PropTypes.number.isRequired,
};

