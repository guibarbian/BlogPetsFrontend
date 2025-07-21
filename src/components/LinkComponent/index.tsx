import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

type LinkComponentProps = {
    href:string,
    text?:string
} & React.RefAttributes<HTMLAnchorElement>

const LinkComponent = ({ href, text, ...rest }: LinkComponentProps) => {
  return (
    <Link className={styles.link} to={href} {...rest}>{text}</Link>
  )
}

export default LinkComponent
