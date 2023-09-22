import { useState } from 'react';
import { Trash, ThumbsUp } from "phosphor-react";

import styles from './styles.module.css';
import { Avatar } from '../Avatar';
import * as Dialog from '@radix-ui/react-dialog';


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
        <section className={styles.main}>

          <header>
            <div className={styles.authorAndTime}>
              <h3>{name}<span> (você)</span></h3>
              <time title="11 de Maio às 8:13h" dateTime="2022-05-11:08:13:30">
                Cerca de {time}h atrás
              </time>
            </div>

            <Dialog.Root>
              <Dialog.Trigger className={styles.deleteButton} >
                <Trash aria-label="Deletar comentário" size={24} />
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className={styles.overlay} />
                <Dialog.Content className={styles.modal}>
                  <Dialog.Title className={styles.titleModal}>Excluir comentário</Dialog.Title>
                  <Dialog.Description>Você tem certeza que gostaria de excluir este comentário?</Dialog.Description>
                  <footer>
                    <Dialog.Close aria-label='Cancelar' className={styles.cancelButton} >Cancelar</Dialog.Close>
                    <Dialog.Close className={styles.confirmButton} onClick={onDeleteComment}>Sim, excluir</Dialog.Close>
                  </footer>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>



          </header>

          <p>{content}</p>
        </section>

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