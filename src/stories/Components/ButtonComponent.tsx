import React from "react"
import styles from "./ButtonComponent.module.css"

export interface ButtonComponentProps {
  text?: string
  leftIconSrc?: string
  rightIconSrc?: string
  size?: "default" | "small" | "large"
  type?: "primary" | "secondary" | "tertiary"
  state?: "default" | "hover" | "active" | "disabled"
  onClick?: () => void
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  leftIconSrc,
  rightIconSrc,
  size = "default",
  type = "primary",
  state = "default",
  onClick,
}) => {
  const className = [styles.button, styles[type], styles[size], styles[state]]
    .filter(Boolean)
    .join(" ")

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={state === "disabled"}
    >
      {leftIconSrc && <img src={leftIconSrc} alt="left icon" />}
      {text}
      {rightIconSrc && <img src={rightIconSrc} alt="right icon" />}
    </button>
  )
}
