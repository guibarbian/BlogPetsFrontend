import styles from '../styles.module.css'

const CommentInput = ({placeholder}:React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={styles.contentBox}>
      <textarea placeholder={placeholder} maxLength={255}></textarea>
    </div>
  )
}

export default CommentInput
