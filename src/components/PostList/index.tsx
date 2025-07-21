import type { Post } from "../../types"
import PostCard from "../PostCard"
import styles from "./styles.module.css"

interface PostListProps{
    posts: Post[]
}

const PostList = ({posts}: PostListProps) => {
  return (
    <ul className={styles.list}>
        {posts.map(post => (
            <PostCard key={post.id} {...post} />
        ))}
    </ul>
  )
}

export default PostList
