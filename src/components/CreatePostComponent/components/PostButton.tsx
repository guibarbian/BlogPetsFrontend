import Button from '../../Button'
import styles from '../styles.module.css'

const PostButton = () => {
  return (
    <div className={styles.postBox}>
      <Button variant='submit'>
        Send Post
      </Button>
    </div>
  )
}

export default PostButton
