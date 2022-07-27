import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import Avatar from "../Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  comment: string;
  id: number;
  deleteComment: (id: number) => void;
}

const Comment = ({ comment, deleteComment, id }: CommentProps) => {
  const [likeCounts, setLikeCounts] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const addOrRemoveLike = () => {
    if (!isLiked) {
      setLikeCounts((currentCount) => currentCount + 1);
      setIsLiked(true);
    } else {
      setLikeCounts((currentCount) => currentCount - 1);
      setIsLiked(false);
    }
  };

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/carlos-hr.png" hasBorder={false} />
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

            <button
              title="Deletar comentário"
              onClick={() => deleteComment(id)}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>
        <footer>
          <button
            className={isLiked ? styles.filled : ""}
            onClick={addOrRemoveLike}
          >
            <ThumbsUp size={16} />
            Aplaudir <span>{likeCounts}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
