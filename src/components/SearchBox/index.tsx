import styles from './styles.module.css'

const SearchBox = ( {...props}:  React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className={styles.input} {...props} />
  )
}

export default SearchBox
