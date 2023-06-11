import { Post } from '../../components/Post';
import { Sidebar } from '../../components/Sidebar';

import styles from './styles.module.css';

export function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Sidebar />
        <div>
          <Post author="Lucas de Lima" />
          <Post author="Sorveteiro" />
          <Post author="Sorveteiro" />
          <Post author="Sorveteiro" />
        </div>
      </div>
    </div>
  );
}
