import { Link } from "react-router-dom"
import styles from './styles.module.css'

type LogoProps = {
  size: "small" | "medium" | "large"
} & React.ImgHTMLAttributes<HTMLImageElement>

const Logo = ({size='medium'}: LogoProps) => {
  const classMap = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large
  }

  return (
    <Link to={"/"}>
        <img className={classMap[size]} sizes={size} src="../../../public/cat.svg" alt="BlogPetsLogo"></img>
    </Link>
  )
}

export default Logo
