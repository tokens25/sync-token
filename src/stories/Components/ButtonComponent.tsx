import React from "react"
import styles from "./ButtonComponent.module.css"
import { iconMap, IconName } from "../assets/iconAssets"

export interface ButtonComponentProps {
  text?: string
  leftIconSrc?: IconName
  rightIconSrc?: IconName
  size?: "default" | "small" | "large"
  type?: "primary" | "secondary" | "tertiary" | "subscribe"
  state?: "default" | "hover" | "active" | "disabled"
  onClick?: () => void
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  leftIconSrc = "none",
  rightIconSrc = "none",
  size = "default",
  type = "primary",
  state = "default",
  onClick,
}) => {
  const className = [styles.button, styles[type], styles[size], styles[state]]
    .filter(Boolean)
    .join(" ")

  const LeftIcon = iconMap[leftIconSrc]
  const RightIcon = iconMap[rightIconSrc]

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
      {LeftIcon && <img src={LeftIcon} alt="left icon" style={iconStyle} />}
      {text}
      {RightIcon && <img src={RightIcon} alt="right icon" style={iconStyle} />}
    </button>
  )
}
