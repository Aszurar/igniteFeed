import { Post } from '../../components/Post';

import styles from './styles.module.css';

export function Home() {
  return (
    <div style={{ flex: 1 }}>
      {/* <div
        style={{
          backgroundColor: '#e57373',
          borderRadius: 5,
          display: 'flex',
          height: 100,
          width: 100,
        }}
      />*/}
      <div style={styles.containerum} />
      <div style={styles.containerdois} />
      <Post
        author="Lucas de Lima"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere provident quod eius, consectetur, sint dolor voluptates autem iste est repudiandae dolores delectus neque aliquam deserunt nam nesciunt a asperiores."
      />
      <Post
        author="Sorveteiro"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere provident quod eius, consectetur, sint dolor voluptates autem iste est repudiandae dolores delectus neque aliquam deserunt nam nesciunt a asperiores."
      />
    </div>
  );
}
