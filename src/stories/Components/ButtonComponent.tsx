import React from "react"
import styles from "./ButtonComponent.module.css"
import { iconMap } from "../assets/iconAssets"

export interface ButtonComponentProps {
  text?: string
  showLeftIcon?: boolean
  showRightIcon?: boolean
  size?: "default" | "small" | "large"
  type?: "primary" | "secondary" | "tertiary" | "subscribe"
  state?: "default" | "hover" | "active" | "disabled"
  onClick?: () => void
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  showLeftIcon = false,
  showRightIcon = false,
  size = "default",
  type = "primary",
  state = "default",
  onClick,
}) => {
  const className = [styles.button, styles[type], styles[size], styles[state]]
    .filter(Boolean)
    .join(" ")

  const iconSrc = iconMap[type] // Automatically match icon based on `type`

  const iconStyle: React.CSSProperties = {
    width: 20,
    height: 20,
    marginInline: 4,
  }

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={state === "disabled"}
    >
      {showLeftIcon && (
        <span style={iconStyle}>
          <img src={iconSrc} alt="left icon" />
        </span>
      )}
      {text}
      {showRightIcon && (
        <span style={iconStyle}>
          <img src={iconSrc} alt="right icon" />
        </span>
      )}
    </button>
  )
}
