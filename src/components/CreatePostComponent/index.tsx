import CommentInput from "./components/CommentInput"
import PostButton from "./components/PostButton"
import TitleInput from "./components/TitleInput"
import styles from './styles.module.css'

const CreatePostComponent = () => {
  return (
    <div className={styles.body}>
      <form className={styles.form}>
        <TitleInput placeholder="What's up?"/>
        <CommentInput placeholder="Speak to the world" />
        <PostButton />
      </form>
    </div>
  )
}

export default CreatePostComponent
