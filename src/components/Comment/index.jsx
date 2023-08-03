import PropTypes from 'prop-types';
import { Trash, ThumbsUp } from "phosphor-react";
import styles from './styles.module.css';
import { Avatar } from '../Avatar';

export function Comment({ avatar, name, time, like, content }) {
  return (
    <div className={styles.container}>
      <Avatar urlImage={avatar} hasBorder={false} />
      <div className={styles.commentBox}>
        <main className={styles.main}>

          <header>
            <div className={styles.author}>
              <h4>{name}<span> (você)</span></h4>
              <time title="11 de Maio às 8:13h" dateTime="2022-05-11:08:13:30">
                Cerca de {time}h atrás
              </time>
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
          <button type='button'>
            <ThumbsUp size={20} />
            <p>Aplaudir<span>{like}</span></p>
          </button>

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

