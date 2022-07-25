import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

const Comment = () => {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://github.com/carlos-hr.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Carlos</strong>
              <time
                title="25 de Julho às 16:29h"
                dateTime="2022-07-25 16:29:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={16} />
            Aplaudir <span>100</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
