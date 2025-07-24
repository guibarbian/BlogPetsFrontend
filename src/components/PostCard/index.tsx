import type { Post } from '../../types';
import ContentComponent from "./components/ContentComponent";
import LikesComponent from "./components/LikesComponent";
import TitleComponent from "./components/TitleComponent";
import styles from './styles.module.css';

const PostCard = (props: Post) => {
    const{title, content, likes, liked} = props
    
    
  return (
    <li className={styles.list}>
        <TitleComponent title={title} />
        <ContentComponent content={content} />
        <LikesComponent liked={liked} likes={likes} />
    </li>
  )
}

export default PostCard
