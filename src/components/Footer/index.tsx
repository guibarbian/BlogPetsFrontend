import FooterSocials from './components/FooterSocials'
import FooterText from './components/FooterText'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <FooterText />
        <FooterSocials />
    </footer>
  )
}

export default Footer
