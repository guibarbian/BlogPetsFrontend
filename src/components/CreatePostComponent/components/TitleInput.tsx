import styles from '../styles.module.css'

const TitleInput = ({placeholder}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={styles.titleHeader}>
        <textarea placeholder={placeholder} maxLength={15} name="" id=""></textarea>
    </div>
  )
}

export default TitleInput
