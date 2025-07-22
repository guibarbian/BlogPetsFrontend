import { FaRegHeart } from "react-icons/fa";
import type { Post } from '../../types';
import Button from '../Button';
import styles from './styles.module.css';

const PostCard = (props: Post) => {
    const{title, content, likes} = props
  return (
    <li className={styles.list}>
        <div className={styles.titleHeader}>
          <a href="/" className={styles.none}>
            <h3 className={styles.title}>{title}</h3>
          </a>
        </div>
        <div className={styles.contentBox}>
          <span>{content}</span>
        </div>
        <div className={styles.likesBox}>
          <Button variant='like'>
            <FaRegHeart className={styles.heart} />
          </Button>
          <h4>{likes}</h4>
        </div>
    </li>
  )
}

export default PostCard
