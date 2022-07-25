import { Header, Post, Sidebar } from "./components";
import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
