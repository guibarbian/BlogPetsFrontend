import styles from '../styles.module.css'

type titleProps = {
    title:string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const TitleComponent = ({title}: titleProps) => {
  return (
    <a href="/" className={styles.none}>
      <div className={styles.titleHeader}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </a>
  )
}

export default TitleComponent
