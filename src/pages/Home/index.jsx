import { Post } from '../../components/Post';
import { Sidebar } from '../../components/Sidebar';

import styles from './styles.module.css';

export function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.squareBlue}>
          <Post
            author="Lucas de Lima"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere provident quod eius, consectetur, sint dolor voluptates autem iste est repudiandae dolores delectus neque aliquam deserunt nam nesciunt a asperiores."
          />
          <Post
            author="Sorveteiro"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere provident quod eius, consectetur, sint dolor voluptates autem iste est repudiandae dolores delectus neque aliquam deserunt nam nesciunt a asperiores."
          />
          <Post
            author="Sorveteiro"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere provident quod eius, consectetur, sint dolor voluptates autem iste est repudiandae dolores delectus neque aliquam deserunt nam nesciunt a asperiores."
          />
          <Post
            author="Sorveteiro"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere provident quod eius, consectetur, sint dolor voluptates autem iste est repudiandae dolores delectus neque aliquam deserunt nam nesciunt a asperiores."
          />
          <Post
            author="Sorveteiro"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere provident quod eius, consectetur, sint dolor voluptates autem iste est repudiandae dolores delectus neque aliquam deserunt nam nesciunt a asperiores."
          />
          <Post
            author="Sorveteiro"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere provident quod eius, consectetur, sint dolor voluptates autem iste est repudiandae dolores delectus neque aliquam deserunt nam nesciunt a asperiores."
          />
          <Post
            author="Sorveteiro"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere provident quod eius, consectetur, sint dolor voluptates autem iste est repudiandae dolores delectus neque aliquam deserunt nam nesciunt a asperiores."
          />
          <Post
            author="Sorveteiro"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere provident quod eius, consectetur, sint dolor voluptates autem iste est repudiandae dolores delectus neque aliquam deserunt nam nesciunt a asperiores."
          />
        </div>
      </div>
    </div>
  );
}
