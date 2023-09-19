import { useState } from 'react';
import { Trash, ThumbsUp } from "phosphor-react";

import styles from './styles.module.css';
import { Avatar } from '../Avatar';


type CommentProps = {
  name: string;
  time: string;
  like: number;
  avatar: string;
  content: string;
  onDeleteComment: () => void;
}

export function Comment({ name, time, like, avatar, content, onDeleteComment
}: CommentProps) {
  const [likes, setLikes] = useState(like);

  function handleAddLike() {
    setLikes((prevState) => {
      return prevState + 1
    })
  }

  return (
    <div className={styles.container}>
      <Avatar urlImage={avatar} hasBorder={false} alt="Foto de perfil" />
      <div className={styles.commentBox}>
        <main className={styles.main}>

          <header>
            <div className={styles.authorAndTime}>
              <h3>{name}<span> (você)</span></h3>
              <time title="11 de Maio às 8:13h" dateTime="2022-05-11:08:13:30">
                Cerca de {time}h atrás
              </time>
            </div>
            <button type='button' aria-label="Deletar comentário" onClick={onDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </main>

        <footer className={styles.footer}>
          <button type='button' onClick={() => handleAddLike()}>
            <ThumbsUp size={20} aria-label="Curtir" />
            <p>Aplaudir<span>{likes}</span></p>
          </button>
        </footer>
      </div>
    </div>
  )
}