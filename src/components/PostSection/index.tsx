import useFetchPosts from "../../hooks/useFetchPosts"
import PostList from "../PostList"
import styles from './styles.module.css'


const PostSection = () => {
  const {posts, isLoading, error} = useFetchPosts()

  return (
    <section>
      <h1 className={styles.h1}>Posts</h1>
      {isLoading && <p>Loading posts...</p>}
      {error && <p>Error loading posts</p>}
      <PostList posts={posts} />
    </section>
  )
}

export default PostSection
