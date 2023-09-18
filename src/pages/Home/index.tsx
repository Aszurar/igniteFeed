import { Post } from '../../components/Post';
import { Sidebar } from '../../components/Sidebar';

import styles from './styles.module.css';

const POSTS = [
  {
    id: 1,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      name: "Fernanda",
      role: "Dev Front-End",
    },
    content: [
      { type: "paragraph", string: "Fala galeraa" },
      { type: "paragraph", string: "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀" },
      { type: "link", string: "👉 jane.design / doctorcare" }
    ],
    publishedAt: new Date("2023-08-15 08:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      name: "Sara",
      role: "Dev Mobile",
    },
    content: [
      { type: "paragraph", string: "E aí galera, tudo bem?" },
      { type: "paragraph", string: "Sobre o projeto, eu fiz algumas alterações no layout e também adicionei algumas funcionalidades extras, como:" },
      { type: "paragraph", string: "👉 Dark Mode" },
      { type: "paragraph", string: "👉 Responsividade" },
      { type: "paragraph", string: "👉 Tema de cores" },
      { type: "paragraph", string: "👉 Animações" },
      { type: "paragraph", string: "👉 E mais algumas outras coisas" },
      { type: "paragraph", string: "Espero que gostem do resultado final. Qualquer dúvida, só me chamar no Discord." },
      { type: "paragraph", string: "Valeu!" },
      { type: "link", string: "👉 sara.dev/home" }
    ],
    publishedAt: new Date("2023-08-18 10:00:00")
  },
]

export function Home() {

  const postsList = POSTS.map(post =>
    <Post
      key={post.id}
      author={post.author}
      content={post.content}
      publishedAt={post.publishedAt}
    />
  )

  return (
    <main className={styles.container}>
      <Sidebar />
      <div>
        {postsList}
      </div>
    </main>
  );
}
