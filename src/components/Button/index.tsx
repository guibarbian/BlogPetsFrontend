import React from 'react'
import styles from './styles.module.css'

type buttonProps ={
    variant: "like" | "submit"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({variant ,children, ...rest}: buttonProps) => {
  return (
    <button className={
        variant === "like"? styles.like : styles.submit
    } {...rest}>
        {children}
    </button>
  )
}

export default Button
