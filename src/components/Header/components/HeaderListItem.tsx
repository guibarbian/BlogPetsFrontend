import styles from '../style.module.css';

const HeaderListItem = ({ children }: React.LiHTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={styles.item}>
      {children}
    </li>
  )
}

export default HeaderListItem
