import styles from '../styles.module.css'

const TitleInput = ({placeholder}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={styles.titleHeader}>
        <input placeholder={placeholder} maxLength={15}/>
    </div>
  )
}

export default TitleInput
