import styles from '../styles.module.css'
import FooterSocials from './FooterSocials'

const FooterText = () => {
  return (
    <div className={styles.info}>
        <span>Developed by Guilherme Barbian</span>
        <span>If you find any bugs, please contact me by my socials</span>
        <FooterSocials />
    </div>
  )
}

export default FooterText
