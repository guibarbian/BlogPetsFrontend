import { FaGithub, FaLinkedin  } from "react-icons/fa";
import styles from "../styles.module.css"

const FooterSocials = () => {
  return (
    <div>
      <a href="https://github.com/guibarbian">
        <FaGithub className={styles.socials} />
      </a>
      <a href="https://www.linkedin.com/in/guilherme-augusto-barbian-12365b20b/">
        <FaLinkedin className={styles.socials} />
      </a>
    </div>
  )
}

export default FooterSocials
