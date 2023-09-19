import styles from './styles.module.css';
import { Avatar } from '../Avatar';
import { Divisor } from '../Divisor';
import { Comment } from '../Comment';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

type AuthorProps = {
  avatarUrl: string;
  name: string;
  role: string;
}

type ContentProps = {
  type: string;
  string: string;
}

type PostProps = {
  author: AuthorProps;
  content: ContentProps[];
  publishedAt: Date;
}


export function Post({ author, content, publishedAt }: PostProps) {
  const publishedDateToISO = publishedAt.toISOString();
  const publishedDateFormatted = format(publishedAt, "dd 'de' MMMM 'às' HH:mm'h'", { locale: ptBR });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

  const [comments, setComments] = useState([
    "Post maneiro demais!",
  ]);
  const [newComment, setNewComment] = useState('');

  const contentList = content.map((line) => {
    if (line.type === 'paragraph') {
      return <p key={line.string}>{line.string}</p>
    }
    if (line.type === 'link') {
      return <p key={line.string} className={styles.link}><a href="#">{line.string}</a></p>
    }
  });

  function handleUpdateNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("")
    setNewComment(event.target.value);
  }

  function handleAddNewComment(event: FormEvent) {
    event.preventDefault();

    if (newComment.trim() === '') {
      return;
    }

    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório")
  }

  function handleDeleteComment(currentIndex: number) {
    if (currentIndex >= 0 && currentIndex <= comments.length) {
      const commentsWithoutDeletedOne = comments.filter((comment, index) => index !== currentIndex);
      setComments(commentsWithoutDeletedOne);
    }
  }

  const commentsList = comments.map((comment, index) => {
    return <Comment
      key={comment}
      like={0}
      content={comment}
      time="10"
      name='Leslie Alexander'
      avatar='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
      onDeleteComment={() => handleDeleteComment(index)}
    />
  });


  const isNewCommentEmpty = newComment.trim().length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar urlImage={author.avatarUrl} alt="Foto de perfil" />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <p>{author.role}</p>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedDateToISO}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <main>
        {contentList}
      </main>

      <Divisor />

      <form className={styles.commentForm} onSubmit={handleAddNewComment}>
        <h2>Deixe seu feedback</h2>
        <textarea
          placeholder="Escreva um comentário..."
          value={newComment}
          onChange={handleUpdateNewComment}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit"
            disabled={isNewCommentEmpty}
          >Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {commentsList}
      </div>
    </article>
  );
}