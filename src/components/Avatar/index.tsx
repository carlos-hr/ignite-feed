import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
}

const Avatar = ({ src }: AvatarProps) => {
  return <img className={styles.avatar} src={src} />;
};

export default Avatar;
