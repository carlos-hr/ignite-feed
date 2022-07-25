import Avatar from "../Avatar";
import Comment from "../Comment";
import styles from "./Post.module.css";

const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/carlos-hr.png" />
          <div className={styles.authorInfo}>
            <strong>Carlos</strong>
            <span>Frontend developer</span>
          </div>
        </div>

        <time title="25 de Julho às 16:29h" dateTime="2022-07-25 16:29:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p> Fala galeraa 👋 </p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            <a> jane.design/doctorcare </a>
          </p>
          <p>
            <a> #novoprojeto </a>
            <a> #nlw</a>
            <a> #rocketseat</a>
          </p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentsList}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};

export default Post;
