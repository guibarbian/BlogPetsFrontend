import CommentInput from "./components/CommentInput"
import TitleInput from "./components/TitleInput"
import styles from './styles.module.css'

const CreatePostComponent = () => {
  return (
    <div>
      <form className={styles.form}>
        <TitleInput placeholder="What's up?"/>
        <CommentInput placeholder="Tell us about yourself" />
      </form>
    </div>
  )
}

export default CreatePostComponent
