import styles from '../styles.module.css'

type contentProps ={
    content:string
}

const ContentComponent = ({content}: contentProps) => {
  return (
    <div className={styles.contentBox}>
      <span>{content}</span>
    </div>
  )
}

export default ContentComponent
