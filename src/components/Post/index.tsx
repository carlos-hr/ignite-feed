import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";
import { FormEvent, useState } from "react";
import Avatar from "../Avatar";
import Comment from "../Comment";
import styles from "./Post.module.css";

interface PostProps {
  post: {
    id: number;
    author: {
      avatarUrl: string;
      name: string;
      role: string;
    };
    content: { type: string; content: string }[];
    publishedAt: Date;
  };
}

const Post = ({ post }: PostProps) => {
  const { author, content, publishedAt } = post;

  const date = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const postMoment = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([
    { id: 1, comment: "Muito bom Devon, parabéns!! 👏👏" },
  ]);

  const addComment = (e: FormEvent) => {
    e.preventDefault();

    setComments([
      ...comments,
      { id: comments.length + 1, comment: newComment },
    ]);

    setNewComment("");
  };

  const deleteComment = (id: number) => {
    const filteredComments = comments.filter((comment) => comment.id !== id);
    setComments(filteredComments);
  };

  const enableSubmit = newComment.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={date} dateTime={publishedAt.toISOString()}>
          {postMoment}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, i, x) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a>{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={addComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Deixe um comentário"
          required
        />
        <footer>
          <button disabled={enableSubmit} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentsList}>
        {comments.map((comment) => (
          <Comment
            deleteComment={deleteComment}
            id={comment.id}
            key={comment.id}
            comment={comment.comment}
          />
        ))}
      </div>
    </article>
  );
};

export default Post;
