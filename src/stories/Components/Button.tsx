import { PropsWithChildren } from "react"
import styles from "./Button.module.css"

type ButtonProps = PropsWithChildren<{
  onClick?: () => void
  variant: "primary" | "secondary"
  size: "sm" | "md" | "lg"
}>

export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
}: ButtonProps) => {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
