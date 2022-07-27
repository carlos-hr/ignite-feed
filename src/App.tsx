import { Header, Post, Sidebar } from "./components";
import styles from "./App.module.css";
import "./global.css";

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/carlos-hr.png",
        name: "Carlos Henrique",
        role: "Frontend Developer",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋 " },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare " },
      ],
      publishedAt: new Date("2022-07-26 19:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/carlos-hr.png",
        name: "Carlos Henrique",
        role: "Frontend Developer",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋 " },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare " },
      ],
      publishedAt: new Date("2022-07-26 20:00:00"),
    },
  ];

  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
