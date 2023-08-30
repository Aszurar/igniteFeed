import PropTypes from 'prop-types';

import styles from './styles.module.css';
import { Avatar } from '../Avatar';
import { Divisor } from '../Divisor';
import { Comment } from '../Comment';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';
export function Post({ author, publishedAt, content }) {
  const publishedDateToISO = publishedAt.toISOString();
  const publishedDateFormatted = format(publishedAt, "dd 'de' MMMM 'às' HH:mm'h'", { locale: ptBR });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

  const [comments, setComments] = useState([
    "Post maneiro demais!",
  ]);
  const [newComment, setNewComment] = useState('');

  const contentList = content.map((line, index) => {
    if (line.type === 'paragraph') {
      return <p key={index}>{line.string}</p>
    }
    if (line.type === 'link') {
      return <p key={index} className={styles.link}><a href="#">{line.string}</a></p>
    }
  });
  const commentsList = comments.map((comment, index) => {
    return <Comment
      key={index}
      like={33}
      content={comment}
      name='Jenny Wilson'
      avatar='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80'
    />
  });

  function handleUpdateNewComment(event) {
    setNewComment(event.target.value);
  }

  function handleAddNewComment(event) {
    event.preventDefault();

    if (newComment.trim() === '') {
      return;
    }

    setComments([...comments, newComment]);
    setNewComment('');
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar urlImage={author.avatarUrl} />

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
        <h5>Deixe seu feedback</h5>
        <textarea
          placeholder="Escreva um comentário..."
          value={newComment}
          onChange={handleUpdateNewComment}
        />
        <button type="submit">Comentar</button>
      </form>

      <div className={styles.commentList}>
        {commentsList}
      </div>
    </article>
  );
}

Post.propTypes = {
  author: PropTypes.object.isRequired,
  publishedAt: PropTypes.instanceOf(Date).isRequired,
  content: PropTypes.array.isRequired,
};
