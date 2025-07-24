import styles from '../styles.module.css'

const CommentInput = ({placeholder}:React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={styles.contentBox}>
      <textarea placeholder={placeholder} name="" id=""></textarea>
    </div>
  )
}

export default CommentInput
